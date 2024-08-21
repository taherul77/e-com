import Image from 'next/image'
import React from 'react'



const Gallery = () => {
    const galleryImg1 = "/assets/kitchen/galleryImg1.png";
  const galleryImg2 = "/assets/kitchen/galleryImg2.png";
  const galleryImg3 = "/assets/kitchen/galleryImg3.png";
  const galleryImg4 = "/assets/kitchen/galleryImg4.png";
  const galleryImg5 = "/assets/kitchen/galleryImg5.png";
  const galleryImg6 = "/assets/kitchen/galleryImg6.png";
  const galleryImg7 = "/assets/kitchen/galleryImg7.png";
  const galleryImg8 = "/assets/kitchen/galleryImg8.png";
  const galleryImg9 = "/assets/kitchen/galleryImg9.png";
  return (
    <>
    <div className="w-full py-10 bg-black">
      <div className="container mx-auto">
        <h1 className="text-5xl font-normal text-white mb-10">
          Inspiration <span className="text-red-700">G</span>allery
        </h1>
        <div className="w-full grid grid-rows-4  gap-2">
          <div className="row-span-3 grid grid-cols-2  gap-2">
            <div className="col-span-1 grid grid-rows-4  gap-2">
              <div className="row-span-1">
                <p className="text-[#F5F5F5] font-base font-normal leading-6 opacity-65 max-w-[630px]">
                  Discover the future of kitchen design with our
                  state-of-the-art VR feature. {'"My Kitchen Studio"'} lets you
                  immerse yourself in a virtual environment where you can
                  explore our customized modular kitchen solutions in stunning
                  detail. Walk through different layouts, interact with
                  features, and visualize how our designs will look in your
                  home. This innovative tool allows you to get a realistic feel
                  for your dream kitchen without ever leaving your house.
                </p>
                <div className="flex justify-start items-center mt-7">
                  {/* <RedButtonComp name="View Our Gallery" /> */}
                </div>
              </div>

              <div className="row-span-3 grid grid-cols-2 gap-2">
                <div className="col-span-1 grid grid-rows-5 ">
                  <div className="row-span-2"></div>
                  <div className="row-span-3">
                    <Image
                      src={galleryImg7}
                      width={372}
                      height={392}
                      alt="gallery 1"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-rows-5 gap-2 ">
                  <div className="row-span-1"></div>
                  <div className="row-span-2  ">
                    <Image
                      src={galleryImg5}
                      width={372}
                      height={261}
                      alt="gallery 1"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="row-span-2  ">
                    <Image
                      src={galleryImg6}
                      width={372}
                      height={261}
                      alt="gallery 1"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-row-3  gap-2">
              <div className="row-span-2 grid grid-cols-2  gap-2">
                <div className="col-span-1  ">
                  <Image
                    src={galleryImg1}
                    width={372}
                    height={538}
                    alt="gallery 1"
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-1 grid grid-row-2  gap-2">
                  <div className="row-span-1  ">
                    <Image
                      src={galleryImg2}
                      width={372}
                      height={261}
                      alt="gallery 1"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="row-span-1  ">
                    <Image
                      src={galleryImg3}
                      width={372}
                      height={261}
                      alt="gallery 1"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="row-span-1  ">
                <Image
                  src={galleryImg4}
                  width={760}
                  height={332}
                  alt="gallery 1"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="row-span-1   grid grid-cols-3 gap-2">
            {" "}
            <div className="col-span-1  ">
              {" "}
              <Image
                src={galleryImg8}
                width={501}
                height={332}
                alt="gallery 1"
                className="w-full h-full"
              />
            </div>
            <div className="col-span-2  ">
              {" "}
              <Image
                src={galleryImg9}
                width={1019}
                height={332}
                alt="gallery 1"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Gallery