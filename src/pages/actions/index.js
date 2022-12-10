import React, {useState} from "react";
import './main.css'
import EditModal from "../modal/edit";

const Actions = () => {

    const style = {
        padding: '5px 30px 0',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderTop: 'rgb(134, 174, 232) solid 2px',
    }

    const [adding, setAdding] = useState(false);

    const openModel = () => {
        setAdding(!adding);
    }

    return(
        <div style={style}>
            <button onChange={() => openModel(adding)} className={'action-btn'}>
                <svg width="25" height="25" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.99999 1.66406C5.99999 1.11178 5.55227 0.664062 4.99999 0.664062C4.44771 0.664062 3.99999 1.11178 3.99999 1.66406V3.9974H1.66666C1.11437 3.9974 0.666656 4.44511 0.666656 4.9974C0.666656 5.54968 1.11437 5.9974 1.66666 5.9974H3.99999V8.33073C3.99999 8.88301 4.44771 9.33073 4.99999 9.33073C5.55227 9.33073 5.99999 8.88301 5.99999 8.33073V5.9974H8.33332C8.88561 5.9974 9.33332 5.54968 9.33332 4.9974C9.33332 4.44511 8.88561 3.9974 8.33332 3.9974H5.99999V1.66406Z" fill="rgb(134, 174, 232)"/>
                </svg>
                <p>ADD BOOK</p>
            </button>
            <button className={'action-btn'}>
                <svg width="25" height="23" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 6.36215H17.6705" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.6705 10.995H8.5" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 15.6356H17.6705" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.74692 5.94531C4.5167 5.94531 4.33008 6.13194 4.33008 6.36215C4.33008 6.59237 4.5167 6.77899 4.74692 6.77899C4.97713 6.77899 5.16376 6.59237 5.16376 6.36215C5.16376 6.13194 4.97713 5.94531 4.74692 5.94531" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.74692 10.5781C4.5167 10.5781 4.33008 10.7648 4.33008 10.995C4.33008 11.2252 4.5167 11.4118 4.74692 11.4118C4.97713 11.4118 5.16376 11.2252 5.16376 10.995C5.16376 10.7648 4.97713 10.5781 4.74692 10.5781" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.74692 15.2188C4.5167 15.2188 4.33008 15.4054 4.33008 15.6356C4.33008 15.8658 4.5167 16.0524 4.74692 16.0524C4.97713 16.0524 5.16376 15.8658 5.16376 15.6356C5.16376 15.4054 4.97713 15.2188 4.74692 15.2188" stroke="rgb(134, 174, 232)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>SHOW BOOKS</p>
            </button>
            <button className={'action-btn'}>
                <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84909 8.52574C8.93771 8.61436 8.93771 8.75804 8.84909 8.84665C8.76048 8.93527 8.6168 8.93527 8.52819 8.84665C8.43957 8.75804 8.43957 8.61436 8.52819 8.52574C8.6168 8.43713 8.76048 8.43713 8.84909 8.52574" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.22567 5.76512L9.88758 5.75054C10.1973 5.74762 10.4954 5.87012 10.7147 6.08887L15.9088 11.2852C16.3643 11.7408 16.3643 12.4799 15.9088 12.9355L12.9372 15.9087C12.4817 16.3649 11.742 16.3649 11.2864 15.9087L6.08833 10.7089C5.87192 10.4925 5.75 10.1985 5.75 9.89162V8.25129C5.75 7.94446 5.87192 7.65046 6.08833 7.43404L7.41833 6.10346C7.633 5.88879 7.92292 5.76746 8.22567 5.76512Z" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="11" cy="11" r="10.6" stroke="#B1B5C3" strokeWidth="0.8" strokeLinejoin="round" strokeDasharray="3 3"/>
                </svg>
                <p>AAAAAAA</p>
            </button>
            <button className={'action-btn'}>
                <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4292 13.4097C15.861 13.8414 15.861 14.5414 15.4292 14.9731L14.9734 15.429C14.5416 15.8607 13.8417 15.8607 13.41 15.429L5.572 7.59103C5.14028 7.1593 5.14028 6.45934 5.572 6.02761L6.02787 5.57175C6.45959 5.14002 7.15956 5.14002 7.59128 5.57175L15.4292 13.4097Z" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0011 2.99805V4.49867" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.7516 3.7482H11.251" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.74771 11.25V12.7506" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.49818 12.0011H2.99756" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.99723 2.24707V3.7477" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.7477 2.99723H2.24707" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.63086 8.64995L8.64995 6.63086" stroke="rgb(134, 174, 232)" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>BBBBBBB</p>
            </button>
            {adding ? <EditModal editing={() => openModel()} adding={true}/> : ''}
        </div>
    )
}

export default Actions;