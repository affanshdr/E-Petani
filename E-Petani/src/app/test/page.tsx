"use client"
import { useState, useEffect } from 'react'

export default function TestPage() {
  const [admins, setAdmins] = useState<any[]>([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // 1. GET Data
  const fetchAdmins = async () => {
    try {
      const res = await fetch('/api/admin')
      const data = await res.json()
      setAdmins(data)
    } catch (error) {
      console.error("Gagal fetch data:", error)
    }
  }

  // 3. DELETE Data
  const deleteAdmin = async (id: number) => {
    try {
      const res = await fetch(`/api/admin?id=${id}`, {
        method: 'DELETE'
      })
      if (res.ok) fetchAdmins()
    } catch (error) {
      console.error("Gagal menghapus admin:", error)
    }
  }

  // Load initial data
  useEffect(() => { fetchAdmins() }, [])

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Test API Admin</h1>


      {/* Admin List */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Daftar Admin</h2>
        <ul className="space-y-2">
          {admins.map((admin) => (
            <li key={admin.id} className="flex justify-between items-center p-3 border rounded">
              <span>
                {admin.username} 
                <span className="text-gray-500 text-sm ml-2">(ID: {admin.id})</span>
              </span>
              <button
                onClick={() => deleteAdmin(admin.id)}
                className="text-red-500 hover:text-red-700"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}