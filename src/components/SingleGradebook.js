import React from "react"

export default function SingleGradebook({ props }) {
    const gradebook = props
    return (
        <div>
            Name {gradebook.name}

            Teacher name: {gradebook.user.first_name} {gradebook.user.last_name}
        </div>
    )
}