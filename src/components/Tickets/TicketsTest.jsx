import React, {useEffect} from "react";
import store from "../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {tinkerAPI} from "../../api/api";
import {logDOM} from "@testing-library/react";
import {search, setSearch} from "../../redux/tickets-reducer";


export const Tickets = () => {

    const dispatch = useDispatch()

    const fetchSearchId = async () => {
        await tinkerAPI.getSearchId()
            .then(response => dispatch(search(response)))
    }

    useEffect(() => {
        fetchSearchId()
    }, [])



    const {searchId} = useSelector(({ticketsData}) => {
        return {
            searchId: ticketsData.searchId
        }
    })

    useEffect(() => {
        console.log('searchId: ', searchId)
    }, [searchId])

    return (
        <div>
            {searchId &&
            <div>{searchId}</div>
            }
        </div>
    )
}




