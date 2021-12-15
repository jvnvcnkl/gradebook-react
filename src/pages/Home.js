import React from "react";
import { useEffect } from "react";
import SingleGradebook from "../components/SingleGradebook";
import { getGradebooks } from "../store/gradebooks/slice";
import { selectGradebooks } from "../store/gradebooks/selectors";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
    const dispatch = useDispatch()
    const gradebooks =  useSelector(selectGradebooks)

    useEffect(() => {
        dispatch(getGradebooks());
   
        
    }, [])

    
    return (
        <div>
            <ul>
                {gradebooks && 
                gradebooks.data.map((gradebook) => (
                    <li key={gradebook.id}>
                     <SingleGradebook props={gradebook} /> </li>
                ))}
            </ul>
        </div>
    )

}