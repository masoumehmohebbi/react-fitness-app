import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = () => {
    return (  
        <footer id="contact-us" className='flex items-center p-5 justify-center gap-y-4 flex-col mt-20'>
                <AnimationOnScroll initiallyVisible={true} animateIn="animate__wobble">
                    <h1 className="capitalize mb-6 text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-300"><span className='text-secondary'>Join now</span> to get in shape</h1>
                </AnimationOnScroll>
                <p className='text-justify md:w-2/3 xl:w-1/2 text-slate-800 dark:text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptas natus a corrupti asperiores doloremque quibusdam voluptates vero, dolorum est.</p>
                <form action="#" className="flex flex-col gap-y-4 mt-3 w-11/12 md:w-4/5 xl:w-1/2">
                    <input className="capitalize" type="text" placeholder="name"/>
                    <input className="capitalize" type="email" name="" id="" placeholder="email"/>
                    <textarea className="capitalize" placeholder="message" name="" id="" cols="30" rows="4"></textarea>
                    <input type="button" value="submit"
                      className="ring-offset-[#fdf4ff] dark:ring-offset-slate-800 duration-500 bg-primary cursor-pointer capitalize hover:ring hover:ring-offset-2 hover:ring-primary text-white top-12 py-2 px-5 rounded-md"
                    />
                </form>
        </footer>
    );
}


export default Footer;
