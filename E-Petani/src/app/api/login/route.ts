import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    // --- IMPORTANT SECURITY WARNING ---
    // This is INSECURE for production.
    // You MUST hash and compare passwords using a library like 'bcrypt'.
    // The 'password' column in your database should store hashed passwords,
    // not plain text.
    // Example (conceptual, requires 'bcrypt'):
    // const user = await prisma.user.findUnique({ where: { email } });
    // if (!user || !(await bcrypt.compare(password, user.password))) {
    //   return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    // }
    // --- END SECURITY WARNING ---

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password, // <-- **INSECURE! READ WARNING ABOVE!**
      },
      select: { // Select only necessary fields to return
        id: true,
        name: true,
        email: true,
        role: true,
      }
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    }

    // In a real application, you'd generate a JWT (JSON Web Token) here
    // and send it back to the client for session management.
    // For example: const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // return NextResponse.json({ message: 'Login successful!', user, token }, { status: 200 });

    return NextResponse.json({ message: 'Login successful!', user }, { status: 200 });

  } catch (error) {
    console.error('API login error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}

// Optional: Handle other HTTP methods if needed
export async function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}