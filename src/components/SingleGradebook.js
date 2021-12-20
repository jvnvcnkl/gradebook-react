import React,{useEffect} from "react"
import { Link } from "react-router-dom"
import useFormattedDate from "../hooks/useFormatedDate"


export default function SingleGradebook({ props }) {
        
    const gradebook =  {
        id:props.id,
        name:props.name,
        created_at: useFormattedDate(props.created_at),
        teacherId:props.user.id,
        teacherFullName:props.user.first_name+ ' ' + props.user.last_name,
            }
 
    



    return (
        <div>
            Name <Link to={`/gradebooks/${gradebook.id}`}>{gradebook.name}</Link>  

            Teacher name:  <Link to={`/teachers/${gradebook.teacherId}`}>{gradebook.teacherFullName}</Link>
            Created at: {gradebook.created_at}
        </div>
    )
}