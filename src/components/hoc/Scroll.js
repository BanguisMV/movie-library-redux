import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
 const { page }= useSelector(state => state.page)
//   this will make the page back to the top after render.
//   Found this solution somwhere

  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [pathname,page]);
 
  return children;
}
 
export default ScrollToTop;