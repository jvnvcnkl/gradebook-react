import React from "react"

export default function SingleGradebook({ props }) {
    const teacher = props
    return (
        <div>
            Name {teacher.first_name} {teacher.last_name}
            Gradebook:

        </div>
    )
}