import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Active link highlight
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Players", path: "/players" },
    { name: "Schedule", path: "/schedule" },
  ];

  return (
    <nav className='fixed w-full top-0 left-0 p-4 bg-black/50 backdrop-blur-xl border-b border-white/20 shadow-md z-50'>
      <div className=' w-full mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo / Title */}
        <h1
          onClick={() => navigate("/")}
          className='text-2xl text-white md:text-3xl font-extrabold text-accent drop-shadow-lg cursor-pointer'>
          Pairahat Super League
        </h1>

        {/* Links */}
        <div className='hidden md:flex space-x-6'>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-amber-400 font-semibold text-lg transition ${
                location.pathname === link.path
                  ? "text-accent after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-accent after:rounded-full"
                  : "text-gray-300 hover:text-accent"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          {/* You can add hamburger icon and mobile menu logic here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
