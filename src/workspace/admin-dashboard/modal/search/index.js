import React from "react";
import Checkbox from "../../../pages/checkbox";
import './main.css'

const SearchModal = ({action, search}) => {

    const style = {
        backgroundColor: '#fff',
        boxShadow: '2px 2px 10px #909090',
        width: '200px',
        borderRadius: '5px',
    }

    const markAll = () => {
        action('all')
    }

    return(
        <div style={style}>
            <div className={'search-tag'}>
                <p>SEARCH IN</p>
                <div className={'checkbox'}>
                    <Checkbox action={() => markAll()} ischecked={search.all}/>
                </div>
            </div>

            <div className={'search-tag tag-2'}>
                <p>TITLE</p>
                <div className={'checkbox-2'}>
                    <Checkbox col={'title'} action={(e) => action(e)} ischecked={search.title}/>
                </div>
            </div>
            <div className={'search-tag tag-2'}>
                <p>NAME</p>
                <div className={'checkbox-2'}>
                    <Checkbox col={'name'} action={(e) => action(e)} ischecked={search.name}/>
                </div>
            </div>
            <div className={'search-tag tag-2'}>
                <p>AUTHOR</p>
                <div className={'checkbox-2'}>
                    <Checkbox col={'author'} action={(e) => action(e)} ischecked={search.author}/>
                </div>
            </div>
            <div className={'search-tag tag-2'}>
                <p>LANGUAGE</p>
                <div className={'checkbox-2'}>
                    <Checkbox col={'language'} action={(e) => action(e)} ischecked={search.language}/>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;