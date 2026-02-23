// Footer.jsx
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-8'>
      <div className='w-full mx-auto px-6 md:flex md:justify-between md:items-center'>
        {/* Logo / Name */}
        <div className='mb-6 md:mb-0'>
          <h1 className='text-2xl font-bold text-white'>Pairahat Super League</h1>
          <p className='text-gray-400 text-sm'>
            Official Player Registration & Live Matches
          </p>
        </div>

        {/* Links */}
        <div className='flex flex-wrap gap-6'>
          <a href='/' className='hover:text-white transition'>
            Home
          </a>
          <a href='/players' className='hover:text-white transition'>
            Players
          </a>
          <a href='/schedule' className='hover:text-white transition'>
            Schedule
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className='mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm space-y-1'>
        <p>© {new Date().getFullYear()} Pairahat Super League. All rights reserved.</p>
        <p>
          Organization BY{" "}
          <span className='text-white font-semibold'>Pairahat United Club</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
