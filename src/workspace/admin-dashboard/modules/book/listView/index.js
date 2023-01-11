import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {ACCESS_TOKEN, BASE_PATH} from "../../../../../utils/constants";
import GridView from "../../../gridView";

const ListView = ({openEditModule}) => {

    const columns = [
        "TITLE",
        "AUTHOR",
        "LANGUAGE",
        "CONTEXT",
        "PRICE",
        "IMAGE",
        "DOWNLOAD URL"]

    const [categories, setCategories] = useState([
        {
            id: '1',
            name: 'All'
        },
        {
            id: '2',
            name: 'Fantasy'
        },
        {
            id: '3',
            name: 'Literature'
        },
        {
            id: '4',
            name: 'History'
        },
        {
            id: '5',
            name: 'Art'
        },
        {
            id: '6',
            name: 'Recourse'
        }]);

    const page = {
        page: 0,
        size: 4
    }

    const style = {
        padding: '10px 40px'
    }

    const [books, setBook] = useState({

        list: [{
            title: 'aaaa',
            author: 'aaaa',
            language: 'aaaa',
            context: 'aaaa',
            price: 'aaaa',
            img: '11',
            url: '11',}]
    });

    const getBooks = () => {
        axios.get(
            BASE_PATH + "/book/"+page.page+"/"+page.size+"/-1",
            {
                    headers:
                        {
                            Authorization: localStorage.getItem(ACCESS_TOKEN)
                        }
                })
            .then(res => {
                setBook(res.data.data)
            })
            .catch(err => {
                    toast.error(err.response.data.errors[0].msg);
                })
    }

    // useEffect(() => {
    //     getBooks();
    // }, [])

    return(
        <div style={style}>
            <GridView
                openEditModule={openEditModule}
                books={books?.list}
                columns={columns}
            />
        </div>
    )
}

export default ListView;