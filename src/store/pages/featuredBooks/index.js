import React, {useEffect, useState} from "react";
import './main.css'
import BookCardViewBox from "../book-card-view-box";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils/constants";
import {toast} from "react-toastify";

const FeaturedBooks = () => {

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

    const [books, setBook] = useState([]);

    const page = {
        page: 0,
        size: 4
    }

    const getBooks = (categoryId) => {

        axios.get(
            BASE_PATH + "/api/book/list/"+page.page+"/"+page.size+"/"+categoryId,
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setBook(res.data.data)
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    const getCategories = () => {

        axios.get(
            BASE_PATH + "/api/category/list/",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setCategories(res.data.data)
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    useEffect(() => {
        getCategories();
        getBooks(-1);
    }, [])

    const style = {
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
    }

    return(
        <div className={'featured-book-box'}>
            <h1>Featured Books</h1>

            <div className={'category-box'}>
                {categories.map((category) =>
                    <button onClick={() => getBooks(category.id)} className={'featured-book-box-btn btn'} key={category.id}>
                        {category.name}
                    </button>
                )}
            </div>

            <BookCardViewBox books={books} style={style}/>

        </div>
    )
}

export default FeaturedBooks;