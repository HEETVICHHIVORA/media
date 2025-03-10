import React, { useEffect } from 'react'
import { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import {toast} from 'sonner'

export const Contactus = () => {
    const {service}=useParams();
    const [name, setname] = useState("");
      const [email, setemail] = useState("");
      const [subject, setsubject] = useState(service || "");
      const [message, setmessage] = useState("");
      const [phno,setphno] = useState("");
      
    
      const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };

      useEffect(() => {
        const updatedSubject = subject.split('-').join(' ');
        setsubject(updatedSubject);
    }, [subject]);
    
    
      async function sendmail() {
        try {
          if (!name || !email || !subject || !message) {
            return toast.error("Please fill all the fields");
          }
          if (!isValidEmail(email)) {
            return toast.warning("Invalid Email");
          }
          if(phno.length>0 && phno.length!=10){
            return toast.warning("Invalid Phone Number");
          }

          // console.log(name,email,subject,message,phno)
    
          const res = await fetch("http://localhost:4000/sendmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
              phno
            }),
          });
          const data = await res.json();
          if (data.success) {
            toast.success("Email Sent Successfully");
            setname("");
            setemail("");
            setsubject("");
            setmessage("");
            setphno("");
          } else {
            toast.error("Error in sending email");
          }
        } catch (e) {
          console.log(e);
          toast.error("Error in sending email");
        }
      }

  return (
      <div className="w-full h-full bg-[#ffeecd] py-2">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <h2 className="font2 text-4xl lg:text-5xl text-[#772c47]">
            Get <span className="font3">in touch</span>
          </h2>

          {/* Content */}
          <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Image (Hidden on Mobile) */}
            <div className="w-full lg:w-1/2 hidden lg:block">
              <img
                src="/contactus.png"
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Input Fields */}
            <div className="w-full lg:w-1/2 space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
              />
              <textarea
                placeholder="Your Query"
                rows={4}
                className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <input
                type="number"
                inputMode="numeric"
                placeholder="Contact number (optional)"
                className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47] no-arrows"
                value={phno}
                onChange={(e) => setphno(e.target.value)}
                onWheel={(e) => e.target.blur()}
              />
              <button
                type="submit"
                className="cursor-pointer w-full lg:w-auto px-6 py-3 bg-[#772c47] text-[#ffeecd] font3 rounded-lg hover:bg-opacity-90 transition"
                onClick={sendmail}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

