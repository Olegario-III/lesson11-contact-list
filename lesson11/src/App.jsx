import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Jacob", email: "jacob@fanmail.com" },
    { id: 2, name: "Jovan", email: "jovan@fanmail.com" },
    { id: 3, name: "Jayson", email: "jayson@fanmail.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const addUser = () => {
    if (newUser.name.trim() === "" || newUser.email.trim() === "") return;
    const newEntry = {
      id: users.length + 1,
      name: newUser.name,
      email: newUser.email,
    };
    setUsers([...users, newEntry]);
    setNewUser({ name: "", email: "" });
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <h1>Contact List</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
