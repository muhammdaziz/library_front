import React from "react";
import Actions from "../actions";
import './main.css'
import WorkspaceHeader from "../workspace-header";
import ListView from "../listview";

const Dashboard = () => {

    const style = {
        padding: '5px',
        width: '83%',
        height: '100%',
    }

    return(
        <div style={style}>
            <div className={'workspace'}>

                <WorkspaceHeader/>

                <Actions/>

                <ListView/>
            </div>
        </div>
    )
}

export default Dashboard;