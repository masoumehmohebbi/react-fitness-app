import { motion } from 'framer-motion'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import img1 from '../assets/images/fit-woman1.jpg'
import img2 from '../assets/images/fit-woman2.jpg'
import img3 from '../assets/images/fit-woman3.jpg'
import img4 from '../assets/images/fit-woman4.jpg'

import ArrowRight from '../assets/icons/Arrow-right.png'
import Dumbell from '../assets/icons/dumbell.png'
const Reasons = () => {
    return ( 
        <section id='reasons' className="gap-y-11 xl:gap-y-0 grid grid-cols-6 justify-between px-5 pb-20">
            <div className='grid justify-center lg:justify-normal col-span-6 lg:col-span-3 xl:col-span-2'>
                <h3 className='text-primary font-bold text-xl'>Some Reasons</h3>
                <h1 className='my-4 capitalize font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-300'>Why choose us?</h1>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <ul className='flex flex-col gap-y-4 mt-12 capitalize'>
                        <li className='flex items-center text-lg dark:text-slate-300 text-slate-800'>
                            <img src={Dumbell} className='w-6 h-6 mr-4 object-cover' alt="" />
                            one free program for new member
                        </li>
                        <li className='flex items-center text-lg dark:text-slate-300 text-slate-800'>
                            <img src={Dumbell} className='w-6 h-6 mr-4 object-cover' alt="" />
                            reliable partners
                        </li>
                        <li className='flex items-center text-lg dark:text-slate-300 text-slate-800'>
                            <img src={Dumbell} className='w-6 h-6 mr-4 object-cover' alt="" />
                            over 140+EXPERT COACHES
                        </li>
                        <li className='flex items-center text-lg dark:text-slate-300 text-slate-800'>
                            <img src={Dumbell} className='w-6 h-6 mr-4 object-cover' alt="" />
                            train smarter and faster than before
                        </li>
                    </ul>
                </AnimationOnScroll>
                
            </div>

            <motion.div 
             whileHover = {{
                scale: 1.1,
                originX: -3.1
                
            }}
            transition = {{
                type:'spring',
                stiffness:'300'
            }}
            className='hidden xl:grid col-span-1 ml-20 items-center'>
                <img src={ArrowRight} alt="" />
            </motion.div>
            <div dir='rtl' className='my-11 lg:my-0 grid justify-center lg:justify-normal col-span-6 lg:col-span-3'>
                    <div className='grid grid-cols-4 grid-rows-3 gap-4 max-w-[500px] max-h-[340px]'>
                    <div className='row-span-3 col-span-2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-md' src={img1} alt="" />
                    </div>
                    <div className='row-span-2 col-span-2'>
                        <img className='w-full h-full object-cover rounded-lg shadow-md' src={img3} alt="" />
                    </div>
                    <div className='row-span-1 col-span-1'>
                        <img className='w-full h-full object-cover rounded-lg shadow-md' src={img4} alt="" />
                    </div>
                    <div className='row-span-1 col-span-1'>
                        <img className='w-full h-full object-cover rounded-lg shadow-md' src={img2} alt="" />
                    </div>
                </div> 

            </div>
        </section>
     );
}
 
export default Reasons;
