import style from './App.module.css';
import React from "react";
import Logotype from "./components/Header/Logotype/Logo.png"
import Filter from "./components/Filter/Filter";
import Tabs from "./components/Tabs/Tabs";

import Tickets from "./components/Tickets/Tickets";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TicketsCheap from "./components/Tickets/TicketsCheap";
import TicketsFast from "./components/Tickets/TicketsFast";


const App = () => {
    return (
        <BrowserRouter>
            <div className={style.container}>
                <div className={style.logo}><img src={Logotype} alt="Logotype"/></div>
                <div className={style.gridContainer}>
                    <Filter/>
                    <div className={style.gridMain}>
                        <Tabs/>
                        <Switch>
                            <Route path="/ticket/cheap"
                                   render={() => <TicketsCheap/>}/>
                            <Route path="/ticket/fast"
                                   render={() => <TicketsFast/>}/>
                            <Route path="/ticket"
                                   render={() => <Tickets/>}/>
                             <Route path="/*"
                                   render={() => <Tickets/>}/>


                        </Switch>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;


