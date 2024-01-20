export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="title">SFU Events</a>
        <ul>
            <li>
                <a href="/about-us">About Us</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
}