import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Slice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="space-x-3 mt-12">
        <input
          type="text"
          placeholder="Enter A Todo.."
          className="bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-indigo-800 text-base outline-none text-gray-200 py-1 px-3 leading-9 transition-colors duration-150 ease-in-out"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
