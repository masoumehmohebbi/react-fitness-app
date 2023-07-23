/* eslint-disable react/prop-types */
import TargetIcon from '../assets/icons/target.png'
import EquipmentIcon from '../assets/icons/equipment.png'
import BodyPartIcon from '../assets/icons/body-part.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

    const extraDetail = [
        {name:target , icon:TargetIcon},
        {name:equipment , icon:EquipmentIcon},
        {name:bodyPart , icon:BodyPartIcon},
    ]
    return ( 
        <section className='flex flex-col p-5 lg:flex-row'>
            <div className='flex-1 flex items-center justify-center '>
                <img src={gifUrl} loading='lazy' alt={name} />
            </div>
           
            <div className='flex flex-col items-center lg:items-start flex-1 gap-y-6 text-center lg:text-start pt-11 lg:pt-0'>
                <h1 className='font-bold text-xl capitalize mb-5 text-slate-800 dark:text-slate-300'>{name}</h1>
                <p className='text-slate-800 dark:text-slate-300 text-start lg:text-center'>
                    Exercises keep you strong. <span className='text-primary'>{name}</span> is
                    one of the best exercises to target your <span className='text-primary'>{target}</span>.<br/>
                    it will help you improve your mood and gain energy.
                </p>
                {extraDetail.map(item => (
                    <span key={item.icon} className='flex flex-col gap-y-7 w-40 lg:w-auto pt-5 lg:pt-0'>
                        <div className='flex items-center gap-x-3'>
                            <div className='w-9 h-9 md:w-12 md:h-12'>
                                <img src={item.icon} alt={item.name} 
                                className='w-full h-full object-cover'/>
                            </div>
                            <h2 className='text-slate-800 capitalize dark:text-slate-300'>{item.name}</h2>
                        </div>
                    </span>
                ))}
            </div>
        </section>
     );
}
 
export default Detail;