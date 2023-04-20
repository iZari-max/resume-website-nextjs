"use client"
import "./Navigation.css"
import Image from 'next/image';
import Link from "next/link";
import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa"
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function Navigation() {

  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex flex-col h-[100vh] mt-14 mb-6 items-center fixed">
          <div className="flex flex-col space-y-4 items-center">
            <Image src="/site-photo.jpg" height={90} width={120} alt="profile photo" className="rounded-full" />
            <h1 className=" font-bold text-2xl">Shamraiz Masih</h1>
          </div>
          <div className=" font-bold text-lg flex flex-col space-y-4 mt-8">
            <Link className="link" href={"/#about"}>About</Link>
            <Link className="link" href={"/#services"}>Services</Link>
            <Link className="link" href={"/#skills"}>Skills</Link>
            <Link className="link" href={"/#work"}>Work</Link>
            <Link className="link" href={"/#history"}>History</Link>
            <Link className="link" href={"/#contacts"}>Contacts</Link>
          </div>
          <div className="font-bold flex flex-row space-x-8 mt-20">
            <a href="https://instagram.com/__shamraiz__?igshid=ZDdkNTZiNTM=" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/shamraiz.pervaiz.90/" target="_blank"><FaFacebook /></a>
            <a href="" target="_blank"><FaTwitter /></a>
            <a href="https://github.com/iZari-max" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="container">
          <button onClick={handleToggle} className="">
          <Image src="/site-photo.jpg" height={40} width={50} alt="profile photo" className="rounded-full" /> 
          </button>
        </div> 
        <div className={`${active ? 'block' : 'hidden'}`}>
          <div className=" font-semibold text-md flex flex-col space-y-4 mt-8">
            <Link className="link" href={"/#about"}>About</Link>
            <Link className="link" href={"/#services"}>Services</Link>
            <Link className="link" href={"/#skills"}>Skills</Link>
            <Link className="link" href={"/#work"}>Work</Link>
            <Link className="link" href={"/#history"}>History</Link>
            <Link className="link" href={"/#contacts"}>Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navigation
