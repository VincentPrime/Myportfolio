"use client";

import { useState } from "react";
import TextType from "@/components/Reactbits/texttype";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import Image from "next/image";
import { motion } from "framer-motion";
import ClickSpark from "@/components/Reactbits/Clickspark";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { Icon } from '@iconify-icon/react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <div className="relative z-10 w-full py-6">
          <header className="text-white flex justify-between items-center px-6 md:px-40">
            <h1 className="font-extrabold text-2xl md:text-3xl">PORTFOLIO</h1>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex gap-7 font-bold text-lg md:text-2xl">
                <li><a href="/"><ClickSpark>Home</ClickSpark></a></li>
                <li><a href="/aboutme"><ClickSpark>About me</ClickSpark></a></li>
                <li><a href="/contact"><ClickSpark>Contact me</ClickSpark></a></li>
              </ul>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </header>

          {/* Mobile Menu Overlay */}

        {menuOpen && (
          <div className="md:hidden  w-full bg-[#111] text-white py-6 shadow-lg z-50">
            <ul className="flex flex-col items-center gap-6 font-bold text-lg">
              <li>
                <a href="/" onClick={() => setMenuOpen(false)}>
                  <ClickSpark>Home</ClickSpark>
                </a>
              </li>
              <li>
                <a href="/aboutme" onClick={() => setMenuOpen(false)}>
                  <ClickSpark>About me</ClickSpark>
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => setMenuOpen(false)}>
                  <ClickSpark>Contact me</ClickSpark>
                </a>
              </li>
            </ul>
          </div>
        )}

        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <StarsBackground />
        </div>
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-40 mt-20 gap-20">
        {/* Text Section */}
        <div className="max-w-6xl">
          <div>
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl">
              <TextType text="Hi I’m Vincent!" />
            </span>
          </div>

          <motion.div
            className="flex items-center mt-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
                <p className="font-extrabold text-lg sm:text-xl md:text-3xl lg:text-4xl leading-snug">
                a <span className="text-amber-600">Web Developer </span>
                and a Full-Stack Developer. I build modern, responsive, and
                scalable applications that bring ideas to life.
              </p>

              {/* Shaking Button */}
              <motion.button
                className="font-extrabold text-base sm:text-lg md:text-2xl bg-blue-700 rounded p-2 mt-5 cursor-pointer"
                animate={{ x: [0, -5, 5, -5, 5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
              >
                <a href="/contact"><ClickSpark>Hire me</ClickSpark></a>
              </motion.button>

              <a href="/vincent-cv.pdf" download="vincent-cv.pdf">
                <span className="font-bold ml-2 hover:border-b cursor-pointer text-sm sm:text-base md:text-lg">
                  Download CV
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-70 h-70 sm:w-70 sm:h-70 md:w-100 md:h-100 overflow-hidden rounded-full border-2 border-gray-500 shadow-lg">
            <Image
              src="/vincent.png"
              alt="vincent"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>


      </div>

      {/* Tech Stack Section */}
      <div className="px-6 md:px-40 py-20 text-black">
        <motion.div
          className="justify-self-center border-4 rounded-2xl border-black p-5 hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="justify-self-center w-full">
          <ul className="flex flex-col">
            <motion.div
              className="flex justify-evenly mb-10 mt-20 flex-wrap gap-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <li><Image src="/mysql.png" alt="" width={80} height={80} /></li>
              <li><Image src="/figma.png" alt="" width={80} height={80} /></li>
              <li><Image src="/react.png" alt="" width={80} height={80} /></li>
              <li><Image src="/next.png" alt="" width={80} height={80} /></li>
            </motion.div>

            <motion.div
              className="flex justify-evenly items-center flex-wrap gap-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <li><Image src="/github.png" alt="" width={80} height={80} /></li>
              <li><Image src="/node.png" alt="" width={80} height={80} /></li>
              <li><Image src="/javascript.png" alt="" width={80} height={80} /></li>
              <li><Image src="/tailwind.png" alt="" width={80} height={80} /></li>
            </motion.div>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-white relative w-full min-h-screen overflow-x-hidden p-6 md:p-20">
        <div className="justify-self-center">
          <h1 className="font-extrabold text-4xl md:text-7xl">Featured Projects</h1>
        </div>

        <div className="absolute inset-0 -z-10">
          <StarsBackground />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-40 gap-10 mt-10">
          <Card>
            <CardHeader></CardHeader>
          </Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>


      <footer>
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
  );
}
