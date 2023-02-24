import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { Item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [textEdit, setTextEdit] = React.useState("");
  const [hideTodo, setHideTodo] = React.useState(false);

  const completedItem = Item.filter((todo) => !!todo.completed).length;
  const totalItem = Item.length;

  let searchedItem = [];

  if (!searchValue.length >= 1) {
    searchedItem = Item;
  } else {
    searchedItem = Item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const indexTodo = Item.findIndex((todo) => todo.text === text);
    const newItem = [...Item];
    newItem[indexTodo].completed = true;
    saveItem(newItem);
  };

  const addTodo = (newText) => {
    const newItem = [...Item];
    if (newText === "") {
      alert("Escribe tu nuevo Todo");
    } else {
      newItem.push({ completed: false, text: newText });
      saveItem(newItem);
    }
  };

  const editTodo = (oldText, newText) => {
    const indexTodo = Item.findIndex((todo) => todo.text === oldText);
    const newItem = [...Item];
    newItem[indexTodo].text = newText;
    saveItem(newItem);
  };

  const deleteTodo = (oldText) => {
    const indexTodo = Item.findIndex((todo) => todo.text === oldText);
    const newItem = [...Item];
    newItem.splice(indexTodo, 1);
    saveItem(newItem);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalItem,
        completedItem,
        searchValue,
        setSearchValue,
        searchedItem,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        hideTodo,
        setHideTodo,
        editTodo,
        textEdit,
        setTextEdit,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;
export { TodoContext, TodoProvider };
