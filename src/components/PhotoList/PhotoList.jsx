import { useEffect, useState } from "react";
import axios from "axios";
import Photo from "../Photo/Photo";
import "./PhotoList.css";

function PhotoList() {
    const maximumPages = 11;
    const [currentPageNo, setCurrentPageNo] = useState(1);

    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [photoUrl, setPhotoUrl] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=12`);

    function nexturl() {
        if (currentPageNo < maximumPages) {
            return `https://api.slingacademy.com/v1/sample-data/photos?offset=${12 * currentPageNo}&limit=12`;
        } else {
            return null;
        }
    }

    function prevurl() {
        if (currentPageNo > 1 && currentPageNo < 12) {
            return `https://api.slingacademy.com/v1/sample-data/photos?offset=${12 * (currentPageNo - 2)}&limit=12`;
        } else {
            return null;
        }
    }

    async function downloadPhotos() {
        setIsLoading(true);

        const response = await axios.get(photoUrl);
        console.log("response", response);

        const photosResult = response.data.photos;
        console.log("photosresult", photosResult);

        console.log("currentpageno1", currentPageNo);
        setNextUrl(nexturl());
        setPrevUrl(prevurl());

        setPhotoList(photosResult);
        setIsLoading(false);
    }
    useEffect(() => {
        downloadPhotos();
    }, [photoUrl]);

    return (
        <div className="photos-list-wrapper">
            <div className="photo-wrapper">{isLoading ? "Loading..." : photoList.map((p) => <Photo url={p.url} key={p.id} id={p.id} />)}</div>
            <div className="controls">
                <button
                    disabled={prevUrl == null}
                    onClick={() => {
                        setCurrentPageNo(currentPageNo - 1);
                        setPhotoUrl(prevUrl);
                    }}
                >
                    Prev
                </button>

                <button
                    disabled={nextUrl == null}
                    onClick={() => {
                        setCurrentPageNo(currentPageNo + 1);
                        setPhotoUrl(nextUrl);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
export default PhotoList;
