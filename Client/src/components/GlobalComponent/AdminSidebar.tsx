import { AiFillFileText } from "react-icons/ai";
import {
    FaChartBar,
    FaChartLine,
    FaChartPie,
} from "react-icons/fa";
// import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
    RiDashboardFill,
    RiShoppingBag3Fill,
} from "react-icons/ri";

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Li, LiProps } from "../Dashboard/LiComponent";
// import React, { useEffect, useState } from "react";


const AdminSidebar = () => {
    const location = useLocation();

    const dashBoardLinks: LiProps[] = [
        { url: '/admin/dashboard', text: 'Dashboard', Icon: RiDashboardFill, location: location },
        { url: '/admin/products', text: 'Products', Icon: RiShoppingBag3Fill, location: location },
        { url: '/admin/customer', text: 'Customer', Icon: IoIosPeople, location: location },
        { url: '/admin/transactions', text: 'Transaction', Icon: AiFillFileText, location: location },
    ]
    const ChartItems: LiProps[] = [
        { url: '/admin/chart/barChart', text: 'Bar chart', Icon: FaChartBar, location: location },
        { url: '/admin/chart/lineChart', text: 'Line chart', Icon: FaChartLine, location: location },
        { url: '/admin/chart/pieChart', text: 'Pie chart', Icon: FaChartPie, location: location },
    ]


    return <>
        <div className="adminContainer">
            <aside>
                <h2>Logo.</h2>
                <div>
                    <h5>dashboard</h5>
                    <ul>
                        {dashBoardLinks.map((link) => {
                            return (
                                <React.Fragment key={link.url}>
                                    <Li {...link} />
                                </React.Fragment>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h5>Charts</h5>
                    <ul>
                        {
                            ChartItems.map((chart) => {
                                return <React.Fragment key={chart.url}>

                                    <Li {...chart} />

                                </React.Fragment>

                            })
                        }

                    </ul>
                </div>

            </aside>
            <Outlet />
        </div>
    </>
};

export default AdminSidebar;
