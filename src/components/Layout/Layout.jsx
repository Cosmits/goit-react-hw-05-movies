import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <div className="Container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="Container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer>
        <div className="Container">
          <p>All Rights Reserved |
            <a href="https://github.com/Cosmits" target="_blank" rel="noreferrer"> Developed by Samofal H. </a>
            &#169; 2023</p>
        </div>
      </footer>
    </>
  )
}