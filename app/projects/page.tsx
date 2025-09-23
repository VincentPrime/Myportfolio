"use client";

import { useState } from "react";
import TextType from "@/components/Reactbits/texttype";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import Image from "next/image";
import { motion } from "framer-motion";
import ClickSpark from "@/components/Reactbits/Clickspark";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { Icon } from "@iconify-icon/react";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  // reusable badge classes
  const badgeBase =
    "ml-3 inline-flex items-center justify-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold";

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

          {/* --- FIRST CARD --- */}
          <Card className="mt-5 p-5">
            <div className="flex gap-4">
              <div className="rounded-full w-15 h-15 border overflow-hidden">
                <Image src="/vincent.png" alt="" width={100} height={100} />
              </div>
              <div>
                <span className="flex">
                  <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                  <div
                    className={`${badgeBase} bg-[#a0e2ff] text-[#1ba5e0]`}
                  >
                    Frontend
                  </div>
                </span>
                <h2 className="text-20 text-[#605e5e]">Apr 8 2025</h2>
              </div>
            </div>
            <div>
              <p>
                I am one of the people who created the frontend and UI design
                for our capstone project, which is used for quick printing of
                documents, PDFs, pictures, and more. I used Figma for the design
                and React.js to build the frontend.
              </p>
            </div>

            {/* Video */}
            <div className="w-full relative h-[300px] md:h-[500px]">
              <video
                src="/videzprint.mp4"
                className="object-contain md:object-cover w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Images */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {["/ezprint.png", "/ezprint1.png", "/ezprint2.png"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden"
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>

          {/* --- SECOND CARD --- */}
          <Card className="mt-5 p-5">
            <div className="flex gap-4">
              <div className="rounded-full w-15 h-15 border overflow-hidden">
                <Image src="/vincent.png" alt="" width={100} height={100} />
              </div>
              <div>
                <span className="flex">
                  <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                  <div
                    className={`${badgeBase} bg-[#a0e2ff] text-[#1ba5e0]`}
                  >
                    Frontend
                  </div>
                </span>
                <h2 className="text-20 text-[#605e5e]">Aug 22, 2025</h2>
              </div>
            </div>
            <div>
              <p>
                I contributed to the development of the concept and planning of
                the application, including how it would be implemented. I also
                assisted in designing and developing the front-end portion of
                the project.
              </p>
            </div>

            {/* Video */}
            <div className="w-full relative h-[300px] md:h-[500px]">
              <video
                src="/magsasakavid.mp4"
                className="object-contain md:object-cover w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Images */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {["/magsasaka1.png", "/magsasaka2.png", "/magsasaka3.png"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden"
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>

          {/* --- THIRD CARD --- */}
          <Card className="mt-5 p-5">
            <div className="flex gap-4">
              <div className="rounded-full w-15 h-15 border overflow-hidden">
                <Image src="/vincent.png" alt="" width={100} height={100} />
              </div>
              <div>
                <span className="flex">
                  <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                  <div
                    className={`${badgeBase} bg-[#a0e2ff] text-[#1ba5e0]`}
                  >
                    UI DESIGN
                  </div>
                </span>
                <h2 className="text-20 text-[#605e5e]">Nov 9 2023</h2>
              </div>
            </div>
            <div>
              <p>
                When I was in college, I created a simple UI design that
                showcased the different organizations of CIT BulSU.
              </p>
            </div>

            {/* Video */}
            <div className="w-full relative h-[300px] md:h-[500px]">
              <video
                src="/figma.mp4"
                className="object-contain md:object-cover w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Card>

          {/* --- FOURTH CARD --- */}
          <Card className="mt-5 p-5">
            <div className="flex gap-4">
              <div className="rounded-full w-15 h-15 border overflow-hidden">
                <Image src="/vincent.png" alt="" width={100} height={100} />
              </div>
              <div>
                <span className="flex">
                  <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                  <div
                    className={`${badgeBase} bg-[#ffa0a0] text-[#e01b1b]`}
                  >
                    Fullstack
                  </div>
                </span>
                <h2 className="text-20 text-[#605e5e]">Sept 1 2025</h2>
              </div>
            </div>
            <div>
              <p>
                I developed a full-stack Web application where users can
                download books as long as they sign up. For now, I haven’t added
                the pictures, titles, and authors yet
              </p>
            </div>

            {/* Video */}
            <div className="w-full relative h-[300px] md:h-[500px]">
              <video
                src="/filbooks.mp4"
                className="object-contain md:object-cover w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Images */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {["/filbook1.png", "/filbooks2.png", "/filbooks3.png"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden"
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>

          <div>
            <p className="font-bold text-4xl">Currently Working</p>
          </div>

          {/* --- FIFTH CARD --- */}
          <Card className="mt-5 p-5 mb-10">
            <div className="flex gap-4">
              <div className="rounded-full w-15 h-15 border overflow-hidden">
                <Image src="/vincent.png" alt="" width={100} height={100} />
              </div>
              <div>
                <span className="flex">
                  <h1 className="font-bold text-2xl">Vincent Fillar</h1>
                  <div
                    className={`${badgeBase} bg-[#ffa0a0] text-[#e01b1b]`}
                  >
                    Fullstack
                  </div>
                </span>
                <h2 className="text-20 text-[#605e5e]">Sept 23 2025</h2>
              </div>
            </div>
            <div>
              <p>
                I am currently developing a full-stack mobile application using
                React Native for the front end and Node.js/Express for the back
                end. This application is designed to assist residents within a
                specific barangay where it will be deployed. Its primary
                objective is to enable users to send photos and reports of
                incidents — such as flooding, fallen trees, and other
                emergencies — that require an immediate response from barangay
                officials.
              </p>
            </div>

            {/* Video */}
            <div className="w-full h-[500px] bg-muted flex items-center justify-center rounded-lg overflow-hidden">
              <video
                src="/calamityvid.mp4"
                className="max-h-full max-w-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Images */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {["/calimity1.jpg", "/calamity2.jpg", "/calamity3.jpg"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 aspect-video rounded-xl relative overflow-hidden"
                    >
                      <Image src={src} alt="" fill className="object-contain" />
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
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

            <CardContent>
              <p className="font-bold text-2xl mb-2">CONTACT ME!</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Icon icon="fluent:mail-28-filled" width="40" height="40" />
                  </motion.div>
                  fillar.vincent02@gmail.com
                </li>
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Icon icon="majesticons:phone-line" width="40" height="40" />
                  </motion.div>
                  +63 947-460-5787
                </li>
                <li className="flex items-center font-medium text-lg hover:text-[#14d911] gap-2">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Icon icon="fa-solid:file-pdf" width="40" height="40" />
                  </motion.div>
                  <a href="/vincent-cv.pdf" download="vincent-cv.pdf">
                    Resume
                  </a>
                </li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </footer>
    </div>
  );
}
