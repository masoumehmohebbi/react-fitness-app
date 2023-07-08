import HeroBannerImg from '../assets/images/banner-ex.png'
const HeroBanner = () => {
    return ( 
        <section className='flex h-screen w-full justify-between'>
            <div className='h-full gap-y-7 flex flex-col items-center justify-center'>
                <h1 className='font-black text-3xl text-[#06b6d4]'>Fitness Women Club</h1>
                <h2 className='text-4xl font-black'>Sweat, Smile <br/> And Repeat</h2>
                <p className='font-medium'>Check out the most effective exercises personalized to you</p>
            
               <div className='flex flex-col items-center justify-center  relative'>
                    <span className=' opacity-10 text-8xl text-[#c026d3] font-semibold '>Masoume App</span>
                    <a href="#exercises" className="absolute bg-[#c026d3] text-white top-12 py-2 px-4 rounded-md">Explore Exercises</a>
               </div>
            </div>

           <div className='h-full flex items-end justify-end mt-3 pt-3 '>
           <img src={HeroBannerImg} alt="banner" className='rounded-md object-cover h-full' />
           </div>
        </section>
     );
}
 
export default HeroBanner;