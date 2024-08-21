"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselData = [
    { text: `PU\nLacquer`, image: "/assets/home/group1.png" },
    { text: "PET", image: "/assets/home/group2.png" },
    { text: `UV\nLacquer`, image: "/assets/home/group3.png" },
    { text: `Synchronous\nMDF`, image: "/assets/home/group4.png" },
    { text: "HPL", image: "/assets/home/group5.png" },
    { text: "Glass", image: "/assets/home/group1.png" },
  ]

export function CombinedCarousel() {
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const [emblaApi2, setEmblaApi2] = React.useState<any>(null);
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (emblaApi && emblaApi2) {
      const syncScroll = () => {
        emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
      };

      emblaApi.on("select", syncScroll);
      emblaApi2.on("select", () => {
        emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
      });

      // Initialize carousels with synced scroll position
      syncScroll();

      return () => {
        emblaApi.off("select", syncScroll);
        emblaApi2.off("select", () => {
          emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
        });
      };
    }
  }, [emblaApi, emblaApi2]);

  return (
    <div className="relative w-full mx-auto  ">
      <div className="flex">
        {/* Vertical Carousel */}
        <div className="flex   w-1/4 min-w-[200px]">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full   content-end"
            setApi={setEmblaApi}
          >
            <CarouselContent className="  h-[100px] mb-4 flex">
              {CarouselData.map((item, index) => (
                <CarouselItem key={index} className="content-end">
                        <div className="text-3xl  " style={{whiteSpace:"pre-line"}}>
                            {item.text}
                        </div>

                 </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="btn btn-warning grow bg-white absolute -bottom-14 py-2 px-4">Learn More </div>
        </div>

        {/* Main Image Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          className="w-full ml-12"
          opts={{ align: "start" }}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          setApi={setEmblaApi2}
        >
          <CarouselContent>
            {CarouselData.map((item, index) => (
              <CarouselItem key={index} className="basis-7/12">
                <div>
                  <Card>
                    <CardContent>
                      <Image
                        src={item.image}
                        alt={item.text}
                        height={400}
                        width={600}
                        className="h-[300px] w-[650px] object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[335px] left-0 bg-gray-300" />
          <CarouselNext className="top-[335px] left-12 bg-gray-300" />
        </Carousel>
      </div>
    </div>
  );
}
