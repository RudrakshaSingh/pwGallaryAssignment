import { Routes, Route } from "react-router-dom";
import Gallary from "../components/Gallary/Gallary";
import PhotoDetails from "../components/PhotoDetails/PhotoDetails";
function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Gallary />} />
            <Route path="photo/:id" element={<PhotoDetails />} />
        </Routes>
    );
}
export default CustomRoutes;
