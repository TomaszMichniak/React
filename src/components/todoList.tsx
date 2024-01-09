import { useEffect, useState } from "react";
import { Todo } from "../types/todoType";
import { useParams } from "react-router";
import { getUsersTodos } from "../requests/todoRequest";
import { deleteTodo, createTodo } from "../requests/todoRequest";
import { Link, useNavigate } from "react-router-dom";
import TodoForm from "./todoForm";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  let { userId } = useParams<{ userId: string }>();
  if (userId === undefined) {
    throw new Error("undefined Parms");
  }
  const userIdNumber = Math.abs(parseInt(userId));
  useEffect(() => {
    (async () => {
      const data = await getUsersTodos(userIdNumber);
      setTodos(data);
    })();
  }, []);

  const handleDelete = async (todoId: number) => {
    return deleteTodo(todoId).then(() =>
      setTodos((prevState) => {
        return prevState?.filter((todo) => todoId !== todo.id) ?? [];
      })
    );
  };

  const handleCreateTodo = async (newTodo: Todo) => {
      const createdTodo = await createTodo(newTodo);
      console.log("New todo created:", createdTodo);
      setTodos((prevState) => (prevState ? [ createdTodo,...prevState] : [createdTodo]));
  };

  const navigate = useNavigate();

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <TodoForm user={userIdNumber} onCreateTodo={handleCreateTodo} />
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        <div>
          {todos?.map((todo, index) => (
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest"> {todo.title}</p>
              {!todo.completed && (
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 bg-green-400 rounded-full">
                  Done
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                className="flex-no-shrink p-2 ml-2 border-2 rounded-full bg-blue-400"
              >
                Edit
              </button><button
                onClick={() => handleDelete(todo.id)}
                className="flex-no-shrink p-2 ml-2 border-2 rounded-full bg-red-500 "
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
