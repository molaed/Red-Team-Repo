export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="title">SFU EVENTS</a>
        <ul>
            <li>
                <a className="navbtn" href="/about-us">About Us</a>
            </li>
            <li>
                <a className="navbtn" href="/clubs">Clubs List</a>
            </li>   
            <li>
                <a className="navbtn" href="/login">Log In</a>
            </li>
        </ul>
    </nav>
}