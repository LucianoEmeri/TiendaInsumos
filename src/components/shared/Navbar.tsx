import { Link, NavLink } from 'react-router-dom';
import { navbarLinks } from '../../constants/links';
import {
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from 'react-icons/hi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header
      className='text-white py-4 flex items-center justify-between px-5 lg:px-12 fixed top-0 left-0 w-full z-50'
      style={{
        backgroundImage: 'url(/img/footer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Logo />

      <nav className='space-x-5 hidden md:flex'>
        {navbarLinks.map(link => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${isActive ? 'text-red-600 underline' : 'text-white'} transition-all duration-300 font-medium hover:text-red-600 hover:underline `
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      <div className='flex gap-5 items-center'>
        <button>
          <HiOutlineSearch size={25} className='text-white' />
        </button>

        <div className='relative'>
          <Link
            to='/account'
            className='border-2 border-slate-200 w-9 h-9 rounded-full grid place-items-center text-lg font-bold text-white'
          >
            A
          </Link>
        </div>

        <button className='relative'>
          <span className='absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full'>
            0
          </span>
          <HiOutlineShoppingBag size={25} className='text-white' />
        </button>
      </div>

      <button className='md:hidden'>
        <FaBarsStaggered size={25} className='text-white' />
      </button>
    </header>
  );
};
