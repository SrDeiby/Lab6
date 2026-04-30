

import { getAllTasks, addTask, toggleTask, deleteTask } from "./task.js";

const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");
const counter = document.querySelector("#counter");


const render = () => {
    const tasks = getAllTasks();

    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const btn = document.createElement("button");

        span.textContent = task.text;
        btn.textContent = "Eliminar";
        btn.setAttribute("type", "button");

        if (task.completed) {
            li.classList.add("completed");
        }

        span.addEventListener("click", () => {
            toggleTask(index);
            render();
        });

        btn.addEventListener("click", () => {
            deleteTask(index);
            render();
        });

        li.append(span, btn);
        list.appendChild(li);
    });

    updateCounter(tasks);
};


const updateCounter = (tasks) => {
    const pendientes = tasks.filter(t => !t.completed).length;
    counter.textContent = pendientes;
};


button.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value) {
        alert("No se permiten tareas vacías");
        return;
    }

    addTask(value);
    input.value = "";
    render();
});


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});


render();