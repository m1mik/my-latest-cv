import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="center">
        <div>
          <Link to="/todos">
            <Card className="card">Todos</Card>
          </Link>
        </div>
        <div>
          <Link to="/cv">
            <Card className="card">CV</Card>
          </Link>
        </div>
        <div>
          <Link to="/">
            <Card className="card">Nowhere</Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
