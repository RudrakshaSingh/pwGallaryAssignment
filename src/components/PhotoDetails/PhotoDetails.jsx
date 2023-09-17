import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./PhotoDetails.css";

function PhotoDetails() {
    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    async function photo(id) {
        const photoUrl = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

        const response = await axios.get(photoUrl);
        const data = response.data.photo;
        console.log(data);
        setPhotoData(data);
        setLoading(false);
    }
    useEffect(() => {
        photo(id);
    }, []);
    return (
        <body>
            <div className="single">
                {photoData ? (
                    <>
                        <img src={photoData.url} />
                        <div>
                            <p className="title"> {photoData.title}</p>
                            <p className="desc"> {photoData.description}</p>
                        </div>{" "}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </body>
    );
}
export default PhotoDetails;
