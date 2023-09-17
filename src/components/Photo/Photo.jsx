import { Link } from "react-router-dom";
import "./Photo.css";

function Photo({ url, id }) {
    return (
        <div className="container">
            <Link to={`/photo/${id}`}>
                <div>
                    <img className="img" src={url} alt="hi" />
                </div>
            </Link>
        </div>
    );
}
export default Photo;
