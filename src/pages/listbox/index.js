import React from "react";
import GridView from "../gridView";
// import CardView from "../cardView";

const ListBox = (props) => {

    return(
        <div>
            <GridView
                data={props.data}
                defaultPageSize={props.defaultPageSize}
                pageSizeOption={props.pageOptions}
            />
        </div>
    )
}

export default ListBox;