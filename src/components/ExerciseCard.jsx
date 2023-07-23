/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const ExerciseCard = ({exercise}) => {
    const ref = useRef(null)
    const isInView = useInView(ref , {once:true})
    const mainControls = useAnimation()
  
    useEffect(()=>{
        if(isInView){
            mainControls.start('visible')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView])
  
    return (
        <section ref={ref} className="bg-white shadow-md shadow-[#f5d0fe] p-5 rounded-md my-3">
            <Link to={`/exercise/${exercise.id}`} >
                <motion.div
                    variants={{
                        hidden: {opacity:0, y:75},
                        visible: {opacity:1 , y:0},
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{duration:0.5, delay:0.25}}>
                    
                    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="rounded-xl w-[300px] h-auto" />
                    <div className="flex gap-x-3 mt-4">
                        <button className="text-white text-sm md:text-base rounded-lg bg-secondary p-2">{exercise.bodyPart}</button>
                        <button className="text-white text-sm md:text-base rounded-lg bg-primary p-2">Target:{ exercise.target}</button>
                        {/* <button className="rounded-lg border-2 border-primary p-2">Equipment:{exercise.equipment}</button> */}
                    </div>
                    <p className="mt-3 font-medium text-slate-800">{exercise.name}</p>
                </motion.div>
            </Link>
        </section>
     );
}


export default ExerciseCard;
