import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFormattedDate from "../hooks/useFormatedDate"
import { useDispatch, useSelector } from "react-redux";
import { selectActiveGradebook } from "../store/gradebooks/selectors";
import { getActiveGradebook, removeActiveGradebook } from "../store/gradebooks/slice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectActiveUser } from "../store/activeUser/selectors";

export default function GradebookPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const activeUser = useSelector(selectActiveUser)
    const gradebook = useSelector(selectActiveGradebook)


    useEffect(() => {
        if (id) {
            dispatch(getActiveGradebook({
                id: id
            }))
        }

        return () => {
            dispatch(removeActiveGradebook())
        }
    }, [])


    const handleClick = () => {
        history.push(`/gradebooks/${id}/students/create`)
    }

    return (
        <div>
            <button onClick={handleClick}> Add new student</button>
            Name <Link to={`/gradebooks/${gradebook?.id}`}>{gradebook?.name}</Link>

            Teacher name:  <Link to={`/teachers/${gradebook?.teacherId}`}>{gradebook?.teacherFullName}</Link>
            Created at: {gradebook?.created_at}
        </div>

    )


}