

import { getTasks, saveTasks } from "./storage.js";

let tasks = getTasks();


export const getAllTasks = () => tasks;


export const addTask = (text) => {
    tasks.push({
        text,
        completed: false
    });

    saveTasks(tasks);
};


export const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
};


export const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks(tasks);
};