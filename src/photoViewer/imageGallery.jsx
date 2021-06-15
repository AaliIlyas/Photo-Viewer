import ImageUrls from './imageSelector';
import { useHistory } from "react-router-dom";

function ImageGallery() {
    const imageIDs = [];

    ImageUrls.forEach((url) => imageIDs.push(url.match(/[0-9]../g)[0]));
    const history = useHistory();
    const galleryImgs = ImageUrls.map((url, i) => 
        <img role="thumbnail" key={i} data-testid={i} className="thumbnail" src={url} onClick={() => {
            history.push(`/images/${imageIDs[i]}`) }}/>
    );
    // window.history.replaceState(null, null, `/images/${imageIDs[i]}`) }}/>
    // );

    return (
        <div>
            {galleryImgs}
        </div>
    );
}

export { ImageGallery };