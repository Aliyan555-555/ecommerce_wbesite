import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { IoImagesOutline } from "react-icons/io5";
import gsap from "gsap";
import { PiHeartBold } from "react-icons/pi";
import Link from "next/link";
import { GlobleContext } from "@/Context/StateContext";
import { RxCross2 } from "react-icons/rx";
import Qty from "./Product/Qty";
import Size from "./Product/Size";
import Image from "next/image";
const Product = ({ data }) => {
  const ColorFunction = (pickColor, unPick1, unPick2, unPick3) => {
    pickColor.current.classList.remove("scale-75");
    pickColor.current.classList.add("border-Dashboard");
    pickColor.current.classList.remove("border-body");
    unPick1.current.classList.remove("border-Dashboard");
    unPick2.current.classList.remove("border-Dashboard");
    unPick3.current.classList.remove("border-Dashboard");
    unPick1.current.classList.add("border-body");
    unPick2.current.classList.add("border-body");
    unPick3.current.classList.add("border-body");
    unPick1.current.classList.add("scale-75");
    unPick2.current.classList.add("scale-75");
    unPick3.current.classList.add("scale-75");
  };

  const [varientBox, setvarientBox] = useState(false);
  const {
    showCart,
    setShowCart,
    AddCart,
    setpickQuickColor,
    ProductCardCart,
    setProductCardCart,
    qty,
    Resetall,
    WishProducts,
    setWishProducts,
    setShowWish,
    showWish,
    AddWishlist,
  } = GlobleContext();

  const { images, _id, title, price, detail, colors, sizes } = data;
  const color1 = useRef(null);
  const color2 = useRef(null);
  const color3 = useRef(null);
  const color4 = useRef(null);

  const ColorPattren1 = () => {
    ColorFunction(color1, color2, color3, color4);
  };
  const ColorPattren2 = () => {
    ColorFunction(color2, color1, color3, color4);
  };
  const ColorPattren3 = () => {
    ColorFunction(color3, color2, color1, color4);
  };
  const ColorPattren4 = () => {
    ColorFunction(color4, color2, color3, color1);
  };
  const AllColorsRef = [color1, color2, color3, color4];
  const AllColorsfun = [
    ColorPattren1,
    ColorPattren2,
    ColorPattren3,
    ColorPattren4,
  ];

  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    color1.current?.classList.remove("scale-75");
    color1.current?.classList.add("border-Dashboard");
    color1.current?.classList.remove("border-body");
    setProductCardCart({
      varient: {
        color: colors && colors[0],
        size: sizes && sizes[0],
        quantity: qty * 1,
      },
      title: data.title,
      price: data.price,
      image: data.images[0],
      totleprice: data.price * qty,
    });
  }, []);

  const Cart = () => {
    AddCart(ProductCardCart, qty);
    setShowCart(true);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(`#product-${_id}`, { duration: 0.5 });
    gsap.to(`#product-color-length-${_id}`, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(`#product-color-${_id}`, { y: -70, opacity: 1, duration: 0.5 });

    gsap.to(`#product-animation-btn-1-${_id}`, {
      right: 10,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(`#product-animation-btn-2-${_id}`, {
      right: 10,
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(`#product-animation-btn-3-${_id}`, {
      bottom: 0,
      opacity: 1,
      duration: 0.7,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(`#product-${_id}`, { duration: 0.5 });
    gsap.to(`#product-color-length-${_id}`, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(`#product-color-${_id}`, { y: 70, opacity: 0, duration: 0.5 });

    gsap.to(`#product-animation-btn-1-${_id}`, {
      right: -50,
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(`#product-animation-btn-2-${_id}`, {
      right: -50,
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(`#product-animation-btn-3-${_id}`, {
      bottom: -80,
      opacity: 0,
      duration: 0.7,
    });
  };
  const pickColor = (item) => {
    setpickQuickColor(item);
    setProductCardCart({
      ...ProductCardCart,
      varient: { ...ProductCardCart.varient, color: item },
    });
  };
  const ProductSetting = () => {
    setProductCardCart({
      ...ProductCardCart,
      title: title,
      price: price,
      image: images[0],
      varient: {
        ...ProductCardCart.varient,
        size: sizes && sizes[0],
        color: colors && colors[0],
        quantity: qty,
      },
    });
  };
  console.log(images)
  return (
    <div
      id={`product-${_id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full relative overflow-hidden h-[26rem] sm:w-[27rem] sm:h-[43rem] rounded-xl flex flex-col "
    >
      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: 70% 30%;
          gap: 0px 0px;
          top: 0;
          left: 0;
          position: absolute;
          grid-auto-flow: row;
          grid-template-areas:
            "cricle-button"
            "cart-button";
        }

        .cricle-button {
          width: 100%;
          grid-area: cricle-button;
        }

        .cart-button {
          width: 100%;
          grid-area: cart-button;
        }

        .drop-shadow {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      `}</style>
      <div className="relative w-full overflow-hidden h-[70%]">
        <div className="container fixed z-10 top-0 left-0 w-full h-full overflow-hidden">
          <div
            // href={`/`}
            // href={`/Product/${_id}`}
            className="cricle-button flex flex-col z-10 pt-10 items-end justify-start gap-2"
          >
            <button
              onClick={() => {}}
              data-tooltip-id={`Tooltip_Preview_product_${_id}`}
              data-tooltip-content="Quick Preview"
              id={`product-animation-btn-1-${_id}`}
              className="relative right-[-4.5rem] w-[4.5rem] h-[4.5rem] z-50 flex items-center justify-center text-2xl text-Dashboard rounded-full bg-body "
            >
              <ReactTooltip id={`Tooltip_Preview_product_${_id}`} />
              <IoImagesOutline />
            </button>
            <button
              onClick={() => {
                AddWishlist(data);
              }}
              data-tooltip-id={`Tooltip_Wishlist_product_${_id}`}
              data-tooltip-content="Add Wishlist"
              id={`product-animation-btn-2-${_id}`}
              className=" relative  right-[-4.5rem] w-[4.5rem] h-[4.5rem] z-50 flex items-center justify-center text-2xl text-Dashboard rounded-full bg-body "
            >
              <ReactTooltip id={`Tooltip_Wishlist_product_${_id}`} />
              <PiHeartBold />
            </button>
          </div>
          <div className="cart-button flex items-center relative z-10 p-4 ">
            {varientBox ? (
              <div className="w-[92%] rounded absolute bottom-[1rem] h-[180px] py-6 px-4 drop-shadow bg-body">
                <div className="w-full flex items-center justify-between">
                  <h4 className="uppercase text-xl font-bold text-Dashboard-border ">
                    select Size
                  </h4>
                  <RxCross2
                    className="hover:rotate-180 duration-500 text-Dashboard text-3xl"
                    onClick={() => {
                      setvarientBox(false), Resetall();
                    }}
                  />
                </div>

                <Size data={data} />
                <div className="flex py-4 justify-start items-center">
                  <h4 className="uppercase text-Dashboard-border text-xl font-bold">
                    select quntity
                  </h4>
                </div>
                <Qty data={data} />
                <button
                  onClick={Cart}
                  className="uppercase p-6 w-full mt-3 bg-Dashboard-border text-body text-xl font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setvarientBox(true);
                  ProductSetting();
                }}
                id={`product-animation-btn-3-${_id}`}
                className="w-[90%] relative bottom-[-8rem] py-5 z-50 bg-Dashboard text-hover text-xl font-semibold "
              >
                Quick Add
              </button>
            )}
          </div>
        </div>
        <Link className="cursor-pointer z-40" href={`/Product/${_id && _id}`}>
          <Image
            width={200}
            height={200}
            id={`product_image_${_id}`}
            className="rounded-2xl w-full h-full bg-hover object-fit"
            src={
              images && images.length >= 1
                ? images[0].src
                : "https://sudbury.legendboats.com/resource/defaultProductImage"
            }
            alt={title}
          />
        </Link>
      </div>
      <div className="w-full h-[30%]  flex flex-col pt-6">
        <Link href={`/Product/${_id && _id}`}>
          <h4 className="w-full text-Dashboard font-bold text-3xl">{title}</h4>
        </Link>
        <span className="w-full flex text-3xl text-Rating py-3 relative left-[-2px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
        <Link href={`/Product/${_id && _id}`}>
          <h3 className=" text-3xl text-Red font-bold">${price}</h3>
        </Link>

        <div className="w-full flex">
          {colors && colors.length > 0 ? (
            <div className="square flex flex-col gap-2 justify-center overflow-hidden h-[50px]">
              <p
                id={`product-color-length-${_id}`}
                className="text-xl text-Dashboard-border"
              >
                Available in {colors ? colors?.length : 1} colors
              </p>
              <div
                id={`product-color-${_id}`}
                className="flex flex-row gap-2 relative bottom-[-50px]"
              >
                {colors?.map((colorbg, i) => {
                  return (
                    <span
                      style={{ background: colorbg }}
                      key={colorbg}
                      ref={AllColorsRef[i]}
                      onClick={() => {
                        AllColorsfun[i]();
                        pickColor(colorbg);
                      }}
                      className={`w-12 flex border-body border-[1.5px] h-12 cursor-pointer rounded-full `}
                    >
                      <span
                        className={`w-full h-full border-[3px] border-body rounded-full bg-[${colorbg}]`}
                      ></span>
                    </span>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
