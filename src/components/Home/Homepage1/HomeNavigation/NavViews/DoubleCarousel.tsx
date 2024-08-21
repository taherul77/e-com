import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import kitchenViewImage from "../../../../../public/images/about/eco-friendly.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function DoubleCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  "
      opts={{
        align: "start",
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" basis-7/12   ">
            <div className=" ">
              <Card>
                <CardContent className="  ">
                  <div className=" ">
                    <Image
                      src={kitchenViewImage}
                      alt="Eco Friendly Kitchen View"
                      height={400}
                      width={600}
                      className="h-[350px] w-[650px] object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
