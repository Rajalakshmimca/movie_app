import { Pagination } from "@mui/material";

const DisplayPagination=({setPage, totalPages=10})=>{

    const handleChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return(
        <div
        style={{width : "100%",
                    display : "flex",
                    justifyContent : "center",
                    marginTop : "5px",
                    }}>
            <Pagination 
            count={totalPages} onChange={(e)=>handleChange(e.target.textContent)}
            color="primary"/>
        </div>
    );
}

export default DisplayPagination;