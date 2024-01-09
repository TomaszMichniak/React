import axios from "axios";
import { response } from "express";
import { Todo } from "../types/todoType";

export async function getUsersTodos(userId:number){
    return await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response=>response.data);
}
export async function deleteTodo(todoId:number) {
    return await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response => response.data);
}
export async function createTodo(todo:Todo) {
    return await axios.post(`https://jsonplaceholder.typicode.com/todos`,todo)
    .then(response=>response.data);
}