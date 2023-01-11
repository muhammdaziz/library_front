import React from "react";

const AddBtn = ({openAddModule}) => {
    return(
        <button onClick={() => openAddModule('book-add')} className={'action-btn'}>
            <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.99999 1.66406C5.99999 1.11178 5.55227 0.664062 4.99999 0.664062C4.44771 0.664062 3.99999 1.11178 3.99999 1.66406V3.9974H1.66666C1.11437 3.9974 0.666656 4.44511 0.666656 4.9974C0.666656 5.54968 1.11437 5.9974 1.66666 5.9974H3.99999V8.33073C3.99999 8.88301 4.44771 9.33073 4.99999 9.33073C5.55227 9.33073 5.99999 8.88301 5.99999 8.33073V5.9974H8.33332C8.88561 5.9974 9.33332 5.54968 9.33332 4.9974C9.33332 4.44511 8.88561 3.9974 8.33332 3.9974H5.99999V1.66406Z" fill="#ffffff"/>
            </svg>
        </button>
    )
}

export default AddBtn;