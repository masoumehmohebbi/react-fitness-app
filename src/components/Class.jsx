import { motion } from 'framer-motion';

import Img1 from "../assets/images/image1.png"
import Img2 from "../assets/images/image2.png"
import Img3 from "../assets/images/image3.png"
import Img4 from "../assets/images/image4.png"
import Img5 from "../assets/images/image5.png"
import Img6 from "../assets/images/image6.png"

import ArrowLeft from "../assets/icons/Arrow.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles.css'
import { EffectCards } from 'swiper/modules';


const Class = () => {
    return ( 
        <section id="classes" className="overflow-hidden items-center lg:items-start p-5 mb-24 flex gap-y-11 flex-col-reverse lg:grid lg:grid-cols-6  lg:gap-y-0">
        
            <div className="grid justify-center lg:justify-normal col-span-3 xl:col-span-2">
                <div className="grid justify-start items-start pl-7">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-[190px] h-[190px] sm:w-[300px] sm:h-[340px]"
                    >
                        <SwiperSlide>
                            <img src={Img1} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img2} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img3} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img4} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img5} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img6} alt="" className='absolute inset-0 bg-cover bg-center z-0 w-full h-full object-cover cursor-pointer mb-1 rounded-md' />
                            <span className="flex gap-y-4 flex-col opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 justify-center items-center text-slate-700 bg-[#f5d0feda]">
                                <h1 className='text-sm font-bold uppercase'>Weight training class</h1>
                                <p className='text-sm p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <motion.div 
            whileHover = {{
                scale: 1.1,
                originX: 3.1
                
            }}
            transition = {{
                type:'spring',
                stiffness:'300'
            }}
            className="hidden xl:grid col-span-1 mr-24 items-center">
                <img src={ArrowLeft} alt="" />
            </motion.div>

            <div className="col-span-3 xl:col-span-3 prose prose-slate pr-7">
                <h1 className='capitalize text-center sm:text-start font-black text-2xl sm:text-3xl text-slate-800 dark:text-slate-300'>our classes</h1>
                <p className="text-slate-800 dark:text-slate-300">We get lots of messeges about the classes actually, with people regularly asking us things like:</p>
                <blockquote>
                    <p className='my-5 capitalize text-secondary'>
                    Why should we attend these classes? What classes are more <code>useful</code> for us? Will we get the desired result soon by participating in these classes?
                    </p>
                </blockquote>
                <h4 className="text-slate-800 dark:text-slate-300 text-justify">
                By hovering over each photo, you can read the details of each class and get answers to your questions.
                </h4>
           </div>
        </section>
     );
}
 
export default Class;
