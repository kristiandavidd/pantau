import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";
import { ViewfinderCircleIcon } from "@heroicons/react/24/solid"
import {PlusCircleIcon} from "@heroicons/react/24/outline"
import Webcam from "react-webcam"
import { useRef,useState, useEffect } from "react";
import { Stream } from "stream";
import { inherits } from "util";
import Buttons from "@/components/button";

const CameraProps = ["CCTV","CCTV","CCTV"]

export default function monitor(){
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement  | null>(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({
            video:true
        })
        .then((stream) => {
            let video = videoRef.current;
            if (video) {
                video.srcObject = stream;
                video.play();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getVideo();
    }, [videoRef])
    
    const takePhoto = () => {
        const width = 400;
        const height = 300;

        let video = videoRef.current;
        let photo = photoRef.current;

        if (photo) {
            photo.width = width;
            photo.height = height;
        

            let context = photo?.getContext('2d');
            context?.drawImage(video!,0,0,width,height)
            setHasPhoto(true)
        }
        
    }

    const closePhoto = () => {
        let photo = photoRef?.current;
        let context = photo?.getContext('2d');
        if(context && photo) {
            context.clearRect(0,0,photo.width,photo.height)
            setHasPhoto(false)
        }
        
    }
    
    return(
        <EmptyLayout 
        pageTitle="Monitor | Pantau"
        description="ini monitor Pantau">
            <div className="flex">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Monitor"/>
                    <div className="flex w-full">
                        <div className="w-1/4">
                            <h1 className="text-lg font-bold">Daftar Perangkat</h1>
                            <div className="flex gap-3 p-2">
                                <PlusCircleIcon className="w-[20px] text-pantau-green"/>
                                <p className="text-sm text-pantau-green">tambah Perangkat</p>
                                
                            </div>
                            <div>
                                <hr />
                                {CameraProps.map((data,index)=> {
                                    return (
                                        <div className="p-2">
                                            <div className="flex gap-3">
                                                <ViewfinderCircleIcon className="w-[24px]"/>
                                                <h1 className={`${index+1 === 1 && 'font-bold'}`}>{data} + {index+1}</h1>    
                                            </div>
                                            <hr />    
                                        </div>
                                    )
                                })} 
                            </div>
                        </div>
                        
                        <div className="flex w-3/4 gap-4">
                            <div className="flex flex-col items-center rounded-xl">
                                <video ref={videoRef} className="h-[300px]"></video>
                                <button onClick={takePhoto} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                                    Snap
                                </button>
                            </div>
                            <div className={`flex flex-col items-center bg-pantau-light-green/30 h-[300px] w-[400px]` + (hasPhoto?'hasphoto': '')}>
                                <canvas ref={photoRef}></canvas>
                                <button onClick={closePhoto} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EmptyLayout>
    )
}