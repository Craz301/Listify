import { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../AuthContext";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  // Add a new task
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear input
  };

  // Toggle task completion
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
    <Header></Header>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {/* User Info */}
        <div className="mb-6">
          <img
            src={user?.photoURL!}
            alt="User"
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <p className="text-lg">{user?.displayName}</p>
          <button
            onClick={logout}
            className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* To-Do List UI */}
        <div className="mt-4">
          <div className="flex">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task..."
              className="w-full px-3 py-2 border rounded-l-lg focus:outline-none"
            />
            <button
              onClick={addTodo}
              className="px-4 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
            >
              Add
            </button>
          </div>

          <ul className="mt-4 space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-2 border rounded-lg ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className="cursor-pointer"
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
