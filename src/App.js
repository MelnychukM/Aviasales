import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Logotype from "./components/Header/Logotype/Logo.png"
import Tabs from "./components/Tabs/Tabs";
import Tickets from "./components/Tickets/Tickets";
import TicketsCheap from "./components/Tickets/TicketsCheap";
import TicketsFast from "./components/Tickets/TicketsFast";
import FilterContainer from "./components/Filter/FilterContainer";

import style from './App.module.css';




const App = () => {
    return (
        <BrowserRouter>
            <div className={style.container}>
                <div className={style.logo}><img src={Logotype} alt="Logotype"/></div>
                <div className={style.gridContainer}>
                    <FilterContainer/>
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


