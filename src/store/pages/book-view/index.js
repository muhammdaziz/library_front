import React, {useState} from "react";
import {BASE_PATH} from "../../../pages/constants";
import './main.css'
import {DOWNLOAD_PATH, IMAGE_PATH} from "../../../utils/constants";

const BookView = ({book, close}) => {

    return(
        <div className={'book-view'}>
            <div className={'book-view-box'}>
                <img src={BASE_PATH + IMAGE_PATH + book.img} alt={'book image'}/>

                <div className={'book-view-content-box'}>
                    <h1 className={'book-view-title'}>{book.title}</h1>
                    <h3>by {book.author}</h3>
                    {book.price === 0 ? <h3 className={'free'}>free</h3> : ''}
                    <h3>About book</h3>
                    <div className={'text-box'}>
                        <p>{book.context}</p>
                    </div>

                    <div className={'book-view-control-books'}>
                        <a className={'btn book-view-control-btn download'} download href={BASE_PATH + DOWNLOAD_PATH + book.path}>DOWNLOAD</a>
                        <button className={'btn book-view-control-btn copy'}>COPY DOWNLOAD LINK</button>
                        <button className={'btn book-view-control-btn cancel'} onClick={close}>CANCEL</button>
                    </div>
                </div>

                <svg className={'book-view-close-btn'} onClick={close}
                     width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.166016 5.9974C0.166016 2.77573 2.77769 0.164062
                        5.99935 0.164062C7.54645 0.164062 9.03018 0.778644 10.1241 1.87261C11.2181 2.96657 11.8327 4.4503
                         11.8327 5.9974C11.8327 9.21906 9.22101 11.8307 5.99935 11.8307C2.77769 11.8307 0.166016 9.21906
                          0.166016 5.9974ZM7.75247 7.1628C7.75247 7.00726 7.69035 6.85817 7.57992 6.74864L6.82159 5.99614L7.57992
                           5.24364C7.80866 5.0149 7.80866 4.64404 7.57992 4.4153C7.35118 4.18657 6.98032 4.18657 6.75159 4.4153L5.99909
                            5.17364L5.24659 4.4153C5.01785 4.18657 4.64699 4.18657 4.41825 4.4153C4.18951 4.64404 4.18951 5.0149 4.41825
                             5.24364L5.17659 5.99614L4.41825 6.74864C4.30782 6.85817 4.2457 7.00726 4.2457 7.1628C4.2457 7.31834 4.30782
                              7.46744 4.41825 7.57697C4.52778 7.6874 4.67688 7.74952 4.83242 7.74952C4.98796 7.74952 5.13705 7.6874 5.24659
                               7.57697L5.99909 6.81864L6.75159 7.57697C6.86112 7.6874 7.01021 7.74952 7.16575 7.74952C7.32129 7.74952 7.47039
                                7.6874 7.57992 7.57697C7.69035 7.46744 7.75247 7.31834 7.75247 7.1628Z" fill="#FF4842"/>
                    </svg>
            </div>
        </div>
    )
}

export default BookView;