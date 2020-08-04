import React, {useState} from 'react'
import {
    AddTaskForm,
    TaskList,
    FilterFooter
} from '../'
import "./TodoApp.css";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoApp = () => {
    const [tasks,setTasks] = useState([])
    const [filteredTasks,setFilteredTasks] = useState([])
    const [filter,setFilter] = useState('all')
    const [refresh,setRefresh] = useState(0)

    useEffect(()=>{
        setTasks([
            {
                id: uuidv4(),
                title: "Default Task",
                status: true, // boolean
            },
            {
                id: uuidv4(),
                title: "Default Task Number 2",
                status: false, // boolean
            },
        ])
    },[])

    useEffect(() => {
      if (filter === "all") {
        setFilteredTasks(tasks);
      }
      if (filter === "completed") {
        const newCompletedFilteredTasks = tasks.filter((task) => task.status);
        setFilteredTasks(newCompletedFilteredTasks);
      }
      if (filter === "active") {
        const newActiveFilteredTasks = tasks.filter((task) => !task.status);
        setFilteredTasks(newActiveFilteredTasks);
      }
    }, [filter, tasks, refresh]);


    const addTask = (taskTitle) => {
        setTasks([
          ...tasks,
          {
            id: uuidv4(),
            title: taskTitle,
            status: false
          },
        ]);
    }

    const deleteTask = (taskId) => {
        let newTasksList = tasks
        delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
        newTasksList= newTasksList.filter((item) => item);
        setTasks(newTasksList);
    }

    const handleChangeStatus = (taskId) => {
      let newTasksList = tasks;
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
      setTasks(newTasksList);
      setRefresh(refresh+1)
    };

    return (
      <div className="TodoApp">
        <AddTaskForm addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          handleChangeStatus={handleChangeStatus}
        />
        <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
      </div>
    );
}

export default TodoApp