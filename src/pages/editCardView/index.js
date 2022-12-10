import React, {useState} from "react";
import './main.css'
import Button from "../btn";
import axios from "axios";
import {BASE_PATH, TOKEN} from "../constants";

const EditBookCard = ({book, editing, adding}) => {

    const [title, setTitle] = useState(book?.title)
    const [author, setAuthor] = useState(book?.author)
    const [language, setLanguage] = useState(book?.language)
    const [context, setContext] = useState(book?.context)
    const [price, setPrice] = useState(book?.price)
    const [img, setImg] = useState()
    const [file, setFile] = useState()

    const save = () => {
        axios.put(
            BASE_PATH + '/api/book',
            {
                id: book.id,
                title,
                author,
                language,
                context,
                price,
                image: img,
                file
            },
            {
                headers:
                    {
                        Authorization: TOKEN
                    }
            }).then(res => {
                alert(res.data.message)
        })
    }
    
    const cancel = () => {
        editing(false);
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFile(URL.createObjectURL(event.target.files[0]));
        }
    }

    return(
            <div className={'editBookCard'}>
                <div>
                    <input className={'title'} defaultValue={title} required onChange={e => setTitle(e.target.value)}/>
                    <input defaultValue={author} required onChange={e => setAuthor(e.target.value)}/>
                    <div>
                        <input defaultValue={language} required onChange={e => setLanguage(e.target.value)}/>
                        <textarea defaultValue={context} required onChange={e => setContext(e.target.value)}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className={'img-box'}>
                    <img src={img ? img : BASE_PATH + book.img} alt={'img'}/>
                    <label ref={'image'}>IMAGE</label>
                    <input name={'image'} type={'file'} required={adding} onChange={onImageChange}/>
                    <label ref={'file'}>FILE</label>
                    <input name={'name'} type={'file'} required={adding} onChange={onFileChange}/>
                </div>
                <div className={'control-box'}>
                    <input className={'price'} type={'number'} required defaultValue={price} onChange={e => setPrice(e.target.value)}/>
                    <p className={'dollar'}>$</p>
                    <Button
                        title={'SAVE'}
                        action={() => save()}
                        color={'rgb(62, 117, 63)'}
                        bgc={'rgb(223, 240, 217)'}
                    />
                    <Button
                        title={'CANCEL'}
                        action={() => cancel()}
                        color={'rgb(137, 108, 63)'}
                        bgc={'rgb(252, 248, 228)'}
                    />
                </div>
            </div>
    )
}

export default EditBookCard;