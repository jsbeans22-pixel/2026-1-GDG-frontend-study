import { useState, useEffect } from "react";

import EmptyData from "../components/EmptyData";
import Todo from "../components/Todo";
import { useFetchUser } from "../hooks/useFetchUser";

function User1Page() {
  const todos = useFetchUser(1);
  if (todos.length === 0) {
    return <EmptyData />;
  }

  return (
    <div>
      <h1>유저 1 페이지입니다.</h1>

      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}

export default User1Page;


