import React from "react";
import './main.css'

const WorkspaceHeader = () => {

    const style = {
        padding: '15px 30px 8px',
    }

    return(
        <div style={style}>
            <h1>WELCOME SOMEONE</h1>
            <p>What would you like to do?</p>
        </div>
    )
}

export default WorkspaceHeader;