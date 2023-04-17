import "./Trending.css"
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayContent from "../../Components/DisplayContent/DisplayContent";
import DisplayPagination from "../../Components/Pagination/DisplayPagination";

const Trending=()=>{
    const [content, setContent]=useState([]);
    const [page, setPage]=useState(1);
    
    const fetchTrending=async()=>{
        const { data } =
        await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a5a172cece5c99620a60b82ee28232fe
`);

console.log(data.results);
setContent(data.results);

console.log(content);
    };

    useEffect(()=>{
        window.scroll(0,0);
        fetchTrending();
        // eslint-disable-next-line
    },[page]);
    return(
        <div>
            <div className="displayTitle">
                <span>Trending</span>
            </div>
            
            <div className="trending">
                {content && content.map((cont)=>(
                    //console.log(cont);
                    <DisplayContent 
                    key={cont.id} 
                    id={cont.id} 
                    title={cont.title || cont.name} 
                    poster={cont.poster_path}
                    date={cont.first_air_date || cont.release_date}
                    media_type={cont.media_type}
                    vote_average={cont.vote_average}/>
                ))}
            </div>
            <DisplayPagination setPage={setPage}/>
        </div>
    );
}

export default Trending;
