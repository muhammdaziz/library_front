import React from "react";
import './main.css'
import Book from "../book";

const GridView = (data) => {

    const columns = {
        title: "TITLE",
        author: "AUTHOR",
        language: "LANGUAGE",
        context: "CONTEXT",
        price: "PRICE",
        img: "IMAGE",
        path: "DOWNLOAD URL"
    }


    return(

        <div className={'grid'}>
            <table>
                <thead>
                    <tr>
                        <th><p>#</p></th>
                        <th><p>{columns.title}</p></th>
                        <th><p>{columns.author}</p></th>
                        <th><p>{columns.language}</p></th>
                        <th><p>{columns.context}</p></th>
                        <th><p>{columns.price}</p></th>
                        <th><p>{columns.img}</p></th>
                        <th><p>{columns.path}</p></th>
                        <th><p>ACTION</p></th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((book, index) =>
                        <Book
                            key={index}
                            book={book}
                            index={index}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default GridView;