import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import "./TaskItem.css";

const TaskItem = () => (
  <li className="TaskItem">
    <input id="Task" type="checkbox" />
    <h2>Build This App</h2>
    <button>
      <FaTrashAlt />
    </button>
  </li>
);

export default TaskItem