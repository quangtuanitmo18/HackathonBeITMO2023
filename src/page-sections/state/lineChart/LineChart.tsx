import { Line } from 'react-chartjs-2'
import React, { useState } from 'react'
import { ChartData, Point } from 'chart.js/auto'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import getGradient, { checkColorchart } from '@/utils/app'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

interface Props {
  beValue: number[]
}

const LineChart = (props: Props) => {
  const { beValue } = props
  const beLable = ['be Healthy', 'be Fit', 'be Pro', 'be Friendly', 'be Eco', 'be Open']
  const [bedata, setBeData] = useState<ChartData<'line', (number | Point | null)[], unknown>>({
    labels: beLable,
    datasets: [
      {
        label: 'be',
        data: beValue,
        pointRadius: 4,
        borderWidth: 4,
        backgroundColor: (ctx) => {
          return checkColorchart(ctx.parsed?.y)
        },
        pointBorderColor: (ctx) => {
          return checkColorchart(ctx.parsed?.y)
        },
        borderColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) {
            // This case happens on initial chart load
            return
          }
          return getGradient(ctx, chartArea)
        }
      }
    ]
  })
  let delayed: any
  const options = {
    plugins: {
      legend: {
        display: false
      }
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
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 14
          }
        }
      },
      y: {
        stacked: true,
        display: false
      }
    }
  }

  return <Line data={bedata} options={options}></Line>
}

export default LineChart
