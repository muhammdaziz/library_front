import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import prf from '../../../assets/img/user-logo.jpeg'
import './main.css'
import {ListGroup} from "react-bootstrap";
import {ACCESS_TOKEN} from "../../../utils/constants";

function PopoverPositionedExample({user}) {

    const signOut = () => {
        localStorage.removeItem(ACCESS_TOKEN);
    }

    return (
        <>
            <OverlayTrigger
                trigger="click"
                key={'bottom'}
                placement={'bottom'}
                overlay={
                <Popover className={'overlay-box'} id={`popover-positioned-bottom`}>
                    <Popover.Header as="h3">Signed in as <strong>{user?.username}</strong></Popover.Header>
                    <Popover.Body>
                            <ListGroup.Item action href="/user/${user.username}`">
                                Your profile
                            </ListGroup.Item>
                            <ListGroup.Item className={'profile-list'} action href="#link2">
                                Help
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Setting
                            </ListGroup.Item>
                    </Popover.Body>
                    <Popover.Header as={'h3'}>
                        <ListGroup.Item action onClick={signOut}>
                            Sign out
                        </ListGroup.Item>
                    </Popover.Header>
                </Popover>
            }
            >
                <Button variant={'none'} className={'profile-btn'}>
                    <img src={prf} alt={'avatar'}/>
                    <svg width="25" height="25" viewBox="0 -2 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7.49998L9 10.5L12 7.49998" stroke="rgb(190, 191, 193)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
            </OverlayTrigger>
        </>
    );
}

export default PopoverPositionedExample;