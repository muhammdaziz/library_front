import ListGroup from 'react-bootstrap/ListGroup';

function LinkedExample({pages, changeModule}) {

    return (
        <ListGroup variant={"flush"} style={{padding: '0', borderRadius: '5px', height: "fit-content"}} defaultActiveKey={"#"+pages[0]}>
            {pages.map((page, index) =>
                <ListGroup.Item key={index} as={"button"} variant={"secondary"}  action href={"#"+page} onClick={() => changeModule(page.toLowerCase())}>
                    {page}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
}

export default LinkedExample;