import { useParams } from 'react-router-dom';
import { PhotoViewer } from './photoViewer';
import { ImageGallery } from './imageGallery';

const RenderPage = () => {
    const { id } = useParams();
    const url = id ? `https://picsum.photos/id/${id}/1600/900.jpg` : `https://picsum.photos/id/600/1600/900.jpg`;

    return (
        <div className="App">
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={url} />
            <h2>-- Gallery --</h2>
            <ImageGallery />
        </div>
    )
}

export { RenderPage };