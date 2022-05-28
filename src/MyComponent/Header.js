import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">About</a>
                </li>
            </ul>
            {props.searchbar? <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:" No Search"}
        </div>
    </div>
</nav>
  )
}

// Header.propTypes = {
//     title: propTypes.string
// }


// If you don't give title the default title is display
Header.defaultProps = {
    title : "Your Title"
}