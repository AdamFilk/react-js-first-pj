import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="not-fond">
      <h2>Sorry</h2>
      <p>The Page you have entered is not found</p>
      <Link to="/">Go to Home Page...?</Link>
    </div>
  );
};

export default PageNotFound;
