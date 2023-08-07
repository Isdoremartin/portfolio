import React from "react";
import { FaFacebookMessenger, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Isdoremartin",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:martinnwaka6@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const mgs_links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30}/>
        </>
      ),
      href: "https://linkedin.com/in/nwaka-isdore-77b237245",
      
    },
    {
      id: 2,
      child: (
        <>
           <FaFacebookMessenger size={30} />
        </>
      ),
      href: "https://m.me/isdoremartin.nwaka",
    },
    {
      id: 3,
      child: (
        <>
           <FaPhone size={30} />
        </>
      ),
      href: "tel:08165761787",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:martinnwaka6@gmail.com",
    },
    
  ];

  return (
    <div>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 border border-cyan-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-cyan-500"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="lg:hidden bottom-[10%] right-6 z-50 fixed">
      <ul className="text-cyan-500 space-y-4 ">
        {
          mgs_links.map(({id, child, href}) =>
            (
              <li key={id} className="rounded-full hover:bg-white p-1 shadow shadow-cyan-500 hover:translate-x-[-6px] duration-300">
              <a href={href}>{child}</a>
            </li>
            )
        )
        }
       
      </ul>
    </div>
    </div>
  );
};

export default SocialLinks;
