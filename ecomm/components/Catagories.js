import { CatagoriesData } from "@/Constants";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const Catagories = () => {
  const MouseEnter = (id) => {
    if (id === 1) {
      gsap.to(`#animation-btn-1`, {
        bottom: 10,
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(`#shopnow-1`, {
        opacity: 1,
        duration: 0.5,
      });
    } else if (id === 2) {
      gsap.to(`#animation-btn-2`, {
        bottom: 10,
        opacity: 1,

        duration: 0.5,
      });
      gsap.to(`#shopnow-2`, {
        opacity: 1,
        duration: 0.5,
      });
    } else if (id === 3) {
      gsap.to(`#animation-btn-3`, {
        bottom: 10,
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(`#shopnow-3`, {
        opacity: 1,
        duration: 0.5,
      });
    }
  };

  const MouseOut = (id) => {
    if (id === 1) {
      gsap.to(`#animation-btn-1`, {
        bottom: -40,

        duration: 0.5,
      });
      gsap.to(`#shopnow-1`, {
        opacity: 0,

        duration: 0.5,
      });
    } else if (id === 2) {
      gsap.to(`#animation-btn-2`, {
        bottom: -40,

        duration: 0.5,
      });
      gsap.to(`#shopnow-2`, {
        opacity: 0,

        duration: 0.5,
      });
    } else if (id === 3) {
      gsap.to(`#animation-btn-3`, {
        bottom: -40,

        duration: 0.5,
      });
      gsap.to(`#shopnow-3`, {
        opacity: 0,

        duration: 0.5,
      });
    }
  };

  return (
    <div className="m-auto mt-28 md:w-[90%] md:h-[28rem] items-center max-sm:flex-col sm:h-[30rem] min-[1000px]:h-[40rem] gap-3 flex">
      <style jsx global>{`
        .Image {
          background: linear-gradient(
            to bottom,
            rgba(41, 38, 33, 0) 0%,
            #292621 100%
          );
        }
        #shopnow-1::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1.5px;

          background-color: #cebd9c;
        }
        #shopnow-2::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1.5px;

          background-color: #cebd9c;
        }
        #shopnow-3::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 1.5px;

          background-color: #cebd9c;
        }
      `}</style>
      {CatagoriesData.map((item, index) => {
        return (
          <div
            onMouseEnter={() => MouseEnter(item.id)}
            onMouseLeave={() => MouseOut(item.id)}
            key={item.id}
            className="w-1/3 h-full max-sm:w-[70vw] max-sm:h-[60vw]  relative overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.title}
              className=" w-full h-full object-cover object-center"
            />
            <div className="w-full h-full absolute top-0 left-0 Image flex items-end py-4">
              <div
                id={`animation-btn-${item.id}`}
                className="w-full relative bottom-[-40px] flex items-center justify-center flex-col gap-12 "
              >
                <h3 className="text-5xl font-bold text-body">{item.title}</h3>
                <Link
                  href={"/"}
                  id={`shopnow-${item.id}`}
                  className="relative text-[1.50rem] font-normal leading-10 text-[#CEBD9C]"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catagories;
