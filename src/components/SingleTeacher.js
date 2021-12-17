import React from "react"

export default function SingleGradebook({ props }) {

    const teacher = {
        fullName: props.first_name + ' ' + props.last_name,
        image: props.image_url,
        gradebook: props.gradebook ? props.gradebook.name : 'This teacher doesnt have its gradebook'
    }
    return (
        <div>
            Name: {teacher.fullName}
            Image: {teacher.image ? <img className="img-responsive" src={teacher.image} /> : "No image available"}
            Gradebook: {teacher.gradebook}

        </div>
    )
}