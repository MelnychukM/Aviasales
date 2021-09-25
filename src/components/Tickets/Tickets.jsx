import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {tinkerAPI} from "../../api/api";
import {search, ticketAction} from "../../redux/tickets-reducer";
import Ticket from "./Ticket/Ticket";





export const Tickets = () => {

    const dispatch = useDispatch()

    const fetchSearchId = async () => {
        await tinkerAPI.getSearchId()
            .then(response => dispatch(search(response)))
    }


    useEffect(() => {
        fetchSearchId()
    }, [])



    const {searchId,tickets} = useSelector(({ticketsData}) => {
        return {
            searchId: ticketsData.searchId,
            tickets: ticketsData.tickets
        }
    })

    const fetchTicket = async () => {
        await tinkerAPI.getTicket(searchId)
            .then(response => dispatch(ticketAction(response.data)))

    }

    useEffect(() => {
        fetchTicket(searchId)

    }, [searchId])

    return (
        <div>
            {searchId &&
            <div>{searchId}</div>
            }
            {tickets.map((item, index) => (
                <div>
                    {
                        index < 5 && <Ticket item={item}/>
                    }
                </div>
               ))}
        </div>
    )
}





