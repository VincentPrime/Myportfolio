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

export default function Projects() {
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
        <div className="relative z-10 md:flex-row items-center justify-between text-white px-6 md:px-40 mt-20 gap-20">
            {/* Text Section */}
            <div className="max-w-6xl">
                <span className="font-bold text-4xl">Projects</span>
            </div>

            <Card className="mt-5 p-5">
                <div className="flex gap-4">
                            <div className="rounded-full w-15 h-15 border overflow-hidden">
                                <Image
                                src="/vincent.png"
                                alt=""
                                width={100}
                                height={100}
                                />
                            
                            </div>
                            <div>
                            <span className="flex">
                                <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                                <div className=" ml-5 px-2 rounded-4xl pt-0.5 text-[#1ba5e0] bg-[#a0e2ff]">Frontend</div>
                            </span>
                            <h2 className="text-20 text-[#605e5e]">Nov 9 2024</h2>
                            </div>  
                </div>

                <div className="w-full  relative h-[500px]">
                    <video 
                        src="/videzprint.mp4" 
                        className="object-cover w-full h-full rounded-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                    />
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-4">

                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/ezprint.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/ezprint1.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/ezprint2.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                        </div>

                    
                    </div>
            </Card>



            <Card className="mt-5 p-5">
                <div className="flex gap-4">
                            <div className="rounded-full w-15 h-15 border overflow-hidden">
                                <Image
                                src="/vincent.png"
                                alt=""
                                width={100}
                                height={100}
                                />
                            
                            </div>
                            <div>
                            <span className="flex">
                                <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                                <div className=" ml-5 px-2 rounded-4xl pt-0.5 text-[#1ba5e0] bg-[#a0e2ff]">Frontend</div>
                            </span>
                            <h2 className="text-20 text-[#605e5e]">Nov 9 2024</h2>
                            </div>  
                </div>

                <div className="w-full  relative h-[500px]">
                    <video 
                        src="/magsasakavid.mp4" 
                        className="object-cover w-full h-full rounded-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                    />
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/magsasaka1.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/magsasaka2.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/magsasaka3.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
            </Card>


            <Card className="mt-5 p-5">
                <div className="flex gap-4">
                            <div className="rounded-full w-15 h-15 border overflow-hidden">
                                <Image
                                src="/vincent.png"
                                alt=""
                                width={100}
                                height={100}
                                />
                            
                            </div>
                            <div>
                            <span className="flex">
                                <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                                <div className=" ml-5 px-2 rounded-4xl pt-0.5 text-[#1ba5e0] bg-[#a0e2ff]">UI DESIGN</div>
                            </span>
                            <h2 className="text-20 text-[#605e5e]">Nov 9 2023</h2>
                            </div>  
                </div>

                <div className="w-full  relative h-[500px]">
                    <video 
                        src="/figma.mp4" 
                        className="object-cover w-full h-full rounded-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                    />
                </div>      
            </Card>

           <Card className="mt-5 p-5 mb-10">
                <div className="flex gap-4">
                            <div className="rounded-full w-15 h-15 border overflow-hidden">
                                <Image
                                src="/vincent.png"
                                alt=""
                                width={100}
                                height={100}
                                />
                            
                            </div>
                            <div>
                            <span className="flex">
                                <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                                <div className=" ml-5 px-2 rounded-4xl pt-0.5 text-[#e01b1b] bg-[#ffa0a0]">Fullstack</div>
                            </span>
                            <h2 className="text-20 text-[#605e5e]">Nov 21 2025</h2>
                            </div>  
                </div>

                <div className="w-full  relative h-[500px]">
                    <video 
                        src="/filbooks.mp4" 
                        className="object-cover w-full h-full rounded-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                    />
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/filbook1.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/filbooks2.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                            <div className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden">
                                <Image
                                src="/filbooks3.png"
                                alt=""
                                fill
                                className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
            </Card> 
        
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
