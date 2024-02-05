"use client";
import emailjs from "@emailjs/browser";
import React, { useEffect } from "react";
import OtpInput from "otp-input-react";
import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


const page = (props) => {
  
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const [emailOTP, setemailOTP] = useState();
  const [send, setsend] = useState(false);
  const [loading,setloading]=useState(false)
console.log(props)
  var val = Math.floor(1000 + Math.random() * 9000);
  if (emailOTP === undefined) {
    setemailOTP(val);
  }

  if (OTP === emailOTP) {
    console.log("finelly");
  }

  // const VarifyEmail = () => {
  //   emailjs
  //     .send(
  //       "Ecommerce",
  //       "template_v8q50dn",
  //       {
  //         from_name: "Prime Corner",
  //         to_name: "Aliyan",
  //         from_email: "primecorner473@gmail.com",
  //         to_email: "aliyansiddiqui555@gmail.com",
  //         message: emailOTP,
  //       },
  //       "jus1HbRHBiJFP7qEK"
  //     )
  //     .then(
  //       () => {
  //         toast.success("Send Otp Success.");
  //       },
  //       (error) => {
  //         console.error(error);
  //         toast.warning("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };
  // console.log(emailOTP);

  // const SandOTP = (e) => {
  //   e.preventDefault();
  
  //   setsend(true);
  //   VarifyEmail();
  //   console.log(emailOTP);
  // };

  // const Varify = async (e) => {
  //   e.preventDefault();
  //   setloading(true)
  
  //   if (parseInt(OTP) === emailOTP) {
  //     const res = await fetch("/api/Admin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const responce = await res.json();
  //       console.log(responce.Admin)
  //     if (responce.Admin) {
  //       setOTP("");
       
  //       const next = await fetch("/api/Admin_auth", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const main = await next.json();
  //       if (main.Admin) {
  //         router.push("/Admin/Dashboard");
  //         setloading(false)
  //       }
  //     }else if(responce.Admin===false){
  //       router.push('/Admin/Dashboard')
  //       setloading(false)

  //     }
  //     toast.success("Your are Aliyan");
  //   } else {
  //     setsend(false)
  //     setloading(false)
  //     toast.warning("Your are not admin");
  //   }
  // };
//   const Render = () => {
//     if (send) {
//       return (
//         <>
//           <div id="recaptcha-container"></div>
//           <div className="flex gap-8  flex-col items-center justify-center">
//             <OtpInput
//               value={OTP}
//               onChange={setOTP}
//               autoFocus
//               OTPLength={4}
//               otpType="number"
//               disabled={false}
//               className="text-[black] text-3xl  outline-none"
//             />

//             <button
//               className="px-16 flex justify-between gap-4 py-6 bg-[#00000031] font-bold text-2xl  rounded-lg"
//               onClick={Varify}
//             >
//               {loading && <svg xmlns="http://www.w3.org/2000/svg"  style={{margin: 'auto', background: 'rgba(241, 242, 243, 0)', display: 'block', shapeRendering: 'auto', animationPlayState: 'running', animationDelay: '0s'}} width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
// <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" style={{animationPlayState: 'running', animationDelay: '0s'}}>
//   <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" style={{animationPlayState: 'running', animationDelay: 0+'s'}}></animateTransform>
// </circle>
// </svg>}
//               Varify Otp
//             </button>
//           </div>
//         </>
//       );
//     } else if (!send) {
//       return (
//         <button
//           className="px-16  py-6 bg-[#00000031] flex gap-4 items-center justify-between font-bold text-2xl rounded-md"
//           onClick={SandOTP}
//         >
//         Sand Otp
//         </button>
//       );
//     }
//   };
  useEffect(() => {
    if (props.Admin === '654689e4fb7e5478e0862ae8') {
      router.push("/654689e4fb7e5478e0862ae8/Dashboard");
    }else if (props.Admin != '654689e4fb7e5478e0862ae8'){
      router.push("/");
    }
  },[])
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-theme text-hover  gap-16">
       <style jsx global>{`
        .Navbar {
         display: none;
        }
      `}</style>
      <div className="text-6xl text-[#fff] font-bold flex gap-6 flex-col items-center justify-center">
        <p>
          Varify <span className="text-[#000]">Prime Corner</span> Admin
        </p>
        <BsFillShieldLockFill className="text-9xl" />
      </div>

      
    </div>
  );
};

export default page;
