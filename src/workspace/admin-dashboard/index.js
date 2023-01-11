import React, {useState} from "react";
import Bar from "./bar/side-bar";
import {ACCESS_TOKEN} from "../../utils/constants";
import {Navigate} from "react-router-dom";
import BookList from "./modules/book";
import Home from "../pages/home";
import './main.css'
import BookModal from "./modules/book/book-view";
import View from "./modules/book/book-view/view";

const AdminDashboard = ({user}) => {

    const main = {
        width: '100%',
        overflow: 'hidden'
    }

    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    }

    const [currentModule, setCurrentModule] = useState('home');

    const [data, setData] = useState();

    const changeModule = (key, data) => {
        setCurrentModule(key);
        setData(data)
    }

    const modules = [
        {
            key: 'book',
            src: <BookList edit={() => changeModule('book-edit')} create={() => changeModule('book-add')}/>
        },
        {
            key: 'book-add',
            src: <BookModal changeModule={() => changeModule('book')} creating={true}/>
        },
        {
            key: 'book-edit',
            src: <BookModal changeModule={() => changeModule('book')} creating={false} book={data}/>
        },
        {
            key: 'book-a',
            src: <View changeModule={() => changeModule('book')} creating={true}/>
        },
        {
            key: 'home',
            src: <Home/>
        }
        ];

    const switchModule = (condition) => {
        return modules
            .filter(m => m.key === condition)
            .map((module, index) => <div className={"dashboard-box"} key={index}>
                {module?.src}
            </div>)
    }

    if (!localStorage.getItem(ACCESS_TOKEN))
        return <Navigate to={'/sign'}/>

    return (
        <div style={main}>
            <div style={style}>
                <Bar user={user} changeModule={(i) => changeModule(i)}/>

                {switchModule(currentModule)}
            </div>
        </div>
    )
}

export default AdminDashboard;