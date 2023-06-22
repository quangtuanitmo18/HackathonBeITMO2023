import { Doughnut } from 'react-chartjs-2'
import React, { useEffect, useState } from 'react'
import { ChartData } from 'chart.js/auto'
import { Chart as ChartJSGauge, ArcElement, Tooltip, Legend } from 'chart.js'

import { checkColorchart } from '@/utils/app'
ChartJSGauge.overrides.doughnut.cutout = '88%'
const beCounter = {
  id: 'beCounter',
  afterDatasetDraw(chart: any, args: any, pluginOptions: any) {
    const { ctx, data } = chart

    ctx.save()
    const xCoor = chart.getDatasetMeta(0).data[0].x
    const yCoor = chart.getDatasetMeta(0).data[0].y
    const score = data.datasets[0].data[0]
    ctx.font = '40px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(score, xCoor, yCoor - 25)
  }
}
ChartJSGauge.register(ArcElement, Tooltip, Legend)
interface Props {
  beValue: number[]
}
const GaugeChart = (props: Props) => {
  const { beValue } = props
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const beLable = ['be ITMO', '']
  const [bedata, setBeData] = useState<ChartData<'doughnut', number[], string>>({
    labels: beLable,
    datasets: [
      {
        label: 'be',
        data: beValue,
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        // cutout: '88%',
        backgroundColor: (ctx) => {
          return ctx.dataIndex == 0 ? checkColorchart(ctx.parsed) : '#E7E7E7'
        }

        // pointBorderColor: (ctx) => {
        //   return checkColorchart(ctx.parsed?.y)
        // },
        // borderColor: function (context) {
        //   const chart = context.chart
        //   const { ctx, chartArea } = chart

        //   if (!chartArea) {
        //     // This case happens on initial chart load
        //     return
        //   }
        //   return getGradient(ctx, chartArea)
        // }
      }
    ]
  })

  let delayed: any
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false // <-- this option disables tooltips
      },
      hover: { enabled: null }
    },
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      onComplete: () => {
        delayed = true
      },
      delay: (context: { type: string; mode: string; dataIndex: number; datasetIndex: number }) => {
        let delay = 0
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      }
    }
  }

  return <Doughnut data={bedata} options={options} plugins={[beCounter]}></Doughnut>
}

export default GaugeChart
