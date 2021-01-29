import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles.css";

const Home = () => {
  const [cookie, setCookie] = useCookies(["name"]);

  return (
    <div className="home">
      <div className="center">
        {/* <div>
          <Link to="/todos">
            <div className="card">Todos</div>
          </Link>
        </div>
        <div>
          <Link to="/cv">
            <div className="card">CV</div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div className="card">Nowhere</div>
          </Link>
        </div> */}
        <div>
          <Link to="/signup">
            <div className="card">Signup</div>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <div className="card">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
