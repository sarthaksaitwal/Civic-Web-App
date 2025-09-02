import React, { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={e => { e.preventDefault(); onLogin(); }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;