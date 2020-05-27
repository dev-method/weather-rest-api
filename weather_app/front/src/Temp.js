import React from 'react';
import { useState, useEffect } from "react";
import ReactEcharts from 'echarts-for-react'

export default function TempChart() {
    const [tempParams, setTempParams] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:8000/api/temp/`
        )
            .then(res => res.json())
            .then(response => {
                setTempParams(response)
            })
            .catch(error => console.log(error));
    },[]);
    return(<>
        {tempParams ?
            <ReactEcharts
                option={{
                    xAxis: [
                        {
                            axisLabel: {
                                interval: 10,
                                rotate: 75,
                                textStyle: {
                                    baseline: "top",
                                    color: "#333",
                                    fontSize: 10,
                                    fontWeight: "bold"
                                }
                            },
                            data: tempParams.map(index=>{return index.date}),
                            splitLine: { show: false },
                            type: "category"
                        }
                    ],
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: tempParams.map(index=>{return index.temp}),
                        type: 'line'
                    }]
                }}
            />
            :<div>Данные загружаются</div>}
    </>)
}