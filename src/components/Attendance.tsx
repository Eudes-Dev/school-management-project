'use client'

import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
      name: 'Lun',
      present: 60,
      absent: 40,
    },
    {
      name: 'Mar',
      present: 70,
      absent: 60,
    },
    {
      name: 'Mer',
      present: 90,
      absent: 75,
    },
    {
      name: 'Jeu',
      present: 90,
      absent: 75,
    },
    {
      name: 'Ven',
      present: 65,
      absent: 55,
    },
  ];

const Attendance = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Présence</h1> 
          <Image
            src={'/moreDark.png'}
            alt=""
            width={20}
            height={20}
          />
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tick={{ fill: '#d1d5db' }} 
              tickLine={false} 
            />
            <YAxis 
              axisLine={false} 
              tick={{ fill: '#d1d5db' }} 
              tickLine={false}
            />
            <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}/>
            <Legend 
              align="left" 
              verticalAlign="top" 
              wrapperStyle={{ padding: '20px', paddingBottom: '40px' }}
            />
            <Bar 
              dataKey="present" 
              fill="#FAE27C" 
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar 
              dataKey="absent" 
              fill="#C3EBFA" 
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Attendance