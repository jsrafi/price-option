import axios from "axios";
import { useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Charts = () => {

    const [charts,setCharts] = useState([])

    axios.get('data.json')
    .then(data=> setCharts(data.data))
    return (
        <div>
            <h1 className="text-3xl ml-10 mt-10">charts : {charts.length}</h1>
            
            <BarChart
          width={1300}
          height={300}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className="text-sm" dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="best_selling" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
            
        </div>
    );
};

export default Charts;