import React from 'react'
import './student.css';
function Student(props) {
    return (
        <div className='icard'>
            <table>
                <tbody>
                    <tr><td colSpan={2}>{props.college}</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Student

