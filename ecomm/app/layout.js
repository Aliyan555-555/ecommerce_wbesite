import './index.css'
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import { StateContext } from "@/Context/StateContext";
// const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from "react-toastify";
import Auth from "@/components/Auth";
import { cookies } from "next/headers";
import { Roboto } from 'next/font/google'
import Footer from "@/components/Footer";
 
  const roboto = Roboto({
    weight: ['400','300','500','900', '700'],
    subsets: ['latin'],
  })  
  export const metadata = {
      title: 'Prime Corner',
      description:"Best Online Sopping Store in Pakistan",
  
  }
const RootLayout = (props) => {
  const cookie= cookies().get('jwt')
  const AdminCookies = cookies().get('UserID')

  return (
    
 
    <html lang="en" style={{letterSpacing:'1px'}}>
    
      <body className={roboto.className +"scroll-smooth  bg-body text-theme"}>
        <Auth session={props.session}>
        <StateContext>
          <Navbar token={cookie?.value} AdminCookies ={AdminCookies?.value}/>
          {props.children}
          
        </StateContext>
        <Analytics/>
        <ToastContainer/>
        </Auth>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F423JYKK29"></script>

   
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F423JYKK29"></script>


      </body>
    </html>
  );
};

export default RootLayout;
