import React from 'react'
import {
    TaskItem
} from '../'
import './TaskList.css'

const TaskList = () => (
    <div className="TaskList">
        <ul>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </ul>
    </div>
)

export default TaskList