import ReserveImage from '../images/reserve.png'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'
import ModalWindow from './ModalWindow'

function ReserveRoom({ setIsOpen, isOpen, closeModal, isBoite, setIsBoite, isEtagere, setIsEtagere }) {
    const mapArea = [
        {
            /*Boite a droite*/ width: '8.90909090909091%',
            height: '23.35135135135135%',
            left: '46.96969696969697%',
            top: '54.59459459459459%'
        },
        {
            /*Etagere a gauche*/ width: '8.90909090909091%',
            height: '23.35135135135135%',
            left: '36.96969696969697%',
            top: '54.324324324324316%'
        }
    ]

    const onMapClick = (area, index) => {
        if (index === 0) {
            setIsBoite(true)
            setIsOpen(true)
        }
        if (index === 1) {
            setIsEtagere(true)
            setIsOpen(true)
        }
    }

    const boite = <h1>boite</h1>

    const etagere = <h1>etagere</h1>

    return (
        <div>
            <ImageMap className="usage-map" src={ReserveImage} map={mapArea} onMapClick={onMapClick} />
            <h2 id="room-title">Salle de reserve</h2>
            {(isOpen && isBoite && <ModalWindow content={boite} isOpen={isOpen} closeModal={closeModal} />) ||
                (isOpen && isEtagere && <ModalWindow content={etagere} isOpen={isOpen} closeModal={closeModal} />)}
        </div>
    )
    /*
    return (
        <div>
            <ImageMap
                id="room-image"
                className="usage-map"
                src={ReserveImage}
                map={mapArea}
                onMapClick={onMapClick}
            />
            <h2 id="room-title">Salle d'archives</h2>
            {(isOpen && isBoite && <ModalWindow content={boite} isOpen={isOpen} closeModal={closeModal} />) ||
                (isOpen && isEtagere && <ModalWindow content={etagere} isOpen={isOpen} closeModal={closeModal} />)}
        </div>
    )
    */
}

export default ReserveRoom
