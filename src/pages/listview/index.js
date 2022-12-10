import React, {useEffect, useState} from "react";
import SearchHeader from "../search";
import ListBox from "../listbox";
import axios from "axios";
import {BASE_PATH, TOKEN} from "../constants";

const ListView = () => {

    const style = {
        padding: '10px 40px'
    }

    const [books, setBook] = useState([]);

    const getBooks = () => {
        axios.get(
            BASE_PATH + "/api/book/list",
            {
                    headers:
                        {
                            Authorization: TOKEN
                        }
                }).then(res => {
            setBook(res.data.data)
        })
    }

    useEffect(() => {
        getBooks();
    }, [])

    return(

        <div style={style}>
            <div>
                <SearchHeader/>

                <ListBox data={books} columns={books.keys()}/>
            </div>
        </div>
    )
}

export default ListView;