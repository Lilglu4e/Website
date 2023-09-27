'use client'
import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { PiFrameCornersBold } from 'react-icons/pi';
import { FaCode } from 'react-icons/fa6';
import { SiNetlify } from 'react-icons/si';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import web1 from '../../public/nexxt-tic.png'
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={` ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Moe Sarraf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gray-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Lilglu4e</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsSun
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Moe Sarraf
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {`I'm a computer science student passionate about Data Science, AI, 
							and Full-Stack Development. I've crafted projects like a React mini-game 
							and an NBA MVP prediction model, showcasing my skills in creating engaging 
							user experiences and harnessing data-driven insights.`}
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href={'https://github.com/Lilglu4e'}><AiFillGithub /></Link>
              <Link href={'https://www.linkedin.com/in/mohammad-sarraf-3893a81b7/'}><AiFillLinkedin /></Link>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {/* Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for */}
              #### ### ######## ### ####### ##### #### # #### ### #### ####
              ######## ##### #### ###### ### ## ###
              <span className="text-teal-500"> ####### </span>
              ##### ### <span className="text-teal-500">##### </span>
              #######  #### ### ##### ## # ##### ##### ##### ##### ##### #####
              ##### ##### ##### #####
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center dark:text-white shadow-lg p-10 rounded-xl my-10 bg-gradient-to-t from-gray-300 to-gray-100 dark:bg-gradient-to-t dark:from-gray-700 dark:to-gray-800 flex-1">
              <PiFrameCornersBold className={`w-16 h-16 text-teal-600 mx-auto`} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                FrameWorks
              </h3>
              <p className="py-2">
                ### ######  ###### # ####  # #####  ### # # # ## # # #
                ############
              </p>
              <h4 className="py-4 text-teal-300">#####</h4>
              <p className="dark:text-white py-1">React</p>
              <p className="dark:text-white py-1">Next.js</p>
              <p className="dark:text-white py-1">Figma</p>
              <p className="dark:text-white py-1">Firebase</p>
              <p className="dark:text-white py-1">Material-UI, Tailwind, BoootsTrap</p>
            </div>
            <div className="text-center dark:text-white shadow-lg p-10 rounded-xl my-10 bg-gradient-to-t from-gray-300 to-gray-100 dark:bg-gradient-to-t dark:from-gray-700 dark:to-gray-800 flex-1">
              {/* <Image src={code} width={100} height={100} /> */}
              <IoLibraryOutline className={`w-16 h-16 text-teal-600 mx-auto`} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Libraries
              </h3>
              <p className="py-2">
                ### ######  ###### # ####  # #####  ### # # # ## # # #
                ############
              </p>
              <h4 className="py-4 text-teal-300">#####</h4>
              <p className="dark:text-white py-1">Pandas</p>
              <p className="dark:text-white py-1">NumPy</p>
              <p className="dark:text-white py-1">TensorFlow</p>
              <p className="dark:text-white py-1">sci-kitlearn, matplotlib</p>
              <p className="dark:text-white py-1">matplotlib</p>
            </div>
            <div className="text-center dark:text-white shadow-lg p-10 rounded-xl my-10 bg-gradient-to-t from-gray-300 to-gray-100 dark:bg-gradient-to-t dark:from-gray-700 dark:to-gray-800 flex-1">
              <FaCode className={`w-16 h-16 text-teal-600 mx-auto`} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Languages</h3>
              <p className="py-2">
                ### ######  ###### # ####  # #####  ### # # # ## # # #
                ############
              </p>
              <h4 className="py-4 text-teal-300">##### </h4>
              <p className="dark:text-white py-1">C/C++</p>
              <p className="dark:text-white py-1">Python</p>
              <p className="dark:text-white py-1">SQL</p>
              <p className="dark:text-white py-1">HTML/CSS/JavaScript</p>
              <p className="dark:text-white py-1">Java</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {`Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for`}
              <span className="text-teal-500"> agencies </span>
              {`consulted for`} <span className="text-teal-500">startups </span>
              {`and collaborated with talanted people to create digital products
              for both business and consumer use.`}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {`I offer from a wide range of services, including brand design,
              programming and teaching.`}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover"
                layout="responsive"
                src={web1}
                alt={``}
              />
              <div className='bg-gray-500 opacity-0 group-hover:opacity-100 absolute inset-x-0 top-0 p-4 transform translate-y-full transition-opacity duration-300'>
                <div className='flex justify-between items-center'>
                  <p className='text-white ml-3 mt-3'>Tic-Tac-Toe</p>
                </div>
                <div className='flex justify-between items-center pb-1'>
                  <p className='text-white ml-3'>Next.js, React, HTML, JavaScript, CSS, Tailwind, Firebase</p>
                  <div className='flex items-center'>
                    <Link href={'https://github.com/Lilglu4e/next_tic'}><AiFillGithub className='text-white mr-3 w-6 h-6' /></Link>
                    <Link href={'https://lilglu4e-firebase.netlify.app/'}><SiNetlify className='text-white w-6 h-6 mr-3' /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative group">
              <Image
                className="rounded-lg object-cover"
                layout="responsive"
                src={web1}
                alt={``}
              />
              <div className='bg-gray-500 opacity-0 group-hover:opacity-100 absolute inset-x-0 top-0 p-4 transform translate-y-full transition-opacity duration-300'>
                <div className='flex justify-between items-center'>
                  <p className='text-white ml-3 mt-3'>Tic-Tac-Toe</p>
                </div>
                <div className='flex justify-between items-center pb-1'>
                  <p className='text-white ml-3'>Next.js, React, HTML, JavaScript, CSS, Tailwind, Firebase</p>
                  <div className='flex items-center'>
                    <Link href={'https://github.com/Lilglu4e/next_tic'}><AiFillGithub className='text-white mr-3 w-6 h-6' /></Link>
                    <Link href={'https://lilglu4e-firebase.netlify.app/'}><SiNetlify className='text-white w-6 h-6 mr-3' /></Link>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  );
}
