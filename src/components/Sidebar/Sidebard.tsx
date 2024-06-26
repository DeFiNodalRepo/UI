import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// import Logo from '../../images/logo/logo.svg';

// Icons
import { PiVault } from "react-icons/pi";
import {
  MdOutlineDashboard,
  MdOutlineRocketLaunch,
  MdOutlineCollectionsBookmark,
} from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { CgShutterstock } from "react-icons/cg";
import { SlChemistry } from "react-icons/sl";
import { IoDocumentsOutline } from "react-icons/io5";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  // Todo add svg logo
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-55 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        {/*
        Logo should be here, Image preferably
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink> */}

        <NavLink to="/">
          <h1 className="text-3xl font-bold text-slate-100">DefiNodal</h1>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("dashboard") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MdOutlineDashboard size={20} />
                  Dashboard
                </NavLink>
              </li>

              {/* <!-- Menu Item Vaults --> */}
              <li>
                <NavLink
                  to="/vaults"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("vaults") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <PiVault size={20} />
                  Vaults
                </NavLink>
              </li>

              {/* <!-- Menu Item SDnod --> */}
              <li>
                <NavLink
                  to="/sdnod"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("sdnod") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <HiOutlineCurrencyDollar size={20} />
                  SDnod
                </NavLink>
              </li>

              {/* <!-- Menu Item Boardroom --> */}
              <li>
                <NavLink
                  to="/boardroom"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("boardroom") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <CgShutterstock size={20} />
                  Boardroom
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/collections"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("collections") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MdOutlineCollectionsBookmark size={20} />
                  Collections
                </NavLink>
              </li>

              {/* <!-- Menu Item Labs --> */}
              <li>
                <NavLink
                  to="/labs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("labs") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <SlChemistry size={20} />
                  Labs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fair-launch"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("fair-launch") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MdOutlineRocketLaunch size={20} />
                  Fair Launch
                </NavLink>
              </li>

              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-xl font-semibold text-bodydark2">
              Info
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <Link
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-stone-100 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 `}
                  to={"https://definodal.gitbook.io/definodal/"}
                  target="_blank"
                >
                  <IoDocumentsOutline size={20} />
                  Docs
                </Link>
              </li>

              {/* <!-- Menu Item Ui Elements --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
