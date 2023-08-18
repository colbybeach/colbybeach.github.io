export default function Navbar() {
  return (
    <div className='navbar fixed bg-base-100 w-full flex sm:px-16 px-4 p-4 justify-between shadow-2xl z-50'>

        <div className="navbar-start">
          <button className="btn btn-ghost">Colby Beach</button>

        </div>
        <div className="navbar-end hidden lg:flex mr-2">
          <div className="menu menu-horizontal flex justify-center items-center gap-2">
            <NavbarButtons />
          </div>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="rgb(255,255,255)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              <NavbarButtons />
            </ul>
          </div>
        </div>
      </div>


  )
}
function NavbarButtons() {
  return (
    <>
      <a className="btn btn-ghost" href="#">Home</a>
      <a className="btn btn-ghost" href="#skills">Skills</a>
      <a className="btn btn-ghost" href="#experience">Experience</a>
      <a className="btn btn-primary"  href="#contact">Contact</a>
    </>
  )
}