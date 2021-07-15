import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">NextJs App For Innovant Studio Interview</a>
        </Link>
        <Link href="/new">
            <a className="create">Create note</a>
        </Link>
    </nav>
)

export default Navbar;