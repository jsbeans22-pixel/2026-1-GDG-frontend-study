import { useEffect, useState } from "react";

export function useFetchUser(userId) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return todos;
}