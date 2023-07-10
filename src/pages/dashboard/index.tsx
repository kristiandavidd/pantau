import { EmptyLayout } from "@/components/layout"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard_header"
import { Bar, Doughnut,Pie } from "react-chartjs-2";
import { WeeklyData } from "@/configs/weekly_data";
import React from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions  } from 'chart.js/auto';
import { diseaseTypeData } from "@/configs/diseaseType_data";
import { CCTVData } from "@/configs/cctv_data";
import { reportData } from "@/configs/report_data";
import Link from "next/link";
import NavButton from "@/components/nav_button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface reportDataProps{
  data: {
    no: number,
    timestamp: string,
    device: string,
    diagnostic: string,
    imgPreview: string,
    imgUrl:string
  }
}

export default function dashboard(props:reportDataProps) {
  const {data} = props
  const getData = () => {
    const imageCaptured = WeeklyData.map((data) => data.imageCaptured);
    return { imageCaptured};
  };

  const { imageCaptured } = getData();

  const weeklyData = {
    labels: WeeklyData.map((data) => data.month),
    datasets: [
      {
        label: "Image Captured",
        backgroundColor: "#9D02FC",
        borderColor: "#9D02FC",
        data: imageCaptured,
        fill: false,
        barThickness: 25,
        
      },
    ],
  };

  const diseaseType_data = {
    labels: [
      'Mosaic Virus',
      'Leaf Mold',
      'Late Blight',
      'Bacterial Spot'
    ],
    datasets: [{
      label: "count",
      data: diseaseTypeData,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(157, 2, 252)',
        'rgb(69, 195, 97)'
      ],
      hoverOffset: 4,
      radius: "70%",
    }]
  };

  const cctv_data = {
    labels: [
      'CCTV 1',
      'CCTV 2',
      'CCTV 3',
      'CCTV 4',
      'CCTV 5',
    ],
    datasets: [{
      label: 'CCTV',
      data: CCTVData,
      backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
      ]
    }],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    // aspectRatio: 2,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
      position: 'bottom'
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 10,
          },
        }
      },

    },
  };

  const DoughOption = {
    responsive: true,
    maintainAspectRatio: true,
    // aspectRatio: 2,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 10,
          },
        }
      },

    },
  };

  return(
    <EmptyLayout 
    pageTitle="Dashboard | Pantau"
    description="ini dashboard Pantau">
      <div className="flex ">
          <Sidebar/>
          <div className="flex flex-col w-full px-5 py-3">
              <DashboardHeader title="Dashboard"/>
              <div className="flex lg:flex-row w-full flex-col gap-4 lg:h-[250px]">
                  <div className="flex flex-col items-center self-center justify-start w-4/5 p-4 md:w-3/5 lg:w-1/3 bg-pantau-light-green/30 rounded-xl lg:self-auto">
                    <h1 className="font-bold">Image Captured</h1>
                    <Bar data={weeklyData}  options={barOptions} />
                  </div>
                  <div className="flex flex-col items-center self-center justify-start w-4/5 p-4 md:w-3/5 lg:w-1/3 bg-pantau-light-green/30 rounded-xl lg:self-auto">
                    <h1 className="font-bold">Diseased Type</h1>
                    <Doughnut data={diseaseType_data} options={DoughOption}/>
                  </div>
                  <div className="flex flex-col items-center self-center justify-start w-4/5 p-4 lg:self-auto md:w-3/5 lg:w-1/3 bg-pantau-light-green/30 rounded-xl">
                    <h1 className="font-bold">CCTV distribution</h1>
                    <Pie data={cctv_data} options={DoughOption}/>
                  </div>
              </div>
              <h1 className="m-4 text-lg font-bold items-content-start">Report</h1>
              <div className="w-full pb-20 lg:pb-0">
                  <table className="w-full text-sm text-center table-fixed">
                      <thead>
                          <tr>
                          <th>No</th>
                          <th>Timestamp</th>
                          <th>Device</th>
                          <th>Diagnostic</th>
                          <th>Image Preview</th>
                          </tr>
                      </thead>
                      <tbody className="w-full">
                          
                            {reportData.map((data)=>{
                              return (
                                
                                <tr>
                                  <td>{data.no}</td>
                                  <td>{data.timestamp}</td>
                                  <td>{data.device}</td>
                                  <td>{data.diagnostic}</td>
                                  <td className="text-pantau-green hover:text-pantau-dark-green"><Link href={data.imgUrl}>{data.imgPreview}</Link></td>
                                </tr>
                              )
                            })}
                            
                          
                      </tbody>
                  </table>
              </div>
          </div>
          
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <NavButton/>
        </div>
      </div>
    </EmptyLayout>
  )
}