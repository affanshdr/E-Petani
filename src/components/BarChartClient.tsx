"use client";

import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { name: 'Jan', masuk: 20, keluar: 15, pengguna: 25 },
  { name: 'Feb', masuk: 25, keluar: 22, pengguna: 30 },
  { name: 'Mar', masuk: 40, keluar: 38, pengguna: 45 },
  { name: 'Apr', masuk: 55, keluar: 50, pengguna: 60 },
  { name: 'Mei', masuk: 65, keluar: 60, pengguna: 70 },
  { name: 'Jun', masuk: 60, keluar: 65, pengguna: 75 },
  { name: 'Jul', masuk: 70, keluar: 68, pengguna: 80 },
  { name: 'Agu', masuk: 50, keluar: 45, pengguna: 70 },
  { name: 'Sep', masuk: 45, keluar: 40, pengguna: 70 },
  { name: 'Okt', masuk: 60, keluar: 55, pengguna: 80 },
  { name: 'Nov', masuk: 75, keluar: 70, pengguna: 90 },
  { name: 'Des', masuk: 85, keluar: 80, pengguna: 100 },
];

const BarChartClient = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="masuk" fill="#00C2CB" name="Surat Masuk" />
        <Bar dataKey="keluar" fill="#55D187" name="Surat Keluar" />
        <Bar dataKey="pengguna" fill="#D17373" name="Pengguna" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartClient;
