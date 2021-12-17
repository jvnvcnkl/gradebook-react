import React from "react";
import { useEffect, useState } from "react";
import SingleTeacher from "../components/SingleTeacher";
import { getTeachers, setTeachers } from "../store/teachers/slice";
import { selectTeachers } from "../store/teachers/selectors";
import { useDispatch, useSelector } from "react-redux";


export default function Teachers() {

    const dispatch = useDispatch()
    const teachers = useSelector(selectTeachers)
    const [filter, setFilter] = useState('')
    console.log(teachers)

    const handleFilterButton = () => {
        console.log(filter)
        dispatch(getTeachers({
            filter: filter,
        }
        ))
    }

    useEffect(() => {
        dispatch(getTeachers({
            filter: filter
        }))
    }, [])

    return (
        <div>
            <input
                value={filter}
                onChange={({ target }) =>
                    setFilter(target.value)}
                placeholder='Filter by name' />

            <button onClick={() => handleFilterButton()} > Filter </button>
            <ul>

                {teachers &&
                    teachers.map((teacher) => (
                        <li key={teacher.id}>
                            <SingleTeacher props={teacher} /> </li>
                    ))}
            </ul>
        </div>
    )
}