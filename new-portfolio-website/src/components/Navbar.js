import React, {useState} from 'react'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-containrer">
                <Link to="/" className="navbar-logo">
                    Spaghetti
                </Link>
                <h1>minecraft</h1>
            </div>
        </nav>
        </>
    )
}

export default Navbar