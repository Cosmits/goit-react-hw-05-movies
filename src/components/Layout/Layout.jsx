import { StyledContainer } from "components/App.styled";
import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderNavLink, Menu } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <header>
        <StyledContainer >
          <nav style={Menu}>
            <HeaderNavLink to="/">Home</HeaderNavLink >
            <HeaderNavLink to="/movies">Movies</HeaderNavLink >
          </nav>
        </StyledContainer>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <StyledContainer>
          <p>All Rights Reserved || <a href="https://github.com/Cosmits" target="_blank" rel="noreferrer"><b> Developed by Samofal H. </b></a>
            &#169; 2023</p>
        </StyledContainer>
      </footer>
    </>
  )
}

export default Layout;