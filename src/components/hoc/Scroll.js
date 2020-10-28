import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from 'query-string';

function ScrollToTop({ children }) {
  const { pathname,hash } = useLocation();
  const history = useHistory()
//   this will make the page back to the top after render.
//   Found this solution somwhere
const { page } = queryString.parse(hash)
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [pathname,page,history.goBack]);
 
  return children;
}
 
export default ScrollToTop;