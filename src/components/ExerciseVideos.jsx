/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ExerciseVideos = ({exerciseVideos , name}) => {
    // eslint-disable-next-line react/prop-types
    if (!exerciseVideos.length) return 'Loader...';
    return ( 
        <section className="p-5 py-11">
            <h2 className="text-xl font-bold text-slate-800 py-11 dark:text-slate-300">watch <span className="text-secondary">{name}</span> exercise videos</h2>
            
            <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-self-center justify-evenly gap-y-5 md:gap-y-9 md:gap-x-3 items-center">
                {exerciseVideos?.slice(0,4).map((item , index) => (
                    <a key={index} 
                        className="shadow-sm shadow-secondary dark:shadow-primary dark:shadow-sm rounded-md pb-3 w-[290px] h-[320px] justify-self-center flex items-center flex-col overflow-hidden" 
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank" rel="noreferrer">

                        <div className="w-full h-auto p-2">
                            <img className="w-full h-full object-cover rounded-md " src={item.video.thumbnails[0].url} alt={item.video.title} />
                        </div>

                        <h5 className="text-secondary dark:text-primary p-3 text-center">{item.video.title}</h5>
                        <h5 className="text-slate-800 dark:text-slate-300 mt-5">{item.video.channelName}</h5>
                    </a>
                ))}
            </div>
           
        </section>
     );
}
 
export default ExerciseVideos;