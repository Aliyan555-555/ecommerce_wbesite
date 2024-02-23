"use client";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi2";
import Cartitems from "./Cartitems";
import Link from "next/link";
import { NavLink } from "@/Constants";
import React, { useEffect, useState,useRef } from "react";
import { GlobleContext } from "@/Context/StateContext";
import { IoClose, IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import gsap from "gsap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiHeartBold, PiHeartStraight } from "react-icons/pi";
import Wishitem from "./Wishitem";
const Navbar = ({ token, AdminCookies }) => {
  const [SearchQuery,setSearchQuery] = useState("");
  const [AdminButtonCheck, setAdminButton] = useState(false);
  const {
    showCart,
    setWish,
    Wish,
    setShowCart,
    setWishItem,
    Cartitem,
    TotlePrice,
    TotleQty,
    setMenu,
    Menu,
    setMenuIcon,
    TotleWishQty,
    MenuIcon,
    WishProducts,
  } = GlobleContext();

  // const ref = useRef();
  // const Responsive = () => {
  //   if (ref.current.style.top === "-30rem") {
  //     ref.current.style.top = "8rem";
  //   } else {
  //     ref.current.style.top = "-30rem";
  //   }
  // };
  const ToogleShowCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };
  const ToogleShowWish = () => {
    if (Wish) {
      setWish(false);
    } else {
      setWish(true);
    }
  };

  const CartStyle = {
    right: showCart ? "0%" : "-100%",
  };
  const WishSlider = {
    right: Wish ? "0%" : "-100%",
  };
  const ResponsiveMenu = {
    left: Menu ? "0" : "-100%",
  };
  const NavUnderlin1 = `#NavLink-${NavLink[0]?.name}`;
  const NavUnderlin2 = `#NavLink-${NavLink[1]?.name}`;
  const NavUnderlin3 = `#NavLink-${NavLink[2]?.name}`;
  const NavUnderlin4 = `#NavLink-${NavLink[3]?.name.replace(/ /g, "-")}`;
  const NavUnderlin5 = `#NavLink-${NavLink[4]?.name}`;
  const NavUnderlin6 = `#NavLink-${NavLink[5]?.name}`;
const SearchRef = useRef(null)
  const AdminButton = async () => {
    
    if (token != undefined && AdminCookies === "654689e4fb7e5478e0862ae8") {
      setAdminButton(true);
    } else {
      setAdminButton(false);
    }
  };
  useEffect(() => {
    AdminButton();
  }, []);

  const hendleAnimatedSearch = () => {
    document.getElementById("SearchCon").style.display = "flex";
    gsap.to("#SearchBox", {
      duration: 0.2,
      width: "70%",
    });
  };
  const hendleSearchClick = () => {
    document.getElementById("Search").click();
    if(SearchRef.current){
      SearchRef.current.click();
      console.log(SearchRef);
    }
  };
  const hendleCloseSearchBar = ()=>{
    document.getElementById('SearchBox').style.width = '10%'

    document.getElementById('SearchCon').style.display = 'none';
    setSearchQuery("");
  }
  const hendleCloseSearchBarOnEnter = (e)=>{
    if(e.code === 'Enter'){
      document.getElementById('SearchBox').style.width = '10%'
      document.getElementById('SearchCon').style.display = 'none';
      setSearchQuery("");
    }
  }
  const hendleSearchValue = (e)=>{
    setSearchQuery(e.target.value)
  }
  return (
    <>
      <div className="Navbar w-screen px-[20px]  bg-body h-[9rem] sm:h-36 flex flex-row justify-between items-center fixed top-0 z-20">
        <style jsx global>{`
          ${NavUnderlin1}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin1}:hover::after {
            width: 100%;
          }
          ${NavUnderlin2}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin2}:hover::after {
            width: 100%;
          }
          ${NavUnderlin3}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin3}:hover::after {
            width: 100%;
          }
          ${NavUnderlin4}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin4}:hover::after {
            width: 100%;
          }

          ${NavUnderlin5}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin5}:hover::after {
            width: 100%;
          }
          ${NavUnderlin6}::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          ${NavUnderlin6}:hover::after {
            width: 100%;
          }
          #NavLink-Admin::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            width: 0%;
            left: 0;
            transition: width 0.4s ease;
            background: #ff2600;
          }
          #NavLink-Admin:hover::after {
            width: 100%;
          }
        `}</style>
        <div
          id="SearchCon"
          className="w-screen h-screen hidden  absolute top-0 left-0 max-md:items-center md:justify-center z-[10000000000000000000000000000000000] bg-black-transparent"
        >
          <div id="SearchBox" className="w-full md:w-[10%] pt-28">
            <div className="relative w-full flex flex-col">
              <input
               onFocus={hendleAnimatedSearch}
                onBlur={hendleCloseSearchBar }
                type="text"
                ref={SearchRef}
                id="Search"
                value={SearchQuery}
                onChange={(e)=>hendleSearchValue(e)}
                onClick={hendleAnimatedSearch}
                autoComplete="off"
                onKeyDown={(e)=>hendleCloseSearchBarOnEnter(e)}
                className="border-hover  text-[black] bg-body text-2xl transition-colors outline-none border-b py-8 rounded-full px-10 font-normal"
                placeholder="Search..."
              />
              <Link href={{pathname:'/search',query:{query:SearchQuery}}} onClick={hendleCloseSearchBar} className="bg-Dashboard text-body rounded-full p-[1.6rem] text-3xl text-center absolute top-2 bottom-2 right-2">
                <IoSearchOutline />
              </Link>
            </div>
          </div>
           
        </div>
        <div
          style={ResponsiveMenu}
          className="duration-500 overflow-hidden absolute top-0 lg:hidden flex items-center justify-center flex-col z-50 left-0 md:w-[40%] sm:w-[60%] w-full h-[100vh] bg-body "
        >
          <div className="w-full h-28 bg-theme ">
            <input
              type="search"
              className="w-full h-full px-4 text-3xl font-normal tracking-wider text-Dashboard border-none outline-none placeholder:text-2xl placeholder:tracking-wide placeholder:text-Dashboard-border "
              placeholder="Enter Your Keyword"
            />
          </div>
          {NavLink.map((item) => {
            return (
              <Link
                href={item.href}
                className="px-[2rem] uppercase py-[2.5rem] w-[100%] text-Dashboard border-t border-t-hover bg-body text-[1.5rem] font-semibold tracking-widest"
                key={item.id}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <MenuIcon.icon
          onClick={() => {
            if (Menu) {
              setMenu(false);
              setMenuIcon({ icon: FiMenu });
            } else {
              setMenu(true);
              setMenuIcon({ icon: IoCloseSharp });
            }
          }}
          className="text-5xl text-Dashboard lg:hidden z-[100]"
        />
        <Link
          href={"/"}
          className="flex pl-8  justify-center items-center w-[22rem] h-[6rem]"
          title="Prime corner"
        >
          <img
            className="w-[100%] h-[100%] object-fill"
            src="/black_logo.png"
          />
        </Link>
        <ul className="transition-all text-Dashboard absolute bg-body sm:bg-[#0000] z-50 w-full hidden lg:flex  top-[6rem] left-0 flex-col text-[1.6rem]  font-semibold lg:h-full items-center lg:w-[60%] lg:bg-tr lg:gap-4 justify-center lg:flex-row lg:relative lg:top-0 lg:bg-none">
          {NavLink.map((data) => (
            <Link
              key={data.name}
              href={data.href}
              id={`NavLink-${data.name.replace(/ /g, "-")}`}
              className="w-full relative p-4 sm:w-auto text-center hover:text-Red transition-colors duration-400 whitespace-nowrap hover:bg-[rgba(7, 0, 4, 0.32)] p-[.5rem] sm:p-[.5rem]"
            >
              <li>{data.name}</li>
            </Link>
          ))}
          {AdminButtonCheck ? (
            <Link
              id={`NavLink-Admin`}
              className="w-full relative p-4 sm:w-auto text-center hover:text-Red transition-colors duration-400 whitespace-nowrap hover:bg-[rgba(7, 0, 4, 0.32)] p-[.5rem] sm:p-[.5rem]"
              href={`/${AdminCookies}/Dashboard`}
            >
              Admin
            </Link>
          ) : (
            ""
          )}
        </ul>
        <div className="flex relative w-auto items-center justify-end gap-4 ">
          <div
            className=" p-[12px] md:flex hidden   text-Dashboard text-3xl sm:text-4xl md:text-5xl rounded-full text relative cursor-pointer hover:bg-hover"
            onClick={hendleSearchClick}
            title="Wishlist"
          >
            <LuSearch className="font-black" />
          </div>
          <div
            className=" p-[12px] md:flex hidden   text-Dashboard text-3xl sm:text-4xl md:text-5xl rounded-full text relative cursor-pointer hover:bg-hover"
            onClick={ToogleShowWish}
            title="Wishlist"
          >
            <PiHeartBold className="font-black" />
            <p className="absolute top-[4px] right-[4px] sm:leading-[17] leading-[15] md:leading-[19px] sm:text-[1.4rem] text-[1.2rem] md:text-xl md:w-[19px] w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] md:h-[19px] rounded-full bg-Red text-center flex items-center justify-center l">
              <span className="text-hover">{TotleWishQty}</span>
            </p>
            <p className="text-[10px] text-Dashboard-border hidden sm:flex  text-center absolute top-[100%] left-2">
              Wishlist
            </p>
          </div>
          <div
            className=" p-[9.5px] text-5xl sm:text-6xl rounded-full text relative cursor-pointer hover:bg-hover"
            onClick={ToogleShowCart}
            title="Cart"
          >
            <AiOutlineShoppingCart className="text-Dashboard" />
            <p className="absolute top-[4px] right-[4px] sm:leading-[17] leading-[15] md:leading-[19px] sm:text-[1.4rem] text-[1.4rem] md:text-xl md:w-[19px] w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] md:h-[19px] rounded-full bg-Red text-center flex items-center justify-center l">
              <span className="text-hover">{TotleQty}</span>
            </p>
            <p className="text-[10px] text-Dashboard-border text-center hidden sm:flex absolute top-[100%] left-6">
              Cart
            </p>
          </div>

          <div
            style={CartStyle}
            className="w-full transition-all duration-500  sm:w-[45%] md:w-[35%] lg:w-[25%] h-full fixed top-0 right-0 bg-Cart flex drop-shadow-2xl z-[200]  flex-col justify-between"
          >
            <div className="w-full h-[12rem] flex items-center justify-between px-4 border-b border-b-Dashboard-border">
              <h3 className="relative flex cursor-pointer items-center justify-center text-[black] text-xl font-bold ">
                <AiOutlineShoppingCart
                  className="text-6xl text-Dashboard"
                  onClick={ToogleShowCart}
                />{" "}
                <p className="absolute top-[-3px] right-[-3px] leading-[19px] text-xl min-w-[19px] h-[19px] rounded-full bg-Red text-center flex items-center justify-center l">
                  <span className="text-hover">{TotleQty}</span>
                </p>
              </h3>
              <RxCross2
                className="hover:rotate-180 duration-500 text-Dashboard text-5xl"
                title="Close cart"
                onClick={ToogleShowCart}
              />
            </div>
            {Cartitem?.length < 1 ? (
              <div className="w-full flex flex-col items-center justify-center h-[70%]">
                <HiShoppingBag className="text-9xl fill-[black]" />
                <p className="text-2xl text-[black] py-4">
                  Your Cart is Empty{" "}
                </p>
                <Link href={"/"}>
                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="px-12 py-4 rounded-xl bg-theme text-hover text-2xl font-bold"
                  >
                    Continue Shooping
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
            {Cartitem && Cartitem.length >= 0 ? (
              <div
                key={"Cart_parent_div"}
                className="flex flex-col w-full h-[90%] overflow-y-auto p-2 gap-2"
              >
                {Cartitem.map((item) => {
                  return <Cartitems key={item._id} data={item} />;
                })}
              </div>
            ) : (
              ""
            )}

            {Cartitem?.length >= 1 ? (
              <div className="w-full h-[13rem] flex flex-col mb-8">
                <div className="px-8 py-4 h-[50%] w-full flex  items-center justify-between text-3xl font-semibold text-[#000]">
                  <p>Subtotal:</p>
                  <p>${TotlePrice}</p>
                </div>
                <div className="w-full flex items-center justify-center h-[50%]">
                  <button className="px-[30%] rounded-2xl py-4 text-2xl font-extrabold bg-theme text-hover">
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            style={WishSlider}
            className="w-full transition-all duration-500  sm:w-[45%] md:w-[35%] lg:w-[25%] h-full fixed top-0 right-0 bg-Cart flex drop-shadow-2xl z-[200]  flex-col justify-between"
          >
            <div className="w-full h-[8rem] flex items-center justify-between px-4 border-b border-b-Dashboard-border">
              <h3 className="relative flex cursor-pointer items-center justify-center text-[black] text-xl font-bold ">
                <PiHeartBold
                  className="text-5xl text-Dashboard"
                  onClick={() => setWishItem({ name: "hghc", age: "dfd" })}
                />
                <p className="absolute top-[-3px] right-[-3px] leading-[19px] text-xl min-w-[19px] h-[19px] rounded-full bg-Red text-center flex items-center justify-center l">
                  <span className="text-hover">{TotleWishQty}</span>
                </p>
              </h3>
              <RxCross2
                className="hover:rotate-180 duration-500 text-Dashboard text-5xl"
                title="Close cart"
                onClick={ToogleShowWish}
              />
            </div>
            <div className={"w-full flex flex-col h-[90%] gap-4 pt-4"}>
              {WishProducts &&
                WishProducts.map((item) => {
                  return <Wishitem key={item._id} data={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
