import React, { useState } from "react"
import {useDispatch} from "react-redux"

import {login } from "../store/activeUser/slice"
export default function Login() {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email:"",
        password: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(login(credentials));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={credentials.email}
                    onChange ={({ target }) =>
                    setCredentials({ ...credentials, email: target.value })
                  }
                    placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={credentials.password}
                    onChange ={({ target }) =>
                    setCredentials({ ...credentials, password: target.value })
                  }
                    placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}