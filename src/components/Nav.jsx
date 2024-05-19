import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
       <Link to="/">
        <div>Home Page</div>
      </Link>   
      <Link to="/scorer">
        <div>NBA Top Rebounders 2023 </div>
      </Link>
    
    </div>
  );
}