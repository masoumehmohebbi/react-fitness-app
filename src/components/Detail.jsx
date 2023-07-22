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
        <section className='flex p-5'>
            <div className='flex-1 flex items-center justify-center '>
                <img src={gifUrl} loading='lazy' alt={name} />
            </div>
           
            <div className='flex flex-col flex-1 gap-y-6'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <p>
                    Exercises keep you strong. <span className='text-primary'>{name}</span> is
                    one of the best exercises to target your <span className='text-primary'>{target}</span>.<br/>
                    it will help you improve your mood and gain energy.
                </p>
                {extraDetail.map(item => (
                    <span key={item.icon} className='flex flex-col'>
                        <h2>{item.name}</h2>
                        <div className='w-12 h-12'>
                            <img src={item.icon} alt={item.name} 
                            className='w-full h-full object-cover'/>
                        </div>
                    </span>
                ))}
            </div>
        </section>
     );
}
 
export default Detail;