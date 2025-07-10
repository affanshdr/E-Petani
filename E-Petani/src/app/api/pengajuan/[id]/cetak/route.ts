import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import puppeteer from 'puppeteer';

const prisma = new PrismaClient();

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const pengajuan = await prisma.pengajuanSurat.findUnique({
      where: { id },
    });

    if (!pengajuan) {
      return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 });
    }

    const warga: any = {
      nama_lengkap: pengajuan.nama_lengkap,
      no_nik: pengajuan.no_nik,
      no_kk: pengajuan.no_kk,
      alamat: pengajuan.alamat,
      jenis_kelamin: 'Laki-laki',
      tempat_lahir: 'Banda Aceh',
      tanggal_lahir: '01 Januari 2000',
      agama: 'Islam',
      pekerjaan: 'Pelajar',
    };

    const tanggalSurat = new Date().toLocaleDateString('id-ID');

    let htmlContent = '';

    switch (pengajuan.jenis_surat) {
      case 'Surat Keterangan Domisili':
        htmlContent = `
          <html>
            <body style="font-family: Arial; padding: 40px;">
              <h2 style="text-align:center">SURAT KETERANGAN DOMISILI</h2>
              <p style="text-align:center">Nomor: ${pengajuan.no_pengajuan}</p>
              <br/>
              <p>Yang bertanda tangan di bawah ini menerangkan bahwa:</p>
              <p>Nama: ${warga.nama_lengkap}</p>
              <p>NIK: ${warga.no_nik}</p>
              <p>Alamat: ${warga.alamat}</p>
              <br/>
              <p>Adalah benar berdomisili di alamat tersebut di wilayah kami.</p>
              <br/>
              <p>Banda Aceh, ${tanggalSurat}</p>
              <p>Lurah …………………..</p>
            </body>
          </html>
        `;
        break;

      case 'Surat Keterangan Usaha':
        htmlContent = `
          <html>
            <body style="font-family: Arial; padding: 40px;">
              <h2 style="text-align:center">SURAT KETERANGAN USAHA</h2>
              <p style="text-align:center">Nomor: ${pengajuan.no_pengajuan}</p>
              <br/>
              <p>Yang bertanda tangan di bawah ini menerangkan bahwa:</p>
              <p>Nama: ${warga.nama_lengkap}</p>
              <p>NIK: ${warga.no_nik}</p>
              <p>Alamat: ${warga.alamat}</p>
              <p>Memiliki usaha: ${pengajuan.keterangan || "Tidak disebutkan"}</p>
              <br/>
              <p>Usaha tersebut benar berada di wilayah kami.</p>
              <br/>
              <p>Banda Aceh, ${tanggalSurat}</p>
              <p>Lurah …………………..</p>
            </body>
          </html>
        `;
        break;

      case 'Surat Keterangan Belum Menikah':
        htmlContent = `
          <html>
            <body style="font-family: Arial; padding: 40px;">
              <h2 style="text-align:center">SURAT KETERANGAN BELUM MENIKAH</h2>
              <p style="text-align:center">Nomor: ${pengajuan.no_pengajuan}</p>
              <br/>
              <p>Yang bertanda tangan di bawah ini menerangkan bahwa:</p>
              <p>Nama: ${warga.nama_lengkap}</p>
              <p>NIK: ${warga.no_nik}</p>
              <p>Tempat/Tgl Lahir: ${warga.tempat_lahir}, ${warga.tanggal_lahir}</p>
              <br/>
              <p>Adalah benar hingga saat ini belum pernah menikah.</p>
              <br/>
              <p>Demikian surat ini dibuat untuk keperluan yang bersangkutan.</p>
              <br/>
              <p>Banda Aceh, ${tanggalSurat}</p>
              <p>Lurah …………………..</p>
            </body>
          </html>
        `;
        break;

      case 'Surat Keterangan Tidak Mampu':
        htmlContent = `
          <html>
            <body style="font-family: Arial; padding: 40px;">
              <h2 style="text-align:center">SURAT KETERANGAN TIDAK MAMPU</h2>
              <p style="text-align:center">Nomor: ${pengajuan.no_pengajuan}</p>
              <br/>
              <p>Yang bertanda tangan di bawah ini menerangkan bahwa:</p>
              <p>Nama: ${warga.nama_lengkap}</p>
              <p>Alamat: ${warga.alamat}</p>
              <p>Adalah benar warga yang termasuk keluarga tidak mampu.</p>
              <br/>
              <p>Surat ini dibuat untuk digunakan sebagaimana mestinya.</p>
              <br/>
              <p>Banda Aceh, ${tanggalSurat}</p>
              <p>Lurah …………………..</p>
            </body>
          </html>
        `;
        break;

      default:
        htmlContent = `
          <html>
            <body style="font-family: Arial; padding: 40px;">
              <p>Jenis surat tidak dikenali.</p>
            </body>
          </html>
        `;
        break;
    }

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="surat_${pengajuan.no_pengajuan}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Gagal generate PDF:', error);
    return NextResponse.json({ error: 'Gagal generate PDF' }, { status: 500 });
  }
}
