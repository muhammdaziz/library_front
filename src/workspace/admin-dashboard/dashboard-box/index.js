import React from "react";
import './main.css'
import ListView from "../modules/book/listView";

const DashboardBox = () => {

    const style = {
        padding: '5px',
        width: '83%',
        height: '100%',
    }

    return(
        <div style={style}>
            <div className={'workspace'}>

                {/*<WorkspaceHeader/>*/}

                {/*<Actions/>*/}

                <ListView/>

            </div>
        </div>
    )
}

export default DashboardBox;