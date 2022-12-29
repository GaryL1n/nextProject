import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="w-auto border-b-2 border-black">
                <div>
                    <h1 className="text-2xl">Nav List</h1>
                </div>
                <Image src="/logo.gif" width={200} height={200} alt="logo" />
                <Link href="/" className="m-3">
                    Home
                </Link>
                <Link href="/about" className="m-3">
                    About
                </Link>
                <Link href="/user" className="m-3">
                    User
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
