import React from 'react';
import { useState, useEffect } from "react";
import ReactEcharts from 'echarts-for-react'

export default function WindChart() {
    const [windParams, setWindParams] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:8000/api/wind/`
        )
            .then(res => res.json())
            .then(response => {
                setWindParams(response)
            })
            .catch(error => console.log(error));
    },[]);
    return(<>
        {windParams ?
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
                            data: windParams.map(index=>{return index.date}),
                            splitLine: { show: false },
                            type: "category"
                        }
                    ],
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: windParams.map(index=>{return index.wind}),
                        type: 'line'
                    }]
                }}
            />
            :<div>Данные загружаются</div>}
    </>)
}