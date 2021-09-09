import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Users from "./Users";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>
);

const Home = () => <Users />;

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
