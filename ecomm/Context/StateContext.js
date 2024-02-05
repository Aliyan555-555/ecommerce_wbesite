"use client";
import { useState, useContext, useEffect } from "react";

import { createContext } from "react";
const Context = createContext();
import React from "react";
import { client } from "@/lib/client";
import { FiMenu } from "react-icons/fi";


function StateContext({ children }) {
  const [OrderDetail, setOrderDetail] = useState({
    varient: {
      color: "",
      size: "",
      quantity: "",
    },
    title: "",
    price: "",
    image: "",
    totleprice: "",
  });
  const [Products, setProducts] = useState([]);
  const [Banners, setBanners] = useState([]);
  const [pickQuickSize, setpickQuickSize] = useState("");
  const [pickQuickColor, setpickQuickColor] = useState("");
  const getData =async () => {
    try {
    const res = await fetch("/api/Server",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    const banners = await data[0];
    const product = await data[1];
    setProducts(product);
    setBanners(banners); 
    console.log(product)

  } catch (error) {
    console.log(error.message)   
    }
  }
useEffect(() => {
  getData()
},[])
  let foundproduct;
  let index;
  const [showCart, setShowCart] = useState(false);
  const [Wish, setWish] = useState(false);
  const [WishProducts, setWishProducts] = useState([]);
  const [Menu, setMenu] = useState(false);
  const [MenuIcon, setMenuIcon] = useState({ icon: FiMenu });
  const [Cartitem, setCartitem] = useState([]);

  const [TotlePrice, setTotlePrice] = useState(0);
  const [TotleQty, setTotleQty] = useState(0);
  const [TotleWishQty, setTotleWishQty] = useState(0);
  const [qty, setqty] = useState(1);
  const [ProductCardCart, setProductCardCart] = useState({});

  const AddCart = async (data, quantity) => {
    console.log(data);
    const chechsome = Cartitem.find((item) => item._id === data._id && data.varient.size === item.varient.size && item.varient.color === data.varient.color );
    setTotlePrice((prevTotlePrice) => prevTotlePrice + data.price * quantity);
    setTotleQty((prevTotleQty) => prevTotleQty + quantity);
    if (chechsome) {
      console.log('checksome')
      const UpdateCart = Cartitem.map((data1) => {
        if (data1._id === data._id && data1.varient.size === data.varient.size && data1.varient.color === data.varient.color){
        console.log('update if statement')
          return {...data1,varient:{...data1.varient, quantity: data1.varient.quantity + quantity}};}
          else {
            return data1;
          }
      });
      setCartitem(UpdateCart);
    } else {
      console.log('checksome else')
      data.varient.quantity = quantity;
      setCartitem([...Cartitem, { ...data }]);
    }
  };
  const TotleCartQty = (data, value) => {
    console.log('Totle Qty')
    console.log(Cartitem)
    foundproduct = Cartitem.find((item) => item._id === data._id && item.varient.size === data.varient.size && item.varient.color === data.varient.color );
    index = Cartitem.findIndex((item) => item._id === data._id && item.varient.size === data.varient.size && item.varient.color === data.varient.color );
    const newCartitem = Cartitem.filter((item) => item._id != data._id);

    if (value === "inc") {
      console.log('Totle Qty inc')
      setCartitem([
        ...newCartitem,
        { ...foundproduct, varient:{...foundproduct.varient, quantity: foundproduct.varient.quantity + 1} },
      ]);
      setTotlePrice((prevTotlePrice) => prevTotlePrice + foundproduct.price);
      setTotleQty((prevTotleQty) => prevTotleQty + 1);
    } else if (value === "dec") {
      console.log('totle qty dec')
      if (foundproduct.quantity > 1) {
        setCartitem([
          ...newCartitem,
          { ...foundproduct,varient:{...foundproduct.varient, quantity: foundproduct.varient.quantity - 1}}
        ]);
        setTotlePrice((prevTotlePrice) => prevTotlePrice - foundproduct.price);
        setTotleQty((prevTotleQty) => prevTotleQty - 1);
      }
    }
  };
  const RemoveProduct = (data) => {
    foundproduct = Cartitem.find((item) => item._id === data._id && item.varient.size === data.varient.size && item.varient.color === data.varient.color );
    index = Cartitem.findIndex((item) => item._id === data._id && item.varient.size === data.varient.size && item.varient.color === data.varient.color);
    const finding=Cartitem.find((item)=>item._id === data._id && item.varient.size === data.varient.size && item.varient.color === data.varient.color );
    const newCartitem = Cartitem.filter((item) => item != finding );
    setCartitem([...newCartitem]);
    setTotlePrice(
      (prevTotlePrice) =>
        prevTotlePrice - foundproduct.price * foundproduct.varient.quantity
    );

    setTotleQty((prevTotleQty) => prevTotleQty - foundproduct.varient.quantity);
  };

  const setWishItem = (Wishitem) => {
    setWishProducts(...WishProducts, Wishitem);
    localStorage.setItem("WishItem", JSON.stringify(WishProducts));
  };
  const Qtyplu = () => {
    setqty((prevQty) => prevQty + 1);
  };
  const Qtymin = () => {
    if (!qty >= 1) {
      setqty(1);
    } else if (qty <= 0) {
      setqty(1);
    } else if (qty > 1) {
      setqty((prevQty) => prevQty - 1);
    }
  };
  const Resetall = () => {
   
   

    setOrderDetail({
      varient: {
        color: "",
        size: "",
        quantity: "",
      },
      title: "",
      price: "",
      image: "",
      totleprice: "",
    });
  };
  const AddWishlist = (data) => {
    // const founditem = WishProducts.find((item)=>item)
    // if (founditem._id != data._id) {
      setTotleWishQty((prevTotleWishQty) => prevTotleWishQty + 1);
      setWishProducts([...WishProducts, data]);
    // }
  }
  return (
    <Context.Provider
      value={{
        Qtymin,
        Qtyplu,
        RemoveProduct,
        ProductCardCart,
        setProductCardCart,
        OrderDetail,
        setOrderDetail,
        Resetall,
        pickQuickSize,
        pickQuickColor,
        setpickQuickColor,
        WishProducts,
        setpickQuickSize,
        showCart,
        setWishItem,
        setShowCart,
        Products,
        Banners,
        setqty,
        TotleWishQty,
        
        
        qty,
        AddCart,
        setMenu,
        Menu,
        Cartitem,
        AddWishlist,
        Wish,
        setWish,
        TotlePrice,
        TotleCartQty,
        TotleQty,
        setMenuIcon,
        MenuIcon,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const GlobleContext = () => {
  return useContext(Context);
};

export { StateContext, Context, GlobleContext };
