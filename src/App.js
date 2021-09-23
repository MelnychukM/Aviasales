import style from './App.module.css';
import React from "react";
import Logotype from "./components/Header/Logotype/Logo.png"
import Filter from "./components/Filter/Filter";
import Tabs from "./components/Tabs/Tabs";
import {Tickets} from "./components/Tickets/Tickets";
import TicketsTest from "./components/Tickets/TicketsTest";


const App = () => {
    return <div className={style.container}>
        <div className={style.logo}><img src={Logotype} alt="Logotype"/></div>
        <div className={style.gridContainer}>
            <Filter/>
            <div className={style.gridMain}>
                <Tabs/>
                <Tickets/>
            </div>
        </div>

    </div>

}

export default App;


