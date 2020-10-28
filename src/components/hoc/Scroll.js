import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from 'query-string';

function ScrollToTop({ children }) {
  const { pathname,hash } = useLocation();
  const x = useHistory()
  console.log(x);
//   this will make the page back to the top after render.
//   Found this solution somwhere
const { page } = queryString.parse(hash)
console.log(pathname);
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [pathname,page,x.goBack]);
 
  return children;
}
 
export default ScrollToTop;