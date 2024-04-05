import React, { useEffect, useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark }  from "react-icons/fa6";
import { AuthContext } from '../Context/Authprovider';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user)
    const toggleMenu = () => { // Corrected the function name
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" }
    ];

    return (
        <header className={`w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to='/' className='text-2xl font-bold text-purple-700 flex items-center gap-2'><FaBlog className='inline-block' />Books</Link>

                    <ul className='md:flex space-x-11 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                        {
                           user  ? user.email: ""
                        }
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered />}
                        </button>
                    </div>
                </div>

                <div>
                    <ul className={`space-y-4  px-4 my-7 mt-16 py-7 bg-blue-600 ${isMenuOpen ? "block fixed top-10 right-0 left-0" : "hidden"}`}>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
