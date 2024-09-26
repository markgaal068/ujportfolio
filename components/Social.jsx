"use client"

import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from "react-icons/fa"

const socials =[
    {icon: <FaGithub />, path: "https://github.com/markgaal068"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/gaal-mark"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/@markgaalmg"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/gaal_mark55/"},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
}

export default Social