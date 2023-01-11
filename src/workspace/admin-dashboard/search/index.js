import React, {useState} from "react";
import './main.css'
import SearchModal from "../modal/search";

const SearchHeader = () => {

    const [searching, setSearching] = useState(false);

    const style = {
        // borderTop: 'rgb(36, 41, 47) solid 2px',
        height: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 7fr',
        padding: '10px 0',
        position: 'relative'
    }

    function openModal(searching) {
        setSearching(!searching);
    }

    const setProp = (e) => {
        search[e] = !search[e]
    }

    const search = {
        all: false,
        title : false,
        author : false,
        language : false,
        context : false
    }

    const c = () => {
      console.log(search)
    }

    return(
        <div style={style}>
            <div className={'search-box'}>
                <button className={'search-btn'}>
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1792 12.2399C10.1632 13.0297 8.88653 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 8.88653 13.0297 10.1632 12.2399 11.1792L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1792 12.2399ZM12 7.5C12 9.98528 9.98528 12 7.5 12C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3C9.98528 3 12 5.01472 12 7.5Z" fill="rgba(36,41,47,0.64)"/>
                    </svg>
                </button>
                <div>
                    <input type={"text"} placeholder={'Search...'} onChange={() => c()}/>
                </div>
                <div className={'modal-search'}>
                    <button className={'search-btn'} onClick={() => openModal(searching)}>
                        <svg width="35" height="35" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.49998L9 10.5L12 7.49998" stroke="rgba(36,41,47,0.64)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className={'search-box-modal'}>
                        {
                            searching ? <SearchModal search={search} action={(e) => setProp(e)}/> : <></>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchHeader;