import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const navLinks = [
    { title: 'Gallery', path: '/' },
    { title: 'Upload', path: '/upload' }
  ]

  const { theme, toggleTheme, active, setActive, mobileMenu, setMobileMenufn } =
    useTheme()

  return (
    <nav className='h-16 flex justify-between items-center px-6'>
      <Link to={'/'} className='flex items-center text-2xl font-bold gap-1'>
        {theme === 'dark' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='white'
              d='M13.81 2.86c.17-.3 0-.7-.35-.74c-2.62-.37-5.3.28-7.44 1.86c-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5c-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08c1.74-2.18 2.48-5.03 2.05-7.79a.5.5 0 0 0-.5-.43M4.18 5.79a10.1 10.1 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5c.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86c.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='#060f27'
              d='M13.81 2.86c.17-.3 0-.7-.35-.74c-2.62-.37-5.3.28-7.44 1.86c-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5c-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08c1.74-2.18 2.48-5.03 2.05-7.79a.5.5 0 0 0-.5-.43M4.18 5.79a10.1 10.1 0 0 0-2.05 7.79c.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5c.23.1.5 0 .63-.22l3.01-5.21a.502.502 0 0 0-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86c.2-.15.26-.44.13-.66l-3.01-5.22a.506.506 0 0 0-.87 0l-4.04 6.99c-.17.3.01.7.35.75'
            />
          </svg>
        )}
        <p>
          Memor
          <span
            className={`${
              theme === 'dark' ? 'text-primary' : 'text-black'
            } m-0 p-0`}
          >
            Ease
          </span>
        </p>
      </Link>
      <ul className='max-sm:hidden'>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`inline-block mx-4 max-sm:mx-2 px-4 py-1 rounded-2xl shadow-inner bg-opacity-70 ${
              active.match(link.title.toLowerCase())
                ? theme === 'dark'
                  ? 'bg-secondary'
                  : 'bg-primary'
                : ''
            }`}
          >
            <Link
              onClick={() => setActive(link.title.toLowerCase())}
              to={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-center'>
        <button
          onClick={toggleTheme}
          className='px-4 py-2  rounded-lg flex-center'
        >
          {theme === 'dark' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              className='h-10 w-10 max-sm:h-8 max-sm:w-8'
            >
              <path
                fill='#f9fafb'
                d='M17.891 12a5.94 5.94 0 0 1-3.68 5.499a5.97 5.97 0 0 1-6.496-1.295A5.948 5.948 0 0 1 11.943 6.05a5.96 5.96 0 0 1 4.21 1.743A5.94 5.94 0 0 1 17.89 12M3.203 13.048H2.05A1.05 1.05 0 0 1 1 12a1.047 1.047 0 0 1 1.05-1.048h1.153A1.05 1.05 0 0 1 4.253 12a1.047 1.047 0 0 1-1.05 1.048m18.747 0h-1.143A1.05 1.05 0 0 1 19.758 12a1.047 1.047 0 0 1 1.05-1.048h1.143A1.05 1.05 0 0 1 23 12a1.047 1.047 0 0 1-1.05 1.048m-9.965-8.8a1.05 1.05 0 0 1-1.05-1.048V2.048A1.047 1.047 0 0 1 11.986 1a1.05 1.05 0 0 1 1.049 1.048V3.2a1.047 1.047 0 0 1-1.05 1.048m0 18.752a1.05 1.05 0 0 1-1.05-1.047V20.8a1.047 1.047 0 0 1 1.05-1.048a1.05 1.05 0 0 1 1.049 1.048v1.152A1.047 1.047 0 0 1 11.984 23M5.753 6.825a1.05 1.05 0 0 1-.745-.314l-.819-.807a1.051 1.051 0 0 1 .745-1.796c.28 0 .548.111.745.308l.819.817a1.047 1.047 0 0 1 0 1.478a1.05 1.05 0 0 1-.745.314m13.271 13.221a1.05 1.05 0 0 1-.735-.304l-.818-.817a1.047 1.047 0 0 1 1.14-1.739q.196.096.34.262l.818.817a1.047 1.047 0 0 1 0 1.477a1.05 1.05 0 0 1-.745.304m-.808-13.221a1.05 1.05 0 0 1-1.034-1.254c.04-.204.142-.391.29-.538l.818-.817a1.05 1.05 0 0 1 1.48 1.488l-.82.807a1.05 1.05 0 0 1-.734.314M4.934 20.046a1.05 1.05 0 0 1-.745-.304a1.046 1.046 0 0 1 0-1.477l.819-.817a1.05 1.05 0 0 1 1.49 0a1.047 1.047 0 0 1 0 1.477l-.819.817a1.05 1.05 0 0 1-.745.304'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 256 256'
              className='h-10 w-10 max-sm:h-8 max-sm:w-8'
            >
              <path
                fill='#060f27'
                d='M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.1 103.1 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z'
              />
            </svg>
          )}
        </button>
        <div className='max-sm:block hidden relative'>
          <button className=' py-2' onClick={setMobileMenufn}>
            {theme === 'light' ? (
              !mobileMenu ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='2em'
                  height='2em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='#060f27'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 17h7M5 12h14M5 7h14'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='2em'
                  height='2em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='#060f27'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18 6L6 18M6 6l12 12'
                  />
                </svg>
              )
            ) : !mobileMenu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2em'
                height='2em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='white'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 17h7M5 12h14M5 7h14'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2em'
                height='2em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='none'
                  stroke='#ffffff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M18 6L6 18M6 6l12 12'
                />
              </svg>
            )}
          </button>
          {mobileMenu && (
            <div
              className={`absolute ${
                theme === 'dark' ? 'bg-black' : 'bg-white shadow-lg'
              }  w-max h-max bottom-[-10] right-2 rounded-lg overflow-hidden border-[1px] border-primary border-opacity-5`}
            >
              <ul className='flex flex-col'>
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`inline-block h-12 w-32 flex-center shadow-inner bg-opacity-70  ${
                      active.match(link.title.toLowerCase())
                        ? theme === 'dark'
                          ? 'bg-secondary '
                          : 'bg-primary'
                        : ''
                    }`}
                  >
                    <Link
                      onClick={() => setActive(link.title.toLowerCase())}
                      to={link.path}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
