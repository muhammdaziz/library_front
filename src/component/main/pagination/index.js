import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({action, page, active}) => {

    let items = [];

    for (let number = 1; number <= page; number++) {
        items.push(
            <Pagination.Item onClick={() => action(number)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return(
        <Pagination style={{margin: '1% auto', width: 'fit-content'}} size="sm">{items}</Pagination>
    )

}

export default CustomPagination;