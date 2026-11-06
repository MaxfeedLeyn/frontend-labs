import css from "./NotFoundPage.module.css";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className={css.notFoundPage}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
