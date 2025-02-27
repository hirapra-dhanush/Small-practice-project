import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ToDoList() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);``

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd(event) {
    event.preventDefault();
    const trimmedText = inputText.trim().toLowerCase();

    if (trimmedText === '') {
      alert('Task cannot be empty!');
      return;
    }

    const taskExists = tasks.some(
      (task) => task.text.toLowerCase() === trimmedText
    );

    if (taskExists) {
      alert('Task already exists!');
      return;
    }

    setTasks([...tasks, { text: inputText.trim(), isEditing: false }]);
    setInputText('');
  }

  function handleEdit(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = !updatedTasks[index].isEditing;
    setTasks(updatedTasks);
  }

  function handleSave(index, newText) {
    const trimmedText = newText.trim();

    if (trimmedText === '') {
      alert('Task cannot be empty!');
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[index].text = trimmedText;
    updatedTasks[index].isEditing = false;
    setTasks(updatedTasks);
  }

  function handleDelete(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-purple-300 via-purple-100 to-white'>
      <div className='bg-white p-6 rounded-2xl shadow-2xl w-96 relative'>
        <h2 className='text-3xl font-bold text-center mb-4 text-purple-700'>
          To-Do List
        </h2>

        <form
          className='flex gap-2 mb-4'
          onSubmit={handleAdd}>
          <input
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Add a new task...'
            className='w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md'
          />
          <button
            type='submit'
            className='bg-purple-500 text-white px-5 py-3 rounded-xl hover:bg-purple-600 transition shadow-md'>
            Add
          </button>
        </form>

        <ul className='space-y-2'>
          {tasks.map((task, index) => (
            <li
              key={index}
              className='bg-purple-100 p-3 rounded-lg shadow-md text-purple-800 flex justify-between items-center'>
              {task.isEditing ? (
                <input
                  type='text'
                  defaultValue={task.text}
                  onBlur={(e) => handleSave(index, e.target.value)}
                  autoFocus
                  className='w-full p-1 border border-purple-400 rounded-md'
                />
              ) : (
                <span>{task.text}</span>
              )}

              <div className='flex gap-2'>
                <button
                  onClick={() => handleEdit(index)}
                  className='text-purple-600 hover:text-purple-800'>
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className='text-red-500 hover:text-red-700'>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
