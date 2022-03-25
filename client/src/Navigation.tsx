import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="nav">
            <Link to='/'>Login</Link>
            <Link to='/menuplan'>MenuPlan</Link>
        </div>
    )
}

export default Navigation;