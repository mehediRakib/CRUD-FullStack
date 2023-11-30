import React from 'react';
import AppNavBar from "../components/AppNavBar.jsx";
import TaskList from "../components/TaskList.jsx";

const ListPage = () => {
    return (
        <div>
            <AppNavBar/>
            <TaskList/>
        </div>
    );
};

export default ListPage;