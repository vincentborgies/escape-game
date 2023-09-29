import ArchieveRoomImage from '../images/salle-archives.png'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'
import ModalWindow from './ModalWindow'

function ArchieveRoom({ setIsOpen, isOpen, closeModal, isClasseur, setIsClasseur, isCommode, setIsCommode }) {
    const mapArea = [
        {
            /*Classeur blanc*/
            width: '13.15151515151515%',
            height: '9.02702702702703%',
            left: '36.54545454545454%',
            top: '58.37837837837838%'
        },
        {
            /*Commode noire*/
            width: '23.454545454545457%',
            height: '22.81081081081081%',
            left: '71.99999999999999%',
            top: '63.51351351351351%'
        }
    ]

    const onMapClick = (area, index) => {
        if (index === 0) {
            setIsClasseur(true)
            setIsOpen(true)
            console.log(`classeur : ${isClasseur}`)
            console.log(`commode : ${isCommode}`)
        }
        if (index === 1) {
            setIsCommode(true)
            setIsOpen(true)
            console.log(`commode : ${isCommode}`)
            console.log(`commode : ${isCommode}`)
        }
    }

    const classeur = <h1>classeur</h1>

    const commode = <h1>commode</h1>

    return (
        <div>
            <ImageMap
                id="room-image"
                className="usage-map"
                src={ArchieveRoomImage}
                map={mapArea}
                onMapClick={onMapClick}
            />
            <h2 id="room-title">Salle d'archives</h2>
            {(isOpen && isClasseur && <ModalWindow content={classeur} isOpen={isOpen} closeModal={closeModal} />) ||
                (isOpen && isCommode && <ModalWindow content={commode} isOpen={isOpen} closeModal={closeModal} />)}
        </div>
    )
}

export default ArchieveRoom
