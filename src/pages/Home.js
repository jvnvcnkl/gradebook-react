import React, { useState } from "react";
import { useEffect } from "react";
import SingleGradebook from "../components/SingleGradebook";
import { getGradebooks } from "../store/gradebooks/slice";
import { selectGradebooks } from "../store/gradebooks/selectors";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
    const dispatch = useDispatch()
    const gradebooks = useSelector(selectGradebooks)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(getGradebooks({
            page: 1
        }))
    }, [])

    const handleLoadMore = () => {
        dispatch(getGradebooks({
            page: gradebooks.current_page + 1,
            filter: filter,
        }))
    }

    useEffect(() => {
        dispatch(getGradebooks({
            filter: filter,
            page: 1,
        }
        ))
    }, [filter])


    return (
        <div>
            <input
                value={filter}
                onChange={({ target }) =>
                    setFilter(target.value)}
                placeholder='Filter by name' />
            <ul>
                {gradebooks &&
                    gradebooks.data.map((gradebook) => (
                        <li key={gradebook.id}>
                            <SingleGradebook props={gradebook} /> </li>
                    ))}
            </ul>
            <button onClick={() => handleLoadMore()}>Load more</button>
        </div>
    )

}