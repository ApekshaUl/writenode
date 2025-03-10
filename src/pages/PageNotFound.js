import NotFound from "../assets/images/page-not-found.jpg";
import {useTitle} from "../hooks/useTitle";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  useTitle("404");
  return (
    <section className="pageNotFound">
      <p>404 Error</p>
      <img src= {NotFound} alt="ni hai bhai"/>
      <Link to="/">
      <button>Back to Home</button>
      </Link>
    </section>
  )
}
