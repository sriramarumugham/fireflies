import React, { useEffect, useRef, useState } from "react";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  // useEffect(() => {
  //   let maybeHandler = (event) => {
  //     if (!domNode.current.contains(event.target)) {
  //       handler();
  //     }
  //   };
  //   document.addEventListener("mousedown", maybeHandler);

  //   return () => {
  //     document.removeEventListener("mousedown", maybeHandler);
  //   };
  // });
  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Video = () => {
  const [videoOpen, setvideoOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setvideoOpen(false);
  });

 

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4 lg:w-10/12">
          <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full"></div>

            <div
              id="responsiveVideoWrapper"
              className="relative h-0 pb-[56.25%]"
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/1C21oiCRaMs?rel=0&vq=hd1080"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
             
              <div>
                <span className="absolute z-40 top-4 left-4">
                  <svg
                    width="50"
                    height="79"
                    viewBox="0 0 50 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="47.7119"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 47.7119 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="61.6385"
                      r="1.74121"
                      transform="rotate(180 47.7119 61.6385)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="46.3163"
                      r="1.74121"
                      transform="rotate(180 47.7119 46.3163)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="16.7159"
                      r="1.74121"
                      transform="rotate(180 47.7119 16.7159)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="31.3421"
                      r="1.74121"
                      transform="rotate(180 47.7119 31.3421)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 47.7119 1.74121)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 32.3916 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="32.3877"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 32.3877 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 32.3916 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 32.3916 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="32.3877"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 32.3877 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 32.3916 1.74145)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 17.0674 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 17.0674 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 17.0674 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 17.0674 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 17.0674 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 17.0674 1.74145)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 1.74316 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 1.74316 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 1.74316 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 1.74316 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 1.74316 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 1.74316 1.74145)"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="absolute z-40 bottom-4 right-4">
                  <svg
                    width="50"
                    height="79"
                    viewBox="0 0 50 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="47.7119"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 47.7119 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="61.6385"
                      r="1.74121"
                      transform="rotate(180 47.7119 61.6385)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="46.3163"
                      r="1.74121"
                      transform="rotate(180 47.7119 46.3163)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="16.7159"
                      r="1.74121"
                      transform="rotate(180 47.7119 16.7159)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="31.3421"
                      r="1.74121"
                      transform="rotate(180 47.7119 31.3421)"
                      fill="white"
                    />
                    <circle
                      cx="47.7119"
                      cy="1.74121"
                      r="1.74121"
                      transform="rotate(180 47.7119 1.74121)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 32.3916 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="32.3877"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 32.3877 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 32.3916 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 32.3916 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="32.3877"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 32.3877 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="32.3916"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 32.3916 1.74145)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 17.0674 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 17.0674 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 17.0674 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 17.0674 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 17.0674 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="17.0674"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 17.0674 1.74145)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="76.9617"
                      r="1.74121"
                      transform="rotate(180 1.74316 76.9617)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="61.6384"
                      r="1.74121"
                      transform="rotate(180 1.74316 61.6384)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="46.3162"
                      r="1.74121"
                      transform="rotate(180 1.74316 46.3162)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="16.7161"
                      r="1.74121"
                      transform="rotate(180 1.74316 16.7161)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="31.342"
                      r="1.74121"
                      transform="rotate(180 1.74316 31.342)"
                      fill="white"
                    />
                    <circle
                      cx="1.74316"
                      cy="1.74145"
                      r="1.74121"
                      transform="rotate(180 1.74316 1.74145)"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
