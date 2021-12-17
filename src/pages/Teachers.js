import React from "react";
import { useEffect } from "react";
import SingleTeacher from "../components/SingleTeacher";
import { getTeachers } from "../store/teachers/slice";
import { selectTeachers } from "../store/teachers/selectors";
import { useDispatch, useSelector } from "react-redux";


export default function Teachers() {

    const dispatch = useDispatch()
    const teachers = useSelector(selectTeachers)


    useEffect(() => {
        dispatch(getTeachers());

    }, [])
    return (
        <div>
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