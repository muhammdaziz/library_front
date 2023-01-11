import Card from 'react-bootstrap/Card';
import IMG from '../../../assets/img/Screenshot 2022-12-21 at 0.03.19.png'
import {useState} from "react";
import './main.css'
import DiscountRow from "../discount-row";

const BookCard = ({openModal}) => {

    const book = {
        id: '098-765-543-321',
        title: 'react tutorial for java developers',
        price: '50',
        content: 'lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet',
        author: {
            name: 'mosh hamedani',
        },
        offer: 'read this conersational book by social media',
        discount: {
            percent: '20',
            price: '23'
        }
    }

    const [focus, setFocus] = useState({transform: '1'})

    const hover = () => {
        setFocus({transform: 'scale(1.1)'})
    }
    const leave = () => {
        setFocus({transform: 'scale(1)'})
    }

    return (
        <Card className={'custom-card'} border={'light'} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Subtitle style={{color: '#909090', marginBottom: '5px'}}>{book.author.name}</Card.Subtitle>

                <Card.Title>{book.offer}</Card.Title>


                <Card.Img onClick={() => openModal(book?.id)} className={'card-image'} style={focus} variant="top" onMouseOver={hover} onMouseLeave={leave} src={IMG} />

                <DiscountRow book={book} padding={'0, 7%'} marginTop={'5%'}/>
            </Card.Body>
        </Card>
    );
}

export default BookCard;