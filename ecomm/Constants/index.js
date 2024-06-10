import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { PiDiamondsFourFill } from "react-icons/pi";
import { BiSolidUserCircle } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { HiMiniShoppingBag, HiMiniShoppingCart } from "react-icons/hi2";
import { IoCalendar, IoSettingsSharp, IoShieldCheckmark } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { FaShippingFast, FaUsers } from "react-icons/fa";
import { CiPickerHalf } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { toast } from "react-toastify";

export const NavLink = [
  {
    href: "/",
    name: "Home",
    id: 1,
  },
  {
    href: "/",
    name: "Collection",
    id: 2,
  },
  {
    href: "/",
    name: "Products",
    id: 3,
  },
  {
    href: "/",
    name: "Contact Us",
    id: 5,
  },
  {
    href: "/",
    name: "Blogs",
    id: 6,
  },
  {
    href: "/",
    name: "FAQs",
    id: 7,
  },
];

export const Dashboard_routes = [
  {
    name: "Overview",
    icon: PiDiamondsFourFill,
    id: 1,
    href: "/Dashboard",
  },
  {
    name: "Products",
    icon: HiMiniShoppingBag,
    id: 2,
    href: "/Dashboard/Products",
  },
  {
    name: "Customers",
    icon: BiSolidUserCircle,
    id: 3,
    href: "/Dashboard/Customers",
  },
  {
    name: "Order",
    icon: BsFileEarmarkBarGraphFill,
    id: 4,
    href: "/Dashboard/Orders",
  },
  {
    name: "Setting",
    icon: IoSettingsSharp,
    id: 5,
    href: "/Dashboard/Settings",
  },
];
export const ServicesData= [
  {
    id:1,
    icon:FaShippingFast,
    title:'Free Us Delivery',
    decription:'Free shipping on all order above $200'
  },
  {
    id:2,
    icon:MdStars,
    title:'PREMIUM QUALITY',
    decription:'Printed to the best standards available'
  },
  {
    id:3,
    icon:IoShieldCheckmark,
    title:'SECURE PAYMENT',
    decription:'Return it within 30 days for an exchange.'
  },
  {
    id:4,
    icon:TfiHeadphoneAlt,
    title:'SUPPORT 24/7',
    decription:'Contact us 24 hours a day, 7 days a week'
  }
]
export const economy = [
  {
    id: 1,
    name: "Totle Sales",
    price: "2230,000.00",
    profit_percent: "+30%",
    icon: HiMiniShoppingBag,
    color: "#FF0000",
  },
  {
    id: 2,
    name: "Totle Expenceses",
    price: "2230,000.00",
    profit_percent: "+30%",
    icon: AiTwotonePieChart,
    color: "#008CFF",
  },
  {
    id: 3,
    name: "Totle Visitors",
    price: "2230,000.00",
    profit_percent: "+30%",
    icon: FaUsers,
    color: "#00FFB7",
  },
  {
    id: 4,
    name: "Totle Orders",
    price: "2230,000.00",
    profit_percent: "+30%",
    icon: HiMiniShoppingCart,
    color: "#7300FF",
  },
];

export const Userfileds=[
  {
    headerText:'Image',
    width:'120',
    field:'name',
    textAlign:'center',
  },
  {
    field:'name',
    headerText:'Image',
    width:'120',
    textAlign:'center',
  },
  {field:'name',
    headerText:'Image',
    width:'120',
    textAlign:'center',
  },
  {field:'name',
    headerText:'Image',
    width:'120',
    textAlign:'center',
  },
]
export const Apps=[
  {
    name: "Color Picker",
    icon: CiPickerHalf,
    id: 1,
    href: "/Dashboard/Colors",
  },
  {
    name: "Calender",
    icon: IoCalendar,
    id: 2,
    href: "/Dashboard/Calenders",
  }
]
export const ThemeColors=[
  {
    Color1:"#ffff",
    Color2:"#000",
  }
]
export const PaymentGatway = [
  {
    name:'etc',
    id:1,
    src:'/Svg/gatway1.svg'
  },
  {
    name:'etc',
    id:2,
    src:'/Svg/gatway2.svg'
  },
  {
    name:'etc',
    id:3,
    src:'/Svg/gatway3.svg'
  },
  {
    name:'etc',
    id:4,
    src:'/Svg/gatway4.svg'
  },
  {
    name:'etc',
    id:5,
    src:'/Svg/gatway5.svg'
  },
 
  {
    name:'etc',
    id:7,
    src:'/Svg/gatway7.svg'
  },
  {
    name:'etc',
    id:8,
    src:'/Svg/gatway8.svg'
  },
 
 
]
export const CatagoriesData = [
  {
    title: "Men",
    id: 1,
    src:'/Images/CataMen.jpg'
  },
  {
    title: "Womens",
    id: 2,
    src:'/Images/CataWomen.webp'
  },
  {
    title: "Baby",
    id: 3,
    src:'/Images/CataBaby.jpg'
  },
]
export const Dashboard_Warn = {
  position: toast.POSITION.TOP_CENTER,
  style:{background:'#222222',color:'white',fontSize:'1.4rem',}
}
export const SearchServices = [
  {
    id:1,
    name:'Free Delivery',
    icon:HiMiniShoppingBag,
    iconColor:""
  }
]