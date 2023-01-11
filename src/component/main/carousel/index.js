import Carousel from 'react-bootstrap/Carousel';
import {ACCESS_TOKEN, BASE_PATH, IMAGE_PATH} from "../../../utils/constants";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import BGI from '../../../assets/img/Screenshot 2022-12-21 at 0.03.19.png'
import './main.css'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CarouselFadeExample({openModal}) {

    const [popular, setBook] = useState({
        book: {
            id: '098-765-432-1',
            img: '12345678-1234-1234-1234-123456789019',
            title: 'Kiss me Quick',
            subtitle: 'Limited Edition',
            context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                ' sed do eiusmod tempor incididunt ut labore et dolore magna'
        },
        option: 'BOOK FAIR OFFER',
    });

    const getBook = () => {

        axios.get(
            BASE_PATH + "/book/popular",
            {
                headers:
                    {
                        Authorization: localStorage.getItem(ACCESS_TOKEN)
                    }
            }).then(res => {
            setBook(res.data.data);
        }).catch(() => {
            toast.error('something went wrong')
        })
    }

    useEffect(() => {
        // getBook();
    }, [])


    return (
        <Carousel controls={false}
                  // style={{backgroundColor:'red'}}
                  interval={2000} className={'popular'} fade variant={'dark'}>
            <Carousel.Item
                // style={{backgroundColor: 'blue', backgroundImage: 'url(http://localhost)'}}
            >
                {/*<img className="carousel-img " src={popular.bgImg ? popular.bgImg : BGI} alt={"background image"}/>*/}

                <Container
                    // style={{backgroundColor:'yellow'}}
                >
                    <Row style={{ padding: '5% 5%'}}>
                        <Col>
                            <img className={'popular-img'}
                                 // src={BASE_PATH+IMAGE_PATH+popular.book.img}
                                 src={BGI}
                                 alt={'popular book'}/>
                        </Col>

                        <Col xs={7} style={{textAlign: 'left', fontFamily : 'Menlo, Monaco, Consolas, Cantarell, serif'}}>
                            <p className={'option-popular'}>{popular.option}</p>
                            <h1 className={'title'}>{popular.book.title}</h1>
                            <h1 className={'title'}>{popular.book.subtitle}</h1>
                            <p>{popular.book.context}</p>

                            <Button className={'read-btn'} onClick={() => openModal(popular?.book?.id)}>Read more</Button>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;