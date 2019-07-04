import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


export default function EwallyChart({data}) {
  return (
    <BarChart width={2000} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
        <Bar dataKey="amount" fill="#82ca9d" />
    </BarChart>
  );
}
