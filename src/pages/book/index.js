import React from "react";
import './main.css'
import Action from "../action";
import {BASE_PATH} from "../constants";

const Book = ({book, index}) => {
    return(
            <tr key={index}>
                <th><p>{index}</p></th>
                <td><p>{book.title}</p></td>
                <td><p>{book.author}</p></td>
                <td><p>{book.language}</p></td>
                <td><p>{book.context}</p></td>
                <td><p>{book.price===0 ? 'free' : book.price+' $'}</p></td>
                <td>
                    <div className={'book-img-box'}>
                        <img src={BASE_PATH + book.img} alt={'img'}/>
                    </div>
                </td>
                <td><p>{book.path}</p></td>
                <td>
                    <Action book={book}/>
                </td>
            </tr>
    )
}

export default Book;