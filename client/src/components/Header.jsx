import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                    <span className='text-slate-500'>Real</span>
                    <span className='text-slate-700'>ESTATE</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
                <input type="text"  placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4  '>
                <Link to = '/'>
                    <li className='hidden sm:inline text-slate text-slate-700 hover:cursor-pointer'>Home</li>
                </Link>
                <Link to = '/about'>
                    <li className='hidden sm:inline text-slate text-slate-700 hover:cursor-pointer'>About</li>
                </Link>
                <Link to = '/sign-in'>
                    <li className='text-slate-700 hover:cursor-pointer'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
