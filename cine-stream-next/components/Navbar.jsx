import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">

            <Link href="/">Home</Link>

            <Link href="/favorites">Favorites</Link>

        </nav>
    );
};

export default Navbar;