import React from "react";
import './main.css'
import Book from "../../../pages/book";

const GridView = ({columns, books, openEditModule}) => {

    return(

        <div className={'grid'}>
            <table>
                <thead>
                    <tr>
                        <th><p>#</p></th>
                        {columns?.map((column, index) =>
                            <th key={index}><p>{column}</p></th>
                        )}
                        <th><p>ACTION</p></th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((book, index) =>
                        <Book
                            openEditModule={openEditModule}
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