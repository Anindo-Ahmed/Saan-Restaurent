import { Link } from "react-router-dom";


const NavBar = () => {

    const navItem = (
        <>
        <li><Link>HOME</Link></li>
        <li><Link>CONTACT US</Link></li>
        <li><Link>DASHBOARD</Link></li>
        <li><Link>OUR MENU</Link></li>
        <li><Link>OUR SHOP</Link></li>
        </>
    )
  return (
    <div className="navbar fixed max-w-screen-xl bg-black text-white bg-opacity-30 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg lg:text-xl">Bistro Boss <br /> Restaurent</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
