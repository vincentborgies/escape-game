import ArchieveRoomImage from '../images/salle-archives.png'
import { ImageMap } from '@qiuz/react-image-map'

function ArchieveRoom() {
    const mapArea = [
        {
            width: '10.561056105610561%',
            height: '10.882352941176471%',
            left: '72.06923796398806%',
            top: '49.117647058823536%'
        }
    ]

    return (
        <div>
            <ImageMap className="usage-map" src={ArchieveRoomImage} map={mapArea} />
        </div>
    )
}

export default ArchieveRoom
