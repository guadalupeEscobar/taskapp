import React from "react";
import { Header } from "../components/Header/Header";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoHide } from "../components/TodoHide/TodoHide";
import { TodoContext } from "../context";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { ModalOverlay } from "../components/ModalOverlay/ModalOverlay";
import { TodoLoading } from "../components/TodoLoading/TodoLoading";
import { TodoEmpty } from "../components/TodoEmpty/TodoEmpty";
import { TodoError } from "../components/TodoError/TodoError";

function AppUI() {
  const {
    error,
    loading,
    searchedItem,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Header></Header>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError></TodoError>}
        {loading && <TodoLoading></TodoLoading>}
        {!loading && !searchedItem.length && <TodoEmpty></TodoEmpty>}

        {searchedItem.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <ModalOverlay></ModalOverlay>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <TodoHide></TodoHide>
    </React.Fragment>
  );
}

export { AppUI };
