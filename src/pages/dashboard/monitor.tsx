import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import DashboardHeader from "@/components/dashboard_header";
import { ViewfinderCircleIcon} from "@heroicons/react/24/solid"
import {PlusCircleIcon} from "@heroicons/react/24/outline"
import { useRef,useState, useEffect } from "react";
import NavButton from "@/components/nav_button";

const CameraProps = ["CCTV","CCTV","CCTV", "CCTV", "CCTV"]

export default function Setting(){
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
            <div className="flex pb-32 lg:pb-0">
                <Sidebar/>
                <div className="flex flex-col items-center w-full px-5 py-3">
                    <DashboardHeader title="Monitor"/>
                    <div className="flex flex-col m-4 lg:w-full lg:flex-row">
                        <div className="w-full lg:w-1/4">
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
                                                <h1 className={` text-base ${index+1 === 1 && 'font-bold'}`}>{data} {index+1}</h1>    
                                            </div>
                                            <hr />    
                                        </div>
                                    )
                                })} 
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center w-full gap-4 p-2 items lg:flex-row lg:items-start bg-pantau-light-green/30">
                            <div className="flex flex-col items-center justify-center w-1/2 h-full rounded-xl">
                                <div className="self-center text-center text-pantau-dark-green">CCTV 1</div>
                                {/* <iframe ref={videoRef} className="h-[300px]" allow="camera;microphone" ></iframe> */}
                                {/* <button onClick={takePhoto} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                                    Snap
                                </button> */}
                            </div>
                            <div className={`flex flex-col items-center bg-pantau-light-green/30 h-[300px] w-[400px]` + (hasPhoto?'hasphoto': '')}>
                                <div className="grid w-full h-full grid-cols-2 grid-rows-2 font-medium">
                                {/* <video ref={videoRef} className=""></video> */}
                                {/* <video ref={videoRef} className=""></video>
                                <video ref={videoRef} className=""></video>
                                <video ref={videoRef} className=""></video> */}
                                <div className="self-center text-center text-pantau-dark-green">CCTV 2</div>
                                <div className="self-center text-center text-pantau-dark-green">CCTV 3</div>
                                <div className="self-center text-center text-pantau-dark-green">CCTV 4</div>
                                <div className="self-center text-center text-pantau-dark-green">CCTV 5</div>
                                {/* <canvas ref={photoRef} className="m-auto"></canvas> */}
                                {/* <button onClick={closePhoto} className=" bg-pantau-green text-center rounded-[8px] text-pantau-dark-green hover:bg-pantau-green/80 ease-in-out duration-300 text-sm py-2 px-8 w-fit m-4 font-semibold">
                                    Close
                                </button> */}
                                </div>
                            </div>
                        </div>
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