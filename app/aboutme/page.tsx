"use client"

import { useState } from "react";
import ClickSpark from "@/components/Reactbits/Clickspark"
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars"
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X, } from "lucide-react";
import { Icon } from '@iconify-icon/react';

export default function Aboutme(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
<div>
    <div className="relative w-full min-h-screen overflow-x-hidden">
        {/* Navbar */}
        <div className="relative z-10 w-full py-6">
            <header className="text-white flex justify-between items-center px-6 md:px-40">
                <a href="/"><h1 className="font-extrabold text-2xl md:text-3xl">PORTFOLIO</h1></a>
                
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-7 font-bold text-lg md:text-2xl">
                        <li><a href="/"><ClickSpark>Home</ClickSpark></a></li>
                        <li><a href="/aboutme"><ClickSpark>About me</ClickSpark></a></li>
                        <li><a href="/contact"><ClickSpark>Contact me</ClickSpark></a></li>
                    </ul>
                </div>

                {/* Hamburger Button */}
                <button 
                    className="md:hidden text-white" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={32}/> : <Menu size={32}/>}
                </button>
            </header>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden w-full bg-[#111] text-white py-6 shadow-lg">
                    <ul className="flex flex-col items-center gap-6 font-bold text-lg">
                        <li><a href="/" onClick={() => setMenuOpen(false)}><ClickSpark>Home</ClickSpark></a></li>
                        <li><a href="/aboutme" onClick={() => setMenuOpen(false)}><ClickSpark>About me</ClickSpark></a></li>
                        <li><a href="/contact" onClick={() => setMenuOpen(false)}><ClickSpark>Contact me</ClickSpark></a></li>
                    </ul>
                </div>
            )}
        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10">
            <StarsBackground />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-center text-center text-white px-6 md:px-40 gap-10 mt-30">
            {/* Left (Image) */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="rounded-2xl overflow-hidden border-2 border-gray-500 shadow-lg w-[250px] md:w-[300px] mx-auto">
                    <Image
                        src="/vincent.png"
                        alt="vincent"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
            </motion.div>

            {/* Right (Text) */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=""
            >
                <div>
                    <p className="font-extrabold text-3xl md:text-6xl">Vincent Fillar</p>
                    <Separator className="my-4"/>
                    <p className="font-bold text-lg md:text-2xl text-[#a2a4a6]">
                        Passionate about <span className="text-[#ed880c]">Web Development</span> and <span className="text-[#ed880c]">PC troubleshooting</span>, I aim to grow continuously by
                        exploring new web technologies and tools. I strive to expand my skills in both frontend
                        development and computer systems to contribute effectively to modern digital solutions.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>

    {/* Educational Background */}
    <div className="bg-[#363636] text-white p-6 md:p-20">
        <motion.div
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ amount: 0.2 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h1 className="font-extrabold text-3xl md:text-5xl text-center md:text-left">EDUCATIONAL BACKGROUND</h1>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10">
            {/* Card 1 */}
            <motion.div
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Card className="p-5 mt-5">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                            <ul className="flex flex-wrap gap-2 md:gap-4">
                                <li className="p-2 border rounded-2xl text-[#0a50ff] bg-[#cddbff]"><p>Bachelors Degree</p></li>
                                <li className="p-2 border rounded-2xl text-[#ff6347] bg-[#facec7]"><p>Cumlaude</p></li>
                                <li className="p-2 border rounded-2xl text-[#ffad0a] bg-[#f9e8c6]"><p>Deans lister</p></li>
                            </ul>
                            <h1 className="font-extrabold text-2xl md:text-4xl">Bulacan State University</h1>
                            <span>Bachelor of Industrial Technology Major in Computer Technology</span>
                        </div>
                        <div>
                            <p>2021-2025</p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Card className="p-5">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                            <ul className="flex flex-wrap gap-2 md:gap-4">
                                <li className="p-2 border rounded-2xl text-[#0a50ff] bg-[#cddbff]"><p>With Honors</p></li>
                            </ul>
                            <h1 className="font-extrabold text-2xl md:text-4xl">CMIS-Sto. Rosario</h1>
                            <span>TLV-ICT</span>
                        </div>
                        <div>
                            <p>2019-2021</p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Card className="p-5">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <h1 className="font-extrabold text-2xl md:text-4xl">CMIS-Sto. Rosario</h1>
                        <p>2015-2019</p>
                    </div>
                </Card>
            </motion.div>
        </div>
    </div>

    {/* Technical Expertise */}
    <div className="p-6 md:p-20 relative w-full min-h-screen overflow-x-hidden">
        <div className="relative z-10 w-full text-white flex flex-col items-center">
            <h1 className="font-extrabold text-3xl md:text-7xl text-center">Technical Expertise</h1>
            <h2 className="text-[#d4d3d2] mt-5 text-center md:text-left">A skills set built through continuous learning and hands-on experience in modern Web development.</h2>
        </div>

        <div className="absolute inset-0 -z-10">
            <StarsBackground />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row w-full justify-evenly mt-10 md:mt-20 gap-6 flex-wrap">
            {/* Card 1 */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full sm:w-[90%] md:w-[30%] max-w-sm mx-auto"
            >
                <Card className="bg-[#363636] border-[#474747] text-white transition duration-300 hover:shadow-[#7883fc] hover:text-[#7883fc]">
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center font-bold text-xl md:text-3xl">
                            <Image src="/code.png" alt="" width={40} height={40}/>
                            Development
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc marker:text-[#7883fc] text-lg md:text-2xl font-bold text-[#cacacc] pl-6">
                            <li className="hover:text-white">Javascript</li>
                            <li className="hover:text-white">React.js</li>
                            <li className="hover:text-white">Next.js</li>
                            <li className="hover:text-white">Node & Express.js</li>
                            <li className="hover:text-white">MySQL</li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full sm:w-[90%] md:w-[30%] max-w-sm mx-auto"
            >
                <Card className="bg-[#363636] border-[#474747] text-white transition duration-300 hover:shadow-[#cf1af3] hover:text-[#cf1af3]">
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center font-bold text-xl md:text-3xl">
                            <Image src="/pencil.png" alt="" width={40} height={40}/>
                            Design
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc marker:text-[#cf1af3] text-lg md:text-2xl font-bold text-[#cacacc] pl-6">
                            <li className="hover:text-white">Figma Design & Prototyping</li>
                            <li className="hover:text-white">Responsive Design</li>
                            <li className="hover:text-white">Design System</li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full sm:w-[90%] md:w-[30%] max-w-sm mx-auto"
            >
                <Card className="bg-[#363636] border-[#474747] text-white transition duration-300 hover:shadow-[#14d911] hover:text-[#14d911]">
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center font-bold text-xl md:text-3xl">
                            <Image src="/settings.png" alt="" width={40} height={40}/>
                            Tools
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc marker:text-[#14d911] text-lg md:text-2xl font-bold text-[#cacacc] pl-6">
                            <li className="hover:text-white">Github</li>
                            <li className="hover:text-white">Computer System Servicing</li>
                        </ul>
                    </CardContent>
                </Card> 
            </motion.div>
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
    )
}
