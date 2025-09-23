"use client"

import { StarsBackground } from "@/components/animate-ui/backgrounds/stars"
import ClickSpark from "@/components/Reactbits/Clickspark"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { SendIcon, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion";
import { Icon } from '@iconify-icon/react';


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [menuOpen, setMenuOpen] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`https://myportfoliobackend-1-uyui.onrender.com/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Email sent successfully!");
        alert("✅ Email sent successfully!")
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="text-white flex justify-between items-center px-6 md:px-40 py-6 relative z-20">
        <a href="/">
          <h1 className="font-extrabold text-2xl md:text-3xl">PORTFOLIO</h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7 font-bold text-lg md:text-2xl">
          <li>
            <a href="/"><ClickSpark>Home</ClickSpark></a>
          </li>
          <li>
            <a href="/aboutme"><ClickSpark>About me</ClickSpark></a>
          </li>
          <li>
            <a href="/contact"><ClickSpark>Contact me</ClickSpark></a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-[#111] text-white rounded-lg shadow-lg p-5 z-30">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li>
                <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              </li>
              <li>
                <a href="/aboutme" onClick={() => setMenuOpen(false)}>About me</a>
              </li>
              <li>
                <a href="/contact" onClick={() => setMenuOpen(false)}>Contact me</a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <StarsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row px-6 md:px-40 mt-10 md:mt-20 gap-5">
        {/* Form */}
        <div className="w-full">
          <Card className="bg-[#f7f7f7] text-[#474545] border-none">
            <CardContent>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <CardTitle className="font-bold text-3xl md:text-4xl">
                  Contact me!
                </CardTitle>

                <div className="flex gap-2">

                  <div className="w-[50%]">
                  <Label className="font-bold">Full Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your Fullname"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white text-black mt-2 h-15"
                  />
                </div>

                <div className="w-[50%]">
                  <Label>Email Address</Label>
                  <Input
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white text-black mt-2 h-15"
                  />
                </div>
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white text-black mt-2 h-30"
                  />
                </div>

                <Button className="w-full bg-[#0a50ff] hover:bg-[#1647c1] cursor-pointer mt-2" type="submit">
                  Send Message <SendIcon className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Image */}
        <div className="flex justify-center md:block">
          <Image
            src="/fillar.png"
            alt="fillar"
            width={250}
            height={250}
            className="rounded-2xl"
            priority
          />
        </div>
      </div>

      <footer className="mt-7">
      <Card className="bg-[#363636] w-full rounded-none border-none text-white p-10">
        <div className="flex flex-col md:flex-row justify-evenly">
          <CardContent>
             <motion.div
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#14d911] flex items-center justify-center shadow-lg"
            animate={{
                 borderRadius: [
                    "60% 40% 55% 45%",
                    "45% 60% 40% 55%",
                    "55% 45% 60% 40%",
                    "50% 65% 35% 50%",
                    "60% 40% 55% 45%",
                ],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            >
            <Image
                src="/vincent.png"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover w-full h-full"
            />
            </motion.div>
          </CardContent>

          <CardContent>
          <p className="font-bold text-2xl mb-2">Tech Stacks</p> 
          <ul className="font-semibold list-disc">
            <li className="hover:text-[#14d911]">React</li>
            <li className="hover:text-[#14d911]">Node & Express.js</li>
            <li className="hover:text-[#14d911]">MySQL</li>
            <li className="hover:text-[#14d911]">Next.js</li>
            <li className="hover:text-[#14d911]">Figma</li>
            <li className="hover:text-[#14d911]">tailwindcss</li>
            <li className="hover:text-[#14d911]">Github</li>
            <li className="hover:text-[#14d911]">Javascript</li>
          </ul> 
          </CardContent>

          <CardContent >
          <p className="font-bold text-2xl mb-2">CONTACT ME!</p>
          <ul className="flex flex-col gap-2">
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                        <motion.div
                            whileHover={{
                                rotate: [0, -10, 10, -10, 10, 0], // shaking effect
                                transition: { duration: 0.6 },   // speed of shake
                            }}
                            >
                        <Icon icon="fluent:mail-28-filled" width="40" height="40" />
                        </motion.div>
                         fillar.vincent02@gmail.com
                </li>
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                    <motion.div
                        whileHover={{
                            rotate: [0, -10, 10, -10, 10, 0], // shaking effect
                            transition: { duration: 0.6 },   // speed of shake
                        }}
                    >
                    <Icon icon="majesticons:phone-line" width="40" height="40" />
                    </motion.div>
                    +63 947-460-5787
                </li>
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                    <motion.div
                      whileHover={{
                            rotate: [0, -10, 10, -10, 10, 0], // shaking effect
                            transition: { duration: 0.6 },   // speed of shake
                        }}
                    >
                    <Icon icon="fa-solid:file-pdf" width="40" height="40" />  
                    </motion.div>
                    <a href="/vincent-cv.pdf" download="vincent-cv.pdf">Resume</a>
                </li>
          </ul>
          </CardContent>
        </div>
      </Card>
</footer>
    </div>
  )
}
