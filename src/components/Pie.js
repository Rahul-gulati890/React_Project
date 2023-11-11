import React from 'react'
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Data from './Data';

const Pie = () => {

    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
      };

  return (
    <>
      <div>
      <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={Data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="Count"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
      </div>
    </>
  )
}

export default Pie
