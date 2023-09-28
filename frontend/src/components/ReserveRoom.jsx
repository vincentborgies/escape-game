import ReserveImage from '../images/reserve.png'
import { ImageMap } from '@qiuz/react-image-map'

function ReserveRoom() {
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
            <ImageMap className="usage-map" src={ReserveImage} map={mapArea} />
        </div>
    )
}

export default ReserveRoom
