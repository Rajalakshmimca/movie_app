import { Button, Tab, Tabs, TextField, ThemeProvider, createTheme } from "@mui/material";
import "./Search.css";
import { useEffect, useState } from "react";
import { grey} from '@mui/material/colors';
import SearchIcon from "@mui/icons-material/Search";
import DisplayContent from "../../Components/DisplayContent/DisplayContent";
import DisplayPagination from "../../Components/Pagination/DisplayPagination";
import axios from "axios";

const Search=()=>{
const [type, setType]=useState(0);
const [searchText, setSearchText]=useState("");
const [page, setPage]=useState(1);
const [content, setContent]=useState([]);
const [totalPages, setTotalPages]=useState();
const theme = createTheme({
    palette: {
    primary: {
    main: grey[50],
    },
    },
});

const fetchSearchShows=async()=>{
    try{
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${
      type ? "tv" : "movie"
    }?api_key=a5a172cece5c99620a60b82ee28232fe&language=en-US&query=${searchText}&page=${page}&include_adult=false
`);
console.log(data);
setContent(data.results);

setTotalPages(data.total_pages);
    }catch(error){
        console.error(error);
    }
};
    
useEffect(()=>{
    window.scroll(0,0);
    fetchSearchShows();
    // eslint-disable-next-line
},[type, page]);
    return(       
        <div>
                
            <ThemeProvider theme={theme}>

                <div className="searchContent">
                    <TextField
                    style={{flex: 1}}
                        className="search"
                        label="Search"
                        type="search"
                        variant="filled"
                        onChange={(e)=> setSearchText(e.target.value)}/>
                
                    <Button 
                    style={{marginLeft: 10}}
                    onClick={fetchSearchShows}
                    variant="contained">
                    <SearchIcon fontSize="large"/>
                    </Button>
                </div>
                    
                <Tabs
                value={type}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, newValue)=>{
                setType(newValue);
                setPage(1);}}
                aria-label="disabled tabs example"
                >
                    <Tab style={{width : "50%"}} label="Search Movies"/>
                    <Tab style={{width : "50%"}} label="Search Tv Series"/>

                </Tabs>
                </ThemeProvider>
                <div className="trending">
                {content && content.map((cont)=>(
                    //console.log(cont);
                    <DisplayContent 
                    key={cont.id} 
                    id={cont.id} 
                    title={cont.title || cont.name} 
                    poster={cont.poster_path}
                    date={cont.first_air_date || cont.release_date}
                    media_type={type?"tv" : "movie"}
                    vote_average={cont.vote_average}/>
                ))}
                {searchText && 
                    !content && 
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
            {totalPages >1 && (<DisplayPagination setPage={setPage} totalPages={totalPages}/>)}
            
                
                
            </div>
        
                            
            
    );
};

export default Search;