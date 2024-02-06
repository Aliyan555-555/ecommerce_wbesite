import { urlFor } from "@/lib/client";
import React, { useRef, useState, useEffect } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GlobleContext } from "@/Context/StateContext";
import Link from "next/link";
import Qty from "./Product/Qty";
import Image from "next/image";
const StaticProduct = ({ data }) => {
  const {
    qty,
    setqty,
    Qtymin,
    Qtyplu,
    setShowCart,
    AddCart,
    Cartitem,
    OrderDetail,
    setOrderDetail,
  } = GlobleContext();
  const { _id, title, detail, price, image, color, oldprice, size } = data;
  const [index, setindex] = useState(0);
console.log(Cartitem)
  const ToogleImage = (i) => {
    setindex(i);
  };

  const color1 = useRef(null);
  const color2 = useRef(null);
  const color3 = useRef(null);
  const color4 = useRef(null);

  const Cart = () => {
    AddCart(OrderDetail, qty);
    setShowCart(true);
  };

  const ColorPattren1 = () => {
    if (color1.current.classList.contains("scale-75")) {
      color1.current.classList.remove("scale-75");
      color2.current.classList.add("scale-75");
      color3.current.classList.add("scale-75");
      color4.current.classList.add("scale-75");
    }
  };
  const ColorPattren2 = () => {
    if (color2.current.classList.contains("scale-75")) {
      color2.current.classList.remove("scale-75");
      color1.current.classList.add("scale-75");
      color3.current.classList.add("scale-75");
      color4.current.classList.add("scale-75");
    }
  };
  const ColorPattren3 = () => {
    if (color3.current.classList.contains("scale-75")) {
      color3.current.classList.remove("scale-75");
      color2.current.classList.add("scale-75");
      color1.current.classList.add("scale-75");
      color4.current.classList.add("scale-75");
    }
  };
  const ColorPattren4 = () => {
    if (color4.current.classList.contains("scale-75")) {
      color4.current.classList.remove("scale-75");
      color2.current.classList.add("scale-75");
      color3.current.classList.add("scale-75");
      color1.current.classList.add("scale-75");
    }
  };
  const AllColorsRef = [color1, color2, color3, color4];
  const AllColorsfun = [
    ColorPattren1,
    ColorPattren2,
    ColorPattren3,
    ColorPattren4,
  ];
  const pickColor = (colorbg) => {
    setOrderDetail({
      ...OrderDetail,
      varient: { ...OrderDetail.varient, color: colorbg },
    });
  };

  const pickSize = (Size) => {
    setOrderDetail({
      ...OrderDetail,
      varient: { ...OrderDetail.varient, size: Size },
    });
  };

  const SizeRef1 = useRef(null);
  const SizeRef2 = useRef(null);
  const SizeRef3 = useRef(null);
  const SizeRef4 = useRef(null);
  const SelectSize1 = () => {
    if (SizeRef1.current.classList.contains("bg-hover")) {
      SizeRef1.current?.classList.remove("bg-hover");
      SizeRef1.current?.classList.add("bg-[#000]");
      SizeRef1.current?.classList.add("text-[#fff]");
      SizeRef2.current?.classList.remove("bg-[#000]");
      SizeRef2.current?.classList.remove("text-[#fff]");
      SizeRef2.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.add("bg-hover");
      SizeRef4.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.remove("bg-[#000]");
      SizeRef3.current?.classList.remove("text-[#fff]");
      SizeRef4.current?.classList.remove("bg-[#000]");
      SizeRef4.current?.classList.remove("text-[#fff]");
    }
  };
  const SelectSize2 = () => {
    if (SizeRef2.current.classList.contains("bg-hover")) {
      SizeRef2.current?.classList.remove("bg-hover");
      SizeRef2.current?.classList.add("bg-[#000]");
      SizeRef2.current?.classList.add("text-[#fff]");
      SizeRef1.current?.classList.remove("bg-[#000]");
      SizeRef1.current?.classList.remove("text-[#fff]");
      SizeRef1.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.add("bg-hover");
      SizeRef4.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.remove("bg-[#000]");
      SizeRef3.current?.classList.remove("text-[#fff]");
      SizeRef4.current?.classList.remove("bg-[#000]");
      SizeRef4.current?.classList.remove("text-[#fff]");
    }
  };
  const SelectSize3 = () => {
    if (SizeRef3.current.classList.contains("bg-hover")) {
      SizeRef3.current?.classList.remove("bg-hover");
      SizeRef3.current?.classList.add("bg-[#000]");
      SizeRef3.current?.classList.add("text-[#fff]");
      SizeRef2.current?.classList.remove("bg-[#000]");
      SizeRef2.current?.classList.remove("text-[#fff]");
      SizeRef2.current?.classList.add("bg-hover");
      SizeRef1.current?.classList.add("bg-hover");
      SizeRef4.current?.classList.add("bg-hover");
      SizeRef1.current?.classList.remove("bg-[#000]");
      SizeRef1.current?.classList.remove("text-[#fff]");
      SizeRef4.current?.classList.remove("bg-[#000]");
      SizeRef4.current?.classList.remove("text-[#fff]");
    }
  };
  const SelectSize4 = () => {
    if (SizeRef4.current.classList.contains("bg-hover")) {
      SizeRef4.current?.classList.remove("bg-hover");
      SizeRef4.current?.classList.add("bg-[#000]");
      SizeRef4.current?.classList.add("text-[#fff]");
      SizeRef2.current?.classList.remove("bg-[#000]");
      SizeRef2.current?.classList.remove("text-[#fff]");
      SizeRef2.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.add("bg-hover");
      SizeRef1.current?.classList.add("bg-hover");
      SizeRef3.current?.classList.remove("bg-[#000]");
      SizeRef3.current?.classList.remove("text-[#fff]");
      SizeRef1.current?.classList.remove("bg-[#000]");
      SizeRef1.current?.classList.remove("text-[#fff]");
    }
  };
  const AllSizeRef = [SizeRef1, SizeRef2, SizeRef3, SizeRef4];
  const AllSizefun = [SelectSize1, SelectSize2, SelectSize3, SelectSize4];
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const OrderData = {
    User: "654689e4fb7e5478e0862ae8",
    Date: formattedToday,
    OrderID: data._id,
    Category: "Electronics",
    Status: "Pandding",
    Product: [{ ...OrderDetail, image: OrderDetail?.image.asset?._ref }],
  };
  const BuyNowOrder = async () => {
    const res = await fetch("/api/Orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(OrderData),
    });
    const data = await res.json();
  };
  useEffect(() => {
    color1.current?.classList.remove("scale-75");
    SizeRef1.current?.classList.add("bg-[#000]");
    SizeRef1.current?.classList.add("text-[#fff]");
    SizeRef1.current?.classList.remove("bg-hover");
    setOrderDetail({
      varient: {
        color: color && color[0],
        size: size && size[0],
        quantity: qty * 1,
      },
      title: data.title,
      price: data.price,
      image: data.image[0],
      totleprice: data.price * qty,
    });
  }, []);
  return (
    <div className="w-[90%] flex flex-col sm:flex-row mt-8 sm:mt-0 mx-auto gap-8">
      <div className="w-full sm:w-[35%] h-[70vh] flex flex-col gap-3">
        <div className="w-full h-[80%] bg-hover rounded-[1rem] hover:bg-theme transition-all duration-700">
          <Image
          width={200}
          height={200}
            src={urlFor(image && image[index])}
            className="w-full h-[80%] object-contain"
            alt={title}
          />
        </div>
        <div className="flex flex-row gap-3 w-full h-[20%]">
          {image.length <= 4 &&
            image.map((data, i) => {
              return (
                <Image 
                width={50}
                height={50}
                  key={data._key}
                  src={urlFor(image && image[i])}
                  alt={title}
                  className="p-[1rem] object-contain rounded-[1rem] bg-hover w-[25%] h-[100%] hover:bg-theme transition-all duration-700"
                  onMouseEnter={() => {
                    ToogleImage(i);
                  }}
                />
              );
            })}
        </div>
      </div>
      <div className="flex flex-col w-[65%] text-[#000] p-4 sm:p-16">
        <h2 className="text-5xl  font-semibold">{title}</h2>
        <div className="flex flex-row text-2xl text-theme gap-2 mt-4 px-1">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </div>
        <div className="flex flex-row text-6xl font-semibold mt-8 gap-4">
          {price && <p>{"$" + price}</p>}
          {oldprice && (
            <p className="font-light text-5xl text-[#c9c9c9] line-through">
              ({"$" + oldprice})
            </p>
          )}
        </div>
        <div className="flex flex-row w-[60%] justify-between items-center ">
          {color && color.length > 0 ? (
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-2xl ">Available Colors</h5>
              <div className="flex flex-row gap-2">
                {color?.map((colorbg, i) => {
                  return (
                    <span
                      style={{ background: colorbg }}
                      key={colorbg}
                      ref={AllColorsRef[i]}
                      onClick={() => {
                        AllColorsfun[i](i);
                        pickColor(colorbg);
                      }}
                      className={`w-8 h-8 cursor-pointer rounded-full bg-[${colorbg}] scale-75`}
                    ></span>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          {size && size.length > 0 ? (
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-2xl ">Available Size</h5>
              <div className="flex flex-row gap-2">
                {size.map((item, i) => {
                  return (
                    <span
                      key={item}
                      ref={AllSizeRef[i]}
                      onClick={() => {
                        AllSizefun[i]();
                        pickSize(item);
                      }}
                      className="p-4 w-[3rem] h-[3rem] bg-hover flex items-center cursor-pointer justify-center text-2xl font-semibold"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
       
        <Qty data={data} />
        <div className="flex gap-4 mt-8">
          <button
            type="button"
            className="px-[6rem] p-4 bg-theme text-[#fff] text-2xl font-semibold rounded-md"
            onClick={() => {
              Cart();
              setqty(1);
            }}
          >
            Add to Cart
          </button>

          <Link href={`/Product/${_id}/OrderDetail//${OrderData.OrderID}`}>
            {" "}
            <button
              type="button"
              className="px-[6rem] p-4 bg-theme text-[#fff] text-2xl font-semibold rounded-md"
              onClick={BuyNowOrder}
            >
              Buy Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-2xl font-extrabold">Description:</h4>
          <p className="w-[30rem] text-lg">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default StaticProduct;
