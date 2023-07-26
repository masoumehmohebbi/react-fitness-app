import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll'


import logo from "../assets/images/Logo.png"
import darkLogo from '../assets/images/dark-logo.png'

import {BiSun, BiMoon, BiLaptop} from "react-icons/bi";
import { useEffect, useState } from "react";

import { motion, useScroll,useSpring } from "framer-motion";

// eslint-disable-next-line react/prop-types
const NavBar = ({theme , setTheme}) => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

      const [open,setOpen]=useState(false);
      const themeOptions = [
        {icon: BiSun , title:"light"},
        {icon: BiMoon , title:"dark"},
        {icon: BiLaptop , title:"system"}
    ]

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

    const [armLogo, setArmLogo] = useState(
        localStorage.getItem('theme')==="dark" ? darkLogo : logo
    )

    const onWhindowMatch = () => {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        }else{
            element.classList.remove('dark')
        }
    }
    onWhindowMatch()

    useEffect(()=>{
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                setArmLogo(darkLogo)
                break;

            case 'light':
                element.classList.remove('dark')
                setArmLogo(logo)
                localStorage.setItem('theme', 'light')
                break;

            default:
                setArmLogo("")

                if (darkQuery.matches){
                    setArmLogo(darkLogo)
                }else{
                    setArmLogo(logo)
                }

                localStorage.removeItem('theme')
                onWhindowMatch()
                break;
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[theme])

    darkQuery.addEventListener('change' , (e) =>{
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add('dark')
            }else{
                element.classList.remove('dark')
            }
        }
        
        if (darkQuery.matches){
            setArmLogo(darkLogo)
        }else{
            setArmLogo(logo)
        }
    })
    return (
      <nav className='sticky top-0 left-0 w-full z-40'>
            <motion.div
            style={{ scaleX}}
            className='
            fixed top-0 left-0 right-0 h-1 dark:bg-secondary bg-primary origin-left '>
            </motion.div>
            
            <div className='md:flex py-3 items-center justify-between bg-[#fdf4ff] dark:bg-slate-800'>
                <div onClick={()=>setOpen(!open)} className='text-slate-800 dark:text-slate-300 text-4xl absolute right-5 cursor-pointer z-50 lg:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <div className="flex">
                    <motion.div 
                    whileHover = {{
                        scale: 1.1,
                        originX: 0
                    }}
                    transition = {{
                        type:'spring',
                        stiffness:'300'
                    }}
                    className="w-12 h-12 mx-5">
                        <Link to="/" >
                            <img className="object-cover" src={armLogo} alt="" />
                        </Link>
                    </motion.div>

                    <div className={`flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:items-center 
                    lg:pb-0 pb-12 absolute lg:static bg-[#fdf4ff]  lg:bg-transparent lg:z-auto z-[-1]
                    left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in lg:gap-x-10
                    text-xl md:text-[22px] ${open ? 'pt-2 top-[70px] opacity-100':'top-[-490px]'} lg:opacity-100 opacity-0`}>
                        <motion.div
                        whileHover = {{
                            scale: 1.2,
                            originX: 0
                        }}
                        transition = {{
                            type:'spring',
                            stiffness:'300'
                        }}
                        >
                            <Link onClick={() => setOpen(false)} to="/" className="text-slate-800 lg:dark:text-slate-300 cursor-pointer border-b-4 border-primary" >
                                Home
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            whileHover = {{
                                scale: 1.2,
                                originX: 0
                                
                            }}
                            transition = {{
                                type:'spring',
                                stiffness:'300'
                            }}>
                            <Scroll onClick={() => setOpen(false)}to="exercises" spy={true} smooth={true} offset={-150} duration={500} 
                            className="text-slate-800 cursor-pointer lg:dark:text-slate-300" >
                                Exercises
                            </Scroll>
                        </motion.div>
                        
                        <motion.div
                            whileHover = {{
                                scale: 1.2,
                                originX: 0
                            }}
                            transition = {{
                                type:'spring',
                                stiffness:'300'
                            }}>
                            <Scroll onClick={() => setOpen(false)} to="classes" spy={true} smooth={true} offset={-100} duration={500} 
                            className="text-slate-800 cursor-pointer lg:dark:text-slate-300" >
                                Classes
                            </Scroll>
                        </motion.div>

                        <motion.div
                            whileHover = {{
                                scale: 1.2,
                                originX: 0
                            }}
                            transition = {{
                                type:'spring',
                                stiffness:'300'
                            }}>
                            <Scroll onClick={() => setOpen(false)} to="reasons" spy={true} smooth={true} offset={-100} duration={500} 
                            className="text-slate-800 cursor-pointer lg:dark:text-slate-300" >
                                Reasons
                            </Scroll>
                        </motion.div>

                        <motion.div
                            whileHover = {{
                                scale: 1.2,
                                originX: 0
                            }}
                            transition = {{
                                type:'spring',
                                stiffness:'300'
                            }}>
                            <Scroll onClick={() => setOpen(false)} to="contact-us" spy={true} smooth={true} offset={50} duration={500} 
                            className="text-slate-800 cursor-pointer lg:dark:text-slate-300" >
                                Contacts
                            </Scroll>
                        </motion.div>
                    </div>
                </div>

                <div 
                className="hidden lg:flex gap-x-4 bg-[#fae8ff] dark:bg-slate-400 rounded-md p-2 mr-5">
                    {themeOptions.map(opt=>(
                        // eslint-disable-next-line react/jsx-key
                    <motion.div
                    key={opt.title}
                    whileHover = {{
                        scale: 1.3,
                        originX: 0
                            
                        }}
                        transition = {{
                            type:'spring',
                            stiffness:'300'
                        }}
                    >
                            <opt.icon 
                                key={opt.title}
                                onClick={() => setTheme(opt.title)}
                                className={`text-2xl cursor-pointer ${theme === opt.title ? 'text-secondary' : 'text-slate-800 '}`}
                                title={opt.title}/>
                    </motion.div>
                    ))}
                </div>
            </div>
      </nav>
    )
}
 
export default NavBar;
