const KEY = "tasks";

export const getTasks = () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks) => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
};