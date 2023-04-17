import axios from "axios";
import DisplayContent from "../../Components/DisplayContent/DisplayContent";
import { useEffect, useState } from "react";
import DisplayPagination from "../../Components/Pagination/DisplayPagination";

const TvSeries=()=>{

    const [page, setPage]=useState(1);
    const [content, setContent]=useState([]);
    const [totalPages, setTotalPages]=useState();

    const fetchMovies=async()=>{
        const { data } =
    await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=a5a172cece5c99620a60b82ee28232fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate

`);
console.log(data);
console.log(data.results);
setContent(data.results);
console.log(content);
setTotalPages(data.total_pages);
    }

    useEffect(()=>{
        fetchMovies();
    },[page]);
    return(
        <div>
            <span className="displayTitle">TvSeries</span>
            <div className="trending">
                {content && content.map((cont)=>(
                    //console.log(cont);
                    <DisplayContent 
                    key={cont.id} 
                    id={cont.id} 
                    title={cont.title || cont.name} 
                    poster={cont.poster_path}
                    date={cont.first_air_date || cont.release_date}
                    media_type="tv"
                    vote_average={cont.vote_average}/>
                ))}
            </div>
            {totalPages>1 &&(
                <DisplayPagination setPage={setPage} totalPages={totalPages}/>
            )}
        </div>
    );
}

export default TvSeries;