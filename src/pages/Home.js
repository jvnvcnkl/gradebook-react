import gradebookService from "../services/GradebookService"
import React from "react";
import { useState, useEffect } from "react";
import SingleGradebook from "../components/SingleGradebook";

export default function Home() {

    const [gradebooks, setGradebooks] = useState([

    ])
    useEffect(() => {
        const fetchData = async () => {
            const data = await gradebookService.getAll();

            setGradebooks(data)

        }
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {gradebooks.map((gradebook) => (
                    <li key={gradebook.id}> <SingleGradebook props={gradebook} /> </li>
                ))}
            </ul>
        </div>
    )

}