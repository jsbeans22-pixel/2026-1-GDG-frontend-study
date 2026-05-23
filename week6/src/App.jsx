import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EmptyUser from "./components/EmptyUser";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  if (users.length === 0) {
    return <EmptyUser />;
  }

  return (
    <div>
      <h1>유저 페이지로 이동</h1>

      <Link to="/user/1">유저 1 페이지</Link>
      <br />
      <Link to="/user/2">유저 2 페이지</Link>

      <h1>유저 목록</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;