import React, { useEffect, useState } from 'react';
import { createGradebook, setGradebooks } from '../store/gradebooks/slice';
import { useDispatch } from 'react-redux';
import teacherService from '../services/TeacherService';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddGradebook() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [gradebookData, setGradebookData] = useState({
        name: "",
        user_id: "",
    })
    const [availableTeachers, setAvailableTeachers] = useState()

    useEffect(() => {
        const fetchTeachers = async () => {
            const teachers = await teacherService.getAvailable();
            setAvailableTeachers(teachers);
        };
        fetchTeachers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gradebookData)

        dispatch(createGradebook(gradebookData))
    }

    const handleCancel = () => {
        history.push('/')
    }
    return (
        <div>
            <h2>Add gradebook </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Gradebook name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={gradebookData.name}
                        onChange={({ target }) =>
                            setGradebookData({ ...gradebookData, name: target.value })
                        }
                        placeholder="Enter name" />
                </div>
                <select className="custom-select"
                    onChange={({ target }) =>
                        setGradebookData({ ...gradebookData, user_id: Number(target.value) })}
                    value={gradebookData.user_id}
                >
                    <option>Choose a teacher</option>
                    {availableTeachers && availableTeachers.map((teacher) => (
                        <option key={teacher.id}
                            value={teacher.id} >
                            {teacher.first_name + ' ' + teacher.last_name}
                        </option>
                    ))}
                </select>
                <button type="submit" class="btn btn-primary" >Submit</button>
                <button class="btn btn-primary" onClick={handleCancel}>Cancel</button>

            </form>

        </div >
    )
}