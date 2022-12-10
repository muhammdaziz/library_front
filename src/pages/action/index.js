import React, {useState} from "react";
import axios from "axios";
import './main.css'
import Button from "../btn";
import EditModal from "../modal/edit";
import {BASE_PATH, TOKEN} from "../constants";

const Action = ({book}) => {

    const [editing, setEditing] = useState(false);

    const [oldBook] = useState(book);

    const deleteBook = (e) => {
        alert(e);
        axios.delete(
             BASE_PATH+ '/api/book/' + e,
            {
                headers:
                    {
                        Authorization: TOKEN
                    }
            }).then(res => {
                alert(res.data.message)
        })
    }

    const editBook = () => {
        setEditing(!editing);
    }

    return(
        <div className={'action-box'}>
            <Button
                fontSize={'12px'}
                color={'rgb(167, 69, 68)'}
                title={'DELETE'}
                bgc={'rgb(242, 222, 222)'}
                action={() => deleteBook(book.id)}/>
            <Button
                fontSize={'12px'}
                color={'rgb(137, 108, 63)'}
                title={'EDIT'}
                bgc={'rgb(252, 248, 228)'}
                action={() => editBook(book.id)}/>

            {editing ? <EditModal adding={false} editing={() => setEditing()} book={oldBook}/> : ''}
        </div>
    )
}

export default Action;