import React from 'react';
import { useState, useEffect } from "react";
import ReactEcharts from 'echarts-for-react'

export default function PressChart() {
    const [pressParams, setPressParams] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:8000/api/press/`
        )
            .then(res => res.json())
            .then(response => {
                setPressParams(response)
            })
            .catch(error => console.log(error));
    },[]);
    return(<>
        {pressParams ?
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
                            data: pressParams.map(index=>{return index.date}),
                            splitLine: { show: false },
                            type: "category"
                        }
                    ],
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: pressParams.map(index=>{return index.pressure}),
                        type: 'line'
                    }]
                }}
            />
            :<div>Данные загружаются</div>}
    </>)
}