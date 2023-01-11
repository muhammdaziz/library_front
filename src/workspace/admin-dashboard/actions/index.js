import React from "react";
import './main.css'
import Search from "../search";
import AddBtn from "../add-btn";

const Actions = ({openAddModule}) => {

    const style = {
        padding: '5px 30px 0',
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        borderTop: 'rgb(36, 41, 47) solid 2px',
    }

    return(
        <div style={style}>
            <Search/>
            <AddBtn openAddModule={openAddModule}/>
            {/*<button className={'action-btn'}>*/}
            {/*    <svg width="25" height="23" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M8.5 6.36215H17.6705" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        <path d="M17.6705 10.995H8.5" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        <path d="M8.5 15.6356H17.6705" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        <path d="M4.74692 5.94531C4.5167 5.94531 4.33008 6.13194 4.33008 6.36215C4.33008 6.59237 4.5167 6.77899 4.74692 6.77899C4.97713 6.77899 5.16376 6.59237 5.16376 6.36215C5.16376 6.13194 4.97713 5.94531 4.74692 5.94531" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        <path d="M4.74692 10.5781C4.5167 10.5781 4.33008 10.7648 4.33008 10.995C4.33008 11.2252 4.5167 11.4118 4.74692 11.4118C4.97713 11.4118 5.16376 11.2252 5.16376 10.995C5.16376 10.7648 4.97713 10.5781 4.74692 10.5781" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        <path d="M4.74692 15.2188C4.5167 15.2188 4.33008 15.4054 4.33008 15.6356C4.33008 15.8658 4.5167 16.0524 4.74692 16.0524C4.97713 16.0524 5.16376 15.8658 5.16376 15.6356C5.16376 15.4054 4.97713 15.2188 4.74692 15.2188" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*    </svg>*/}
            {/*</button>*/}
        </div>
    )
}

export default Actions;