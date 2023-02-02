import "./style/SearchBar.css";
import GoTo from "./assets/GoTo.svg";
import Search from "./assets/Search.svg"
import React, {useState} from "react";

function SearchBar(){
    const [searchValue,setSearchValue] = useState("")
    return(
        <div id="search">
            <span className="title">
                {/*<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"*/}
                {/*     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"*/}
                {/*     style={{width:"100px",height:"100px",display:"block",float:"left"}}>*/}
                {/*<path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>*/}
                {/*</svg>*/}
                {/*<span style={{display:"block",float:"left",marginTop:"5px"}}>GoTo</span>*/}
                <img src={GoTo} style={{display:"block",float:"left",marginTop:"5px",height:"90px",userSelect:"none"}}/>
            </span>
            <div className="search">
                <img src={Search} style={{maxHeight:"20px",maxWidth:"20px",marginLeft:"20px"}}></img>
                <input className="searchInputBox" onInput={(event:React.ChangeEvent<HTMLInputElement>)=>{setSearchValue(event.target.value)}} value={searchValue} placeholder="输入要搜索的内容"/>
            </div>
        </div>
    )
}

export default SearchBar;