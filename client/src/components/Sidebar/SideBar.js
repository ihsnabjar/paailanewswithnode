import React from 'react';
import './Sidebar.css';
import {Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';


function SideBar() {
    return (
        <div className="sidebar__root">
            <div className="sidebar__title">
                <Link className="sidebar__dash__link" to="/dashboard">
                    <h2> <DashboardRoundedIcon /> DASHBOARD</h2>
                </Link>
            </div>
            <div className="sidebar__flex">
                <div className="sidebar__content">
                <Link className="sidebar__dash__link" to="/dashboard/media">
                    <h5>Media</h5>
                </Link>
                </div>
                <div className="sidebar__flexend">
                    
                        <div className="sidebar__setting">
                            <h5> <SettingsIcon/></h5>
                        </div>
                        <div className="sidebar__logout">
                            <h5><ExitToAppIcon/></h5>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SideBar
