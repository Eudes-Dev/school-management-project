'use client'

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    revenu: 4000,
    frais: 2400,
    amt: 2400,
  },
  {
    name: 'Fev',
    revenu: 3000,
    frais: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    revenu: 2000,
    frais: 9800,
    amt: 2290,
  },
  {
    name: 'Avr',
    revenu: 2780,
    frais: 3908,
    amt: 2000,
  },
  {
    name: 'Mai',
    revenu: 1890,
    frais: 4800,
    amt: 2181,
  },
  {
    name: 'Jui',
    revenu: 2390,
    frais: 3800,
    amt: 2500,
  },
  {
    name: 'Juil',
    revenu: 3490,
    frais: 4300,
    
  },
  {
    name: 'Aou',
    revenu: 3490,
    frais: 4300,
    
  },
  {
    name: 'Sep',
    revenu: 3490,
    frais: 4300,
    
  },
  {
    name: 'Oct',
    revenu: 3490,
    frais: 4300,
    
  },
  {
    name: 'Nov',
    revenu: 3490,
    frais: 4300,
    
  },
  {
    name: 'Dec',
    revenu: 3490,
    frais: 4300,
    
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Finance</h1>
          <Image
            src={'/moreDark.png'}
            alt=""
            width={20}
            height={20}
          />
        </div>

        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tick={{ fill: '#d1d5db' }} 
                tickLine={false}
                tickMargin={10}
            />
            <YAxis 
                axisLine={false} 
                tick={{ fill: '#d1d5db' }} 
                tickMargin={20}
                tickLine={false}
            />
            <Tooltip />
            <Legend 
              align="center" 
              verticalAlign="top" 
              wrapperStyle={{ padding: '10px', paddingBottom: '30px' }}
            />
            <Line 
                type="monotone" 
                dataKey="revenu" 
                stroke="#FAE27C"
                strokeWidth={5}
            />
            <Line 
                type="monotone" 
                dataKey="frais" 
                stroke="#C3EBFA" 
                strokeWidth={5}
            />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart