import React from "react";
import './main.css'
import EditBookCard from "../../editCardView";

const EditModal = ({book, editing}) => {

    return(
        <div className={'edit-modal-box'}>
            <div className={'edit-modal'}>
                <h2>EDIT {book.title}</h2>
                <EditBookCard editing={() => editing()} book={book}/>
            </div>
        </div>
    )
}

export default EditModal;