import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                {!editing && <i onClick={() => {
                    setEditing(true)
                }} className="fas fa-edit mr-2"/>}

                {editing && <i onClick={() => deleteCourse(course)}
                               className="far fa-trash-alt mr-2"/>}

                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check"/>}
            </td>
        </tr>
    )
}
export default CourseRow