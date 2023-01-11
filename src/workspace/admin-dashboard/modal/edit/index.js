import React from "react";
import './main.css'
import EditBookCard from "../../modules/book/book-view/createEditPage";

const EditModal = ({book, editing, adding}) => {

    return(
        <div className={'edit-modal-box'}>
            <div className={'edit-modal'}>
                {adding ?
                    <h2>ADD NEW BOOK</h2>
                :
                    <h2>EDIT {book?.title}</h2>}
                <EditBookCard editing={() => editing()} book={book} adding={adding}/>
            </div>
        </div>
    )
}

export default EditModal;