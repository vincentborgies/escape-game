import ReserveImage from '../images/reserve.png'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'
import ModalWindow from './ModalWindow'
import solution from '../secret/solution'

/*Imports images etagere*/
import helpAnalyse from '../images/help_analyse.png'
import papierMdpReserve from '../images/mdp_2579.png'

/*Import images boite*/
import carnetOrdre from '../images/carnet_ordre_p1_3241_dyphixine.png'

function ReserveRoom({
    setIsOpen,
    isOpen,
    closeModal,
    isBoite,
    setIsBoite,
    isEtagere,
    setIsEtagere,
    requirePassword,
    setRequirePassword
}) {
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

    const boite = (
        <div>
            <img src={carnetOrdre}></img>
        </div>
    )

    const etagere = (
        <div>
            <img src={helpAnalyse} style={{ width: '50%' }}></img>
            <img src={papierMdpReserve} style={{ width: '50%' }}></img>
        </div>
    )

    return (
        <div>
            <ImageMap className="usage-map" src={ReserveImage} map={mapArea} onMapClick={onMapClick} />
            <h2 id="room-title">Salle de reserve</h2>
            {(isOpen && isBoite && (
                <ModalWindow
                    content={boite}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    requirePassword={requirePassword}
                    setRequirePassword={setRequirePassword}
                    password={solution.passwordCasierReserve}
                />
            )) ||
                (isOpen && isEtagere && (
                    <ModalWindow
                        content={etagere}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        requirePassword={requirePassword}
                    />
                ))}
        </div>
    )
}

export default ReserveRoom
