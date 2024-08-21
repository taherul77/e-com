import React from 'react'
import kitchenImage from "../../../../../public/assets/home/kitchen.gif";

const VideoPlayback = () => {
    
  return (
    <>
    <div>
      <div
        className="relative w-full bg-cover bg-center  h-[calc(100vh-160px)]"
        style={{
          backgroundImage: `url(${kitchenImage.src})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #010202 0%, rgba(1, 2, 2, 0) 40%)",
          }}
        />
        <div className="absolute inset-0  top-[30%] left-48 ">
          <p className="text-white text-6xl font">INSTILEY</p>
          <div className="text-white mt-4 text-xl font-light">
          Neque porro quisquam est qui dolorem <br />
            <span className="text-white">ipsum quia dolor  </span> <br />
            sit amet consectetur adipisci <br />  <span className="text-white">velit sed quia non numquam eius modi tempora incidunto.</span>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoPlayback