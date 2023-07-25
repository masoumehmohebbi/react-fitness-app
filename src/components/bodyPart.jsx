import Icon from '../assets/icons/gym.png'
import { Link as Scroll } from 'react-scroll'

// eslint-disable-next-line react/prop-types, no-unused-vars
const BodyPart = ({item, bodyPart , setBodypart}) => {
    return ( 
        <Scroll to="showingExercises" spy={true} smooth={true} offset={-80} duration={500} >
            <button  onClick={()=>{
                setBodypart(item)
                }} className={`m-3 transition-all duration-200 pt-2 flex flex-col w-[140px] h-[140px] bg-[#ecfeff] shadow-md rounded-md items-center justify-center ${bodyPart===item ? " border-primary border-t-4 bg-[#96f0fa]" : ""}`}>
                <img className='w-[40px] h-[40px]' src={Icon} alt="dumbble" />
                <span className='font-bold capitalize mt-2 text-slate-800'>{item}</span>
            </button>
        </Scroll>
     );
}
 
export default BodyPart;
