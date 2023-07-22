const ExerciseVideos = ({exerciseVideos , name}) => {
    if (!exerciseVideos.length) return 'Loader...';
    return ( 
        <section>
            <h2>watch <span className="text-secondary">{name}</span> exercise videos</h2>

            <div className="flex flex-wrap w-full justify-evenly items-center">
                {exerciseVideos?.slice(0,3).map((item , index) => (
                    <a key={index}  
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank" rel="noreferrer">

                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />

                        <h5>{item.video.title}</h5>
                        <h5 className="text-red-500 mt-5">{item.video.channelName}</h5>
                    </a>
                ))}
            </div>
           
        </section>
     );
}
 
export default ExerciseVideos;