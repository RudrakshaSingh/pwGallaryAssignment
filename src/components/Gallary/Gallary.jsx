import PhotoList from "../PhotoList/PhotoList";
import "./Gallary.css";

function Gallary() {
    return (
        <div id="parent">
            <span>Photo Gallery</span>
            <h1>List of photos</h1>
            <PhotoList />
        </div>
    );
}
export default Gallary;
