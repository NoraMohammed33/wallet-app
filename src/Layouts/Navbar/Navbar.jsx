import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary my-2">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-3" to="/deposit">Deposit</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-3" to="/transactions">Transaction history</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            
                                <i class="fa-solid fa-magnifying-glass me-4"></i>
                                <i class="fa-solid fa-user"></i>
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
