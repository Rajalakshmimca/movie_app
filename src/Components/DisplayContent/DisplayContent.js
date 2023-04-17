import { img_300, unavailable } from "../../config/config"
import "./DisplayContent.css";
import {Badge} from "@mui/material";
const DisplayContent=({id, title, poster, media_type, date, vote_average})=>{
    return(
        <div className="posterContent">
            <Badge badgeContent={vote_average} color={vote_average>6? "primary" : "secondary"}/>
            <img className="posterImg" src={poster?`${img_300}${poster}` : unavailable} alt={title}/>
            <b className="mainTitle">{title}</b>
            <div className="titleType">
                <span>{media_type==="tv"? "Tv Series" : "Movie"}</span>
                <span>{date}</span>

            </div>
                    </div>


    );
};

export default DisplayContent;