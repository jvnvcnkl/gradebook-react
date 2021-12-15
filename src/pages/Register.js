import React
,{useState} from "react";
import {useDispatch} from "react-redux"
import {register } from "../store/activeUser/slice"

export default function Register() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image_url: "",
        accept_tnc:false,
      });
      

      const handleSubmit = (e) => {
          e.preventDefault();
         dispatch(register(data));
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">First name</label>
                    <input type="text" 
                    id="first_name"
                    className="form-control" 
                    value={data.first_name } 
                    onChange ={({ target }) =>
                    setData({ ...data, first_name: target.value })
                  }
                    placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" 
                    id="last_name"
                    className="form-control" 
                    value={data.last_name } 
                    onChange ={({ target }) =>
                    setData({ ...data, last_name: target.value })
                }
                    placeholder="Enter last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" 
                    id="email"
                    className="form-control" 
                    value={ data.email} 
                    onChange ={({ target }) =>
                    setData({ ...data, email: target.value })
            }
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    id="password"
                    className="form-control" 
                    value={data.password } 
                    onChange ={({ target }) =>
                    setData({ ...data, password: target.value })
            }
                    placeholder="Password"
                     />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" 
                    id="password_confirmation"
                    className="form-control" 
                    value={data.password_confirmation } 
                    onChange ={({ target }) =>
                    setData({ ...data, password_confirmation: target.value })
            }
                    placeholder="Confirm your password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image url</label>
                    <input type="text" 
                    className="form-control" 
                    value={data.image_url } 
                    onChange ={({ target }) =>
                    setData({ ...data, image_url: target.value })
            }
                    placeholder="Enter image url" />
                </div>
                <div className="form-check">
                    <label className="form-check-label" htmlFor="TnC">I accept terms and condtions</label>
                    <input type="checkbox" 
                    className="form-check-input"
                     id="TnC" 
                     checked={data.accept_tnc}
                     onChange={({ target }) => {
                       setData({ ...data, accept_tnc: target.checked });
                     }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}