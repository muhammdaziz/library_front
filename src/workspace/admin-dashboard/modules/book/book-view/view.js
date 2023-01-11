import React, {useState} from "react";
import {ACCESS_TOKEN, BASE_PATH} from "../../../../../utils/constants";
import Button from "../../../../pages/btn";
import axios from "axios";
import './main.css'

const View = ({book, changeModule, creating}) => {

    const save = () => {

        book.image = img;

        axios.put(
            BASE_PATH + 'book',
            {
                book
            },
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            alert(res.data.message)
        })
    }

    const [img, setImg] = useState();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            book.file = (URL.createObjectURL(event.target.files[0]));
        }
    }

    return(
        <div className={'editBookCard'}>
            <div className={'img-box'}>
                <img src={img ? img : BASE_PATH + book?.img} style={img ? {} : {height: '40vh'}} alt={'img'}/>

                <div className={'file-upload-box'}>
                    <label useref={'image'}>IMAGE</label>
                    <label useref={'file'}>FILE</label>
                    <input name={'image'} type={'file'} required={creating} onChange={onImageChange}/>
                    <input name={'file'} type={'file'} required={creating} onChange={onFileChange}/>
                </div>
            </div>

            <div className={'editBookContent'}>
                <div className={'input-box'}>
                    <label useref={'title'}>Title</label>
                    <input name={'title'} placeholder={'Title'} className={'title'} defaultValue={book?.title} required onChange={e => book.title = e.target.value}/>
                </div>

                <div className={'content-box'}>
                    <div className={'input-box'}>
                        <label useref={'title'}>Title</label>
                        <input placeholder={'Language'} className={'italic'} defaultValue={book?.language} required onChange={e => book.language = e.target.value}/>
                    </div>
                    <div className={'input-box'}>
                        <label useref={'title'}>Title</label>
                        <input className={'price'} type={'number'} required defaultValue={book?.price} onChange={e => book.price = e.target.value}/>
                        <p className={'dollar'}>$</p>
                    </div>
                </div>
                <textarea defaultValue={book?.context} required onChange={e => book.context = e.target.value}/>
                <br/>
                <br/>
                <br/>

                <div className={'control-box'}>
                    <Button
                        title={'SAVE'}
                        action={() => save()}
                        color={'rgb(62, 117, 63)'}
                        bgc={'rgb(223, 240, 217)'}
                    />
                    <Button
                        title={'CANCEL'}
                        action={changeModule}
                        color={'rgb(137, 108, 63)'}
                        bgc={'rgb(252, 248, 228)'}
                    />
                </div>
            </div>
        </div>
    )
}

export default View;