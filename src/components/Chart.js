import React from 'react'
import Data from './Data';
import SmallNavbar from './SmallNavbar';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Chart = () => {
  return (
    <>
    
    <div className="border border-primary" >
    <SmallNavbar/>
    <BarChart
    width={500}
    height={300}
    data={Data}
    margin={{
      top: 60,
      right: 30,
      left: 20,
      bottom: 5
    }}
    barSize={20}
  >
    <XAxis dataKey="Name" scale="point" padding={{ left: 10, right: 10 }} />
    <YAxis />
    <Tooltip />
    <Legend />
    <CartesianGrid strokeDasharray="3 3" />
    <Bar dataKey="Count" fill="#478aed" background={{ fill: "#d7e3f5" }} />
  </BarChart>
  </div>
  </>
  )
}

export default Chart
