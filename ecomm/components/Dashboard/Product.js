import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ContextMenu from "./ContextMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard_Warn } from "@/Constants";
import Loading from "./Loading";
import ProductSideBar from "./ProductSideBar";
import Popup from "./Popup";

const Product = () => {
  const [size, setsize] = useState("");
  const [color, setcolor] = useState("");
  const [tag, settag] = useState("");
  const [disable,setdisable] = useState(false)
  const [oldpriceerror, setoldpriceerror] = useState(false);
  const [errordata, seterrordata] = useState(
    " old price property is higher than price"
  );
  const [rotate, setrotate] = useState(false);
  const [Products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [RightClickitem, setRightClickitem] = useState(null);
  const [image, setimage] = useState("");
  const [imageContext, setimageContext] = useState(false);
  const ContextMenuRef = useRef(null);
  const [ProductId, setProductId] = useState("");
  const [ProductContext,setProductContext] = useState({position:{x:0,y:0},show:false})
  const [Search,setSearch] = useState("");
  const [MainButtonText, setMainButtonText] = useState("Publish Product");
  const [ProductData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
    oldprice: 0,
    sizes: [],
    colors: [],
    tags: [],
    images: [],
  });
  const [ContextMenuState, setContextMenuState] = useState({
    position: {
      x: 0,
      y: 0,
    },
    show: false,
  });
  const hendleAddtag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e);
      setProductData({ ...ProductData, tags: [...ProductData.tags, tag] });
      settag("");
    }
  };
  const hendleSizelist = (e) => {
    setsize(e.target.value);
  };
  const hendleColorlist = (e) => {
    console.log(e.target.value[0]);
    if (e.target.value[0] === "#") {
      setcolor(e.target.value);
    }
  };
  const hendleDeleteSize = (main) => {
    setProductData({
      ...ProductData,
      sizes: ProductData.sizes.filter((t) => t !== main),
    });
  };
  const hendleDeleteColor = (main) => {
    setProductData({
      ...ProductData,
      colors: ProductData.colors.filter((t) => t !== main),
    });
  };
  const hendleAddSize = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setProductData({ ...ProductData, sizes: [...ProductData.sizes, size] });
      setsize("");
    }
  };
  const hendleAddColor = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setProductData({
        ...ProductData,
        colors: [...ProductData.colors, color],
      });
      setcolor("");
    }
  };
  const hendleTaglist = (e) => {
    settag(e.target.value);
  };
  const hendleDeleteTag = (tag) => {
    setProductData({
      ...ProductData,
      tags: ProductData.tags.filter((t) => t !== tag),
    });
  };

  const hendleOnChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "price") {
      if (value >= ProductData.oldprice) {
        setoldpriceerror(true);
      } else {
        setoldpriceerror(false);
      }
      setProductData({ ...ProductData, price: value });
    } else if (type === "oldprice") {
      if (value <= ProductData.price) {
        setoldpriceerror(true);
      } else {
        setoldpriceerror(false);
      }
      setProductData({ ...ProductData, oldprice: value });
    }
  };
  const hendleTitleORDesc = (e, type) => {
    if (type === "title") {
      setProductData({ ...ProductData, title: e.target.value });
    } else if (type === "desc") {
      setProductData({ ...ProductData, description: e.target.value });
    }
  };
  const getBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  };

  const hendleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    await getBase64(file) // `file` your img file
      .then((res) => {
        setimage(res);
        setProductData({
          ...ProductData,
          images: [...ProductData.images, { name: file.name, src: res }],
        });
      }) // `res` base64 of img file
      .catch((err) => console.log(err));
  };
  const hendleDeleteImage = (item) => {
    setProductData({
      ...ProductData,
      images: ProductData.images.filter((t) => t !== item),
    });
    setContextMenuState({ show: false, position: { x: 0, y: 0 } });
    setimage("");
  };
  const hendleOnContext = (e, item) => {
    e.preventDefault();

    setContextMenuState({
      position: {
        x: 0,
        y: 0,
      },
      show: false,
    });
    setRightClickitem(item);
    const contextArrt = ContextMenuRef.current.getBoundingClientRect();
    const left = e.pageX < window.innerWidth / 2;
    let x;
    let y = e.pageY + 1;
    if (left) {
      console.log("if");
      x = e.pageX - 80 - contextArrt.width;
    } else {
      console.log("else");
      x = e.pageX - 80 - contextArrt.width;
    }
    setTimeout(() => {
      setContextMenuState({
        position: {
          x: x,
          y: y,
        },
        show: true,
      });
    }, 100);
  };
  const getProductsData = async () => {
    setrotate(true);
    try {
      const res = await fetch("/api/Server/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProducts(data[1]);
      setrotate(false);
    } catch (error) {
      toast.error(error.message, Dashboard_Warn);
      setrotate(false);
    }
  };
  useEffect(() => {
    getProductsData();
    window.addEventListener("click", () => {
      setContextMenuState({
        position: {
          x: 0,
          y: 0,
        },
        show: false,
      });
    });
  }, [ContextMenuState.show]);
  const hendlePublishProduct = async (e, text) => {
    e.preventDefault();
    const { title, description, colors, sizes, tags, images, price, oldprice } =
      ProductData;
    const condition =
      title != "" &&
      description != "" &&
      colors.length != 0 &&
      sizes.length != 0 &&
      tags.length != 0 &&
      price != 0 &&
      oldprice != 0 &&
      images.length != 0;
    if (!oldpriceerror) {
      if (condition) {
        console.log("condition");
        if (text === "Publish Product") {
          setloading(true);
          console.log("hello else if");
          const res = await fetch("/api/Server/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(ProductData),
          });
          const data = await res.json();
          if (data.error) {
            setloading(false);
            toast.warn(data.msg, Dashboard_Warn);
          } else {
            setProductData({
              title: "",
              description: "",
              price: 0,
              oldprice: 0,
              sizes: [],
              colors: [],
              tags: [],
              images: [],
            });
            setloading(false);
            toast.success(data.msg, Dashboard_Warn);
            getProductsData();
          }
        } else if (text === "Update Product") {
          setloading(true);
          console.log("hello else if");
          try {
            const res = await fetch(`/api/Server/${ProductId}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(ProductData),
            });
            const data = await res.json();
            console.log("data :", data);
            if (data.error) {
              console.log("else if if");
              setloading(false);
              toast.warn(data.msg, Dashboard_Warn);
            } else {
              setProductData({
                title: "",
                description: "",
                price: 0,
                oldprice: 0,
                sizes: [],
                colors: [],
                tags: [],
                images: [],
              });
              setloading(false);
              toast.success(data.msg, Dashboard_Warn);
              getProductsData();
            }
          } catch (error) {
            console.log(error);
            toast.warn(error.message, Dashboard_Warn);
          }
        }
      } else {
        setloading(false);
        toast.warn("Please fill all the fields", Dashboard_Warn);
      }
    } else {
      setloading(false);
      toast.warn(errordata, Dashboard_Warn);
    }
  };
  const hendleEditProduct = (e, item) => {
    e.preventDefault();
    const { title, description, price, oldprice, colors, sizes, tags, images } =
      item;
    setMainButtonText("Update Product");
    setProductData({
      title,
      description,
      price,
      oldprice,
      colors,
      sizes,
      tags,
      images,
    });
    setProductId(item._id);
  };
  const hendleRest = () => {
    setProductId("");
    setdisable(false);
    setMainButtonText("Publish Product");

    setProductData({
      title: "",
      description: "",
      price: 0,
      oldprice: 0,
      sizes: [],
      colors: [],
      tags: [],
      images: [],
    });
  };
  const hendleDeleteProduct  = async (e)=>{
    e.preventDefault()
    setloading(true);
    try {
      const res  = await fetch(`/api/Server/${ProductId}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json();
      if(data.error){
      setloading(false)
        toast.warn(data.msg,Dashboard_Warn);
      }else{
      setloading(false)
        toast.success(data.msg,Dashboard_Warn);
       hendleRest();
        getProductsData();
      }
    } catch (error) {
    setloading(false)
      toast.error(error.message, Dashboard_Warn);
    }
  }
  return (
    <div className="w-full h-full  px-4 flex justify-around items-center relative flex-row">
      <style jsx global>{`
        .scrollBar::-webkit-scrollbar {
          width: 12px; /* Set the width of the scrollbar */
        }

        /* Define the scrollbar handle or thumb */
        .scrollBar::-webkit-scrollbar-thumb {
          background-color: #9b9a9a; /* Set the color of the scrollbar handle */
          border-radius: 6px; /* Round the corners of the scrollbar handle */
        }

        /* Define the scrollbar track piece above and below the handle */
        .scrollBar::-webkit-scrollbar-track {
          background-color: #00000000; /* Set the color of the scrollbar track */
        }
      `}</style>
      <Popup  Text={"Confirm to delete product"}
        ButtonText1={'Cancel'}
        ButtonText2={'Delete'}
        disable={disable}
        setdisable={setdisable}
        ButtonText1Fun={hendleRest}
        ButtonText2Fun={hendleDeleteProduct}/>
      <Loading loading={loading} />
      <ProductSideBar
        Products={Products}
        setSearch={setSearch}
        rotate={rotate}
        Search={Search}
        hendleRest={hendleRest}
        getProductsData={getProductsData}
        hendleEditProduct={hendleEditProduct}
       
      />
      <div className={`w-[65%] scrollBar flex h-full pr-10  justify-center overflow-y-scroll ${MainButtonText==="Update Product"?"pt-[18rem]":"pt-[10rem]"} flex-col gap-5 `}>
        <div className="relative w-[100%] flex flex-col">
          <input
            type="text"
            value={ProductData.title}
            id="title"
            onChange={(e) => hendleTitleORDesc(e, "title")}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard font-normal"
            autoComplete="off"
            required
          />
          <label
            id="emailLable"
            htmlFor="title"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            Title
          </label>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <textarea
            rows={4}
            type="text"
            value={ProductData.description}
            id="decription"
            onChange={(e) => hendleTitleORDesc(e, "desc")}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard font-normal"
            autoComplete="off"
            required
          />
          <label
            id="decLable"
            htmlFor="decription"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            decription
          </label>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <input
            type="text"
            id="tag"
            onKeyDown={hendleAddtag}
            onChange={hendleTaglist}
            value={tag}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard font-normal"
            autoComplete="off"
            required
          />
          <label
            id="tagLable"
            htmlFor="tag"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            Tags
          </label>
          <div className="flex flex-row w-full flex-wrap gap-4">
            {ProductData.tags.length > 0
              ? ProductData.tags.map((item) => {
                  return (
                    <button
                      key={item}
                      type="button"
                      className="mt-3 px-4 py-2 border border-Dashboard-border text-2xl text-Dashboard items-center justify-center rounded-md flex gap-3"
                    >
                      <RxCross2
                        className="hover:rotate-180 transition-all duration-300"
                        onClick={() => hendleDeleteTag(item)}
                      />
                      {item}
                    </button>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <input
            type="text"
            id="tag"
            onKeyDown={hendleAddSize}
            onChange={hendleSizelist}
            value={size}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard font-normal"
            autoComplete="off"
            required
          />
          <label
            id="tagLable"
            htmlFor="tag"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            Sizes
          </label>
          <div className="flex flex-row w-full flex-wrap gap-4">
            {ProductData.sizes.length > 0
              ? ProductData.sizes.map((item) => {
                  return (
                    <button
                      key={item}
                      type="button"
                      className="mt-3 px-4 py-2 border border-Dashboard-border text-2xl text-Dashboard items-center justify-center rounded-md flex gap-3"
                    >
                      <RxCross2
                        className="hover:rotate-180 transition-all duration-300"
                        onClick={() => hendleDeleteSize(item)}
                      />
                      {item}
                    </button>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <input
            type="text"
            id="tag"
            onKeyDown={hendleAddColor}
            onChange={hendleColorlist}
            value={color}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard font-normal"
            autoComplete="off"
            required
          />
          <label
            id="tagLable"
            htmlFor="tag"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            colors
          </label>
          <div className="flex flex-row w-full flex-wrap gap-4">
            {ProductData.colors.length > 0
              ? ProductData.colors.map((item) => {
                  return (
                    <button
                      style={{ background: item }}
                      key={item}
                      type="button"
                      className="mt-3 px-4 py-2 border border-Dashboard-border text-2xl text-Dashboard items-center justify-center rounded-md flex gap-3"
                    >
                      <RxCross2
                        className="hover:rotate-180 transition-all duration-300"
                        onClick={() => hendleDeleteColor(item)}
                      />
                      {item}
                    </button>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <input
            type="number"
            id="price"
            value={ProductData.price}
            onChange={(e) => hendleOnChange(e, "price")}
            className="border-Dashboard-border bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-Dashboard valid:border-b-2  valid:border-Dashboard-border font-normal"
            autoComplete="off"
            required
          />
          <label
            id="priceLable"
            htmlFor="price"
            className="text-[black] 
          bg-body cursor-text absolute top-7 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:-top-3"
          >
            Price
          </label>
        </div>
        <div className="relative w-[100%] flex flex-col">
          <span className="w-[80%] text-Dashboard-border text-xl p-0 mb-3">
            (optional)
            <span className="text-Red text-xl font-normal">
              {oldpriceerror ? errordata : ""}
            </span>
          </span>
          <input
            type="number"
            id="oldprice"
            value={ProductData.oldprice}
            onChange={(e) => hendleOnChange(e, "oldprice")}
            className={`border-${
              oldpriceerror ? "[red]" : "Dashboard-border"
            } bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5 px-4 peer focus:border-b-2 border focus:border-${
              oldpriceerror ? "[red]" : "Dashboard"
            } valid:border-b-2  valid:border-Dashboard-border font-normal`}
            autoComplete="off"
            required
          />
          <label
            id="oldpriceLable"
            htmlFor="oldprice"
            className="text-[black] 
          bg-body cursor-text absolute top-[4.2rem] left-4 text-2xl  peer-focus:text-xl 
          peer-focus:top-7 font-normal peer-focus:text-Dashboard peer-valid:text-xl uppercase  peer-valid:text-Dashboard peer-valid:top-7"
          >
            Old Price
          </label>
        </div>
        <div id="Image" className="relative w-[100%] gap-4 flex flex-col">
          <div
            style={{ display: imageContext ? "flex" : "none" }}
            className="absolute gap-2  flex-col bottom-0 left-0  w-full shadow-2xl p-4 bg-Dashboard justify-between z-50"
          >
            <RxCross2
              onClick={() => {
                setimageContext(false);
              }}
              className="absolute top-[-2.5rem] p-2 right-[-2.5rem] hover:rotate-180 transition-all duration-300  cursor-pointer  flex items-center justify-center bg-Dashboard text-body rounded-full text-6xl"
            />

            <input
              type="file"
              id="chooseimage"
              onChange={hendleImage}
              accept="image/png, image/jpeg"
              hidden={true}
              className="w-full h-full"
            />
            <div className="w-full border-2 border-body text-2xl text-body rounded-sm flex items-center justify-center p-12">
              {image === "" ? (
                "No Image"
              ) : (
                <div className="w-full h-[40vh]">
                  <img
                    className="w-full h-full object-cover"
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src={image}
                    alt=""
                  />
                </div>
              )}
            </div>
            {image != "" ? (
              <button
                onClick={() => {
                  setimageContext(false);
                  setimage("");
                }}
                className="w-full border-2 flex items-center
          py-4 border-body rounded-sm justify-center text-2xl text-body xt-body"
              >
                Done
              </button>
            ) : (
              <button
                onClick={() => document.querySelector("#chooseimage").click()}
                className="w-full border-2 flex items-center
          py-4 border-body rounded-sm justify-center text-2xl text-body xt-body"
              >
                Choose Image
              </button>
            )}
          </div>
          <p className=" text-left text-2xl text-Dashboard">Image</p>
          <div className="w-full flex text-2xl text-Dashboard font-semibold  items-center justify-center border-2 border-Dashboard-border border-dashed gap-2 flex-col">
            {ProductData.images.length === 0 ? (
              <p className="py-6 text-Dashboard-border uppercase">No item</p>
            ) : (
              ProductData.images.map((item, index) => {
                return (
                  <div
                    onContextMenu={(e) => hendleOnContext(e, item)}
                    key={index}
                    className="w-full flex items-center hover:bg-hover relative px-4 gap-6 h-[8rem] "
                  >
                    <Image
                      src={item.src}
                      className="bg-hover w-[50px] h-[50px]"
                      width={70}
                      height={70}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                  </div>
                );
              })
            )}
          </div>

          <button
            onClick={() => setimageContext(true)}
            className="w-full text-2xl uppercase text-Dashboard-border font-semibold flex items-center justify-center py-6 border-2 border-Dashboard-border hover:bg-Dashboard hover:text-body transition-all duration-300"
          >
            Add images
          </button>
        </div>
        <ContextMenu
          ContextMenuRef={ContextMenuRef}
          isShow={ContextMenuState.show}
          positionX={ContextMenuState.position.x}
          positionY={ContextMenuState.position.y}
          RightClickitem={RightClickitem}
          buttons={[
            {
              text: "Delete",
              onClick: (e, item) => {
                hendleDeleteImage(item);
              },
            },
            {
              text: "Dublicate",
              onClick: (e, item) => {
                setContextMenuState({ show: false, position: { x: 0, y: 0 } });
                setProductData({
                  ...ProductData,
                  images: [...ProductData.images, item],
                });
                setimage(item.src);
                setimageContext(true);
              },
            },
          ]}
        />
        <button
          className="w-[100%] text-2xl uppercase rounded-lg py-6 hover:text-Dashboard transition-all duration-300 bg-[#47FFA3]  font-bold text-body"
          onClick={(e) => hendlePublishProduct(e, MainButtonText)}
        >
          {MainButtonText}
        </button>
     {MainButtonText !== "Publish Product"?<button
          className="w-[100%] text-2xl uppercase rounded-lg py-6 hover:text-Dashboard transition-all duration-300 bg-Red  font-bold text-body"
          onClick={()=>setdisable(true)}
        >
          Delete
        </button>:""}
      </div>
    </div>
  );
};

export default Product;
