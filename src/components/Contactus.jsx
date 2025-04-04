import React, { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const Contactus = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [phno, setphno] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  async function sendmail() {
    try {
      if (!name || !email || !subject || !message) {
        return toast.error("Please fill all the fields");
      }
      if (!isValidEmail(email)) {
        return toast.warning("Invalid Email");
      }
      if (phno.length > 0 && phno.length != 10) {
        return toast.warning("Invalid Phone Number");
      }

      const res = await fetch("https://mediatryx.onrender.com/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          phno,
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
    <motion.div 
      className="w-full bgSkin textBrown p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-[90%] mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <motion.h2 
          className="font2 text-4xl lg:text-5xl"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get <span className="font3">in touch</span>
        </motion.h2>

        {/* Content */}
        <motion.div 
          className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Image (Hidden on Mobile) */}
          <motion.div 
            className="w-full lg:w-1/2 hidden lg:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LazyImage
              src="/contactus.png"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          {/* Input Fields */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
              value={name}
              onChange={(e) => setname(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              placeholder="Your Query"
              rows={4}
              className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47]"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="number"
              inputMode="numeric"
              placeholder="Contact number (optional)"
              className="w-full p-3 rounded-lg border border-[#772c47] bg-transparent placeholder-[#772c47] font3 focus:outline-none focus:ring-2 focus:ring-[#772c47] no-arrows"
              value={phno}
              onChange={(e) => setphno(e.target.value)}
              onWheel={(e) => e.target.blur()}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              type="submit"
              className="cursor-pointer w-full lg:w-auto px-6 py-3 bgBrown textSkin font3 rounded-lg hover:bg-opacity-90 transition"
              onClick={sendmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
            <motion.div 
              className="font3 text-xl flex flex-col sm:flex-row text-center items-end gap-y-3 gap-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="font2 text-2xl mx-auto sm:mx-0">OR</span> Reach us out at marketing@mediatryx.com 
              <span className="">
                <motion.LazyImage 
                  className="h-[30px]" 
                  src="/media/msgbox.png" 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contactus;
