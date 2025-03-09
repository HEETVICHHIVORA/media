import React, { useState, useEffect, useRef, use } from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
export const Homepage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [phno,setphno] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  async function sendmail() {
    try {
      if (!name || !email || !subject || !message) {
        return alert("Please fill all the fields");
      }
      if (!isValidEmail(email)) {
        return alert("Invalid Email");
      }
      if(phno.length>0 && phno.length!=10){
        return alert("Invalid Phone Number");
      }

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
        alert("Email Sent Successfully");
        setname("");
        setemail("");
        setsubject("");
        setmessage("");
      } else {
        alert("Error in sending email");
      }
    } catch (e) {
      console.log(e);
      alert("Error in sending email");
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const expertiseWords = [
    "Advertising",
    "Influencer Marketing",
    "Social Media Marketing",
    "Outdoor Ads",
    "Broker Coverage",
    "Wapp and Tele",
    "E-Media Printing",
    "Paid Ads",
  ];

  const clients = [
    { name: "Client 1", logo: "https://via.placeholder.com/100" },
    { name: "Client 2", logo: "https://via.placeholder.com/100" },
    { name: "Client 3", logo: "https://via.placeholder.com/100" },
    { name: "Client 4", logo: "https://via.placeholder.com/100" },
    { name: "Client 5", logo: "https://via.placeholder.com/100" },
    { name: "Client 6", logo: "https://via.placeholder.com/100" },
    { name: "Client 7", logo: "https://via.placeholder.com/100" },
    { name: "Client 8", logo: "https://via.placeholder.com/100" },
    { name: "Client 9", logo: "https://via.placeholder.com/100" },
    { name: "Client 10", logo: "https://via.placeholder.com/100" },
    { name: "Client 1", logo: "https://via.placeholder.com/100" },
    { name: "Client 2", logo: "https://via.placeholder.com/100" },
    { name: "Client 3", logo: "https://via.placeholder.com/100" },
    { name: "Client 4", logo: "https://via.placeholder.com/100" },
    { name: "Client 5", logo: "https://via.placeholder.com/100" },
    { name: "Client 6", logo: "https://via.placeholder.com/100" },
    { name: "Client 7", logo: "https://via.placeholder.com/100" },
    { name: "Client 8", logo: "https://via.placeholder.com/100" },
    { name: "Client 9", logo: "https://via.placeholder.com/100" },
    { name: "Client 10", logo: "https://via.placeholder.com/100" },
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft += 1;
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertiseWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="font2 w-full h-[85vh] bg-[#ffeecd] flex items-center justify-start">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text on the Left */}
          <motion.div
            className="text-left w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: ["Grow", "Advertise", "Expand"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              with
            </h1>
            <h1 className="text-[#772c47] text-5xl md:text-7xl font-bold leading-tight">
              Mediatryx
            </h1>

            {/* Explore Our Services Button */}
            <a
              href="/services"
              className="inline-block mt-8 px-8 py-3 bg-[#772c47] text-[#ffeecd] font3 text-lg rounded-lg hover:bg-opacity-90 transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>

  

          <div className="w-full md:w-1/2 items-center justify-center hidden md:flex">
            <img
              src="/herosection.png"
              alt="Hero Section"
              className="w-full h-auto max-w-lg object-contain scale-120"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#ffeecd]">
        <div className="w-50 h-[2px] bg-[#772c47] opacity-70"></div>
      </div>


      {/* Our Mission Section */}
      <div className="font3 w-full bg-[#ffeecd] p-8">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <motion.div
            className="text-[#772c47] max-w-2xl w-full md:w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
              Our <span className="font3">Mission</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              To provide end-to-end services for all your Investor Relations
              (IR), Public Relations (PR), and investment-related activities,
              ensuring compliance with SEBI guidelines.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 h-64 flex items-center justify-center mt-6 md:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src="/ourmission.png"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#ffeecd]">
        <div className="w-50 h-[2px] bg-[#772c47] opacity-70"></div>
      </div>

      {/* Our Expertise Section */}
      <div className="w-full bg-[#ffeecd] p-8 flex flex-col items-center">
        <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
          Our <span className="font3">Expertise</span>
        </h2>
        <motion.div
          className="text-[#772c47] text-2xl md:text-4xl mt-8"
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {expertiseWords[currentIndex]}
        </motion.div>
      </div>

      {/* Clientele Section */}

      <div className="w-full bg-[#ffeecd] p-8 overflow-hidden">
        <div className="w-[90%] mx-auto">
          <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
            Our <span className="font3">Clientele</span>
          </h2>

          {/* Marquee Wrapper */}
          <div className="relative flex overflow-hidden w-full mt-6">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: ["0%", "-50%"] }} // Move only half to avoid gaps
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {/* Triple duplication to ensure continuous flow */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="min-w-[120px] flex flex-col items-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-20 h-20"
                  />
                  <p className="text-[#772c47] mt-2">{client.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="w-full bg-[#ffeecd] py-12">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <h2 className="font2 text-4xl md:text-5xl text-[#772c47] text-center mb-8">
            Latest Blogs
          </h2>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Card 1 */}
            <BlogCard
              id="1"
              title="How to Grow Your Business"
              photo="/ws1.png"
              content="Learn the best strategies to grow your business and reach new heights. Whether you are a startup or an established business, these tips will help you scale effectively..."
            />

            {/* Blog Card 2 */}
            <BlogCard
              id="2"
              title="The Power of Advertising"
              photo="/ws1.png"
              content="Advertising is a powerful tool to increase brand awareness and drive sales. Discover how to create impactful campaigns that resonate with your audience..."
            />

            {/* Blog Card 3 */}
            <BlogCard
              id="3"
              title="Expanding Your Market Reach"
              photo="/ws1.png"
              content="Expanding your market reach is essential for long-term success. Explore the steps you need to take to enter new markets and attract a global audience..."
            />

            {/* Blog Card 4 */}
            <BlogCard
              id="4"
              title="Effective Investor Relations"
              photo="/ws1.png"
              content="Building strong relationships with investors is key to securing funding and growing your business. Learn how to communicate effectively and build trust..."
            />
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="w-full bg-[#ffeecd] p-8">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <h2 className="font2 text-4xl md:text-5xl text-[#772c47]">
            Get <span className="font3">in touch</span>
          </h2>

          {/* Content */}
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Image (Hidden on Mobile) */}
            <div className="w-full md:w-1/2 hidden md:block">
              <img
                src="/contactus.png"
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Input Fields */}
            <div className="w-full md:w-1/2 space-y-6">
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
                className="cursor-pointer w-full md:w-auto px-6 py-3 bg-[#772c47] text-[#ffeecd] font3 rounded-lg hover:bg-opacity-90 transition"
                onClick={sendmail}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
