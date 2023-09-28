import AnalyseRoomImage from '../images/salle-analyse.png'
import { ImageMap } from '@qiuz/react-image-map'
import ModalWindow from './ModalWindow'

function AnalyseRoom({ isOpen, setIsOpen, closeModal }) {
    const mapArea = [
        {
            width: '10.561056105610561%',
            height: '10.882352941176471%',
            left: '72.06923796398806%',
            top: '49.117647058823536%'
        }
    ]

    const onMapClick = () => {
        setIsOpen(true)
    }

    const content = <div>hello world</div>

    return (
        <div>
            <ImageMap className="usage-map" src={AnalyseRoomImage} map={mapArea} onMapClick={onMapClick} />
            {isOpen ? <ModalWindow content={content} isOpen={isOpen} closeModal={closeModal} /> : ''}
        </div>
    )
}

export default AnalyseRoom
