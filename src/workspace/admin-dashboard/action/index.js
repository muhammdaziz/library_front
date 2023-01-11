import React, {useState} from "react";
import axios from "axios";
import './main.css'
import Button from "../../pages/btn";
import {ACCESS_TOKEN, BASE_PATH} from "../../../utils/constants";
import CreateEdit from "../modules/book/book-view";

const Action = ({book, openEditModule}) => {

    const [editing, setEditing] = useState(false);

    const [oldBook] = useState(book);

    const deleteBook = (e) => {
        alert(e);
        axios.delete(
             BASE_PATH+ 'book/' + e,
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
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
                action={() => deleteBook(book?.id)}/>
            <Button
                fontSize={'12px'}
                color={'rgb(137, 108, 63)'}
                title={'EDIT'}
                bgc={'rgb(252, 248, 228)'}
                action={() => openEditModule('book-edit')}/>

            {editing ? <CreateEdit creating={false} editing={() => setEditing} book={oldBook}/> : ''}
        </div>
    )
}

export default Action;