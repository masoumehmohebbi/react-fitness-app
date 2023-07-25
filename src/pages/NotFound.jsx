import NotFoundCat from '../assets/images/404-1.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <section className='flex items-center flex-col gap-y-11 py-11'>
            <h1 className='capitalize text-3xl text-primary font-black'>page not found</h1>
            <p className='capitalize dark:text-slate-300'>we cannot find the page you are looking for<br/>
            you can either return to the previous page, visit the homepage.
            </p>

            <Link to={'/'}>
                <button className="w-1/2 capitalize text-sm sm:text-base sm:w-auto duration-500 ring-offset-[#fdf4ff] dark:ring-offset-slate-800 bg-primary sm:ml-3 hover:ring hover:ring-offset-2 hover:ring-primary text-white top-12 py-2 px-5 rounded-md">visit homepage</button>
            </Link>
               
            <img src={NotFoundCat} alt="not found cat" />
        </section>
     );
}
 
export default NotFound;