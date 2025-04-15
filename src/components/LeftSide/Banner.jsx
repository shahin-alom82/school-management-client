import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import bannerOne from "../../assets/banner1.jpg";
import banner3 from "../../assets/banner3.jpg";
import Marquee from "react-fast-marquee";

const Banner = () => {
      const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

      const bannerImages = [
            { title: "bannerOne", source: bannerOne },
            { title: "bannerOne", source: banner3 },
      ];

      return (
            <div>
                  <Marquee pauseOnHover={true}>
                        <h1 className="bangla tracking-wide lg:text-[18px] text-[10px] text-gray-800 mt-3">
                              আছিম বহুমূখী উচ্চ বিদ্যালয় এ আপনাকে স্বাগতম |
                        </h1>
                  </Marquee>

                  <div className="mt-[14px]">
                        <div className="overflow-hidden" ref={emblaRef}>
                              <div className="flex">
                                    {bannerImages.map((item, index) => (
                                          <div key={index} className="flex-[0_0_100%] lg:h-[480px]">
                                                <img
                                                      src={item.source}
                                                      alt={item.title}
                                                      className="w-full h-full"
                                                />
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;
