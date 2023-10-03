import ArchieveRoomImage from '../images/salle-archives.png'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'
import ModalWindow from './ModalWindow'
import solution from '../secret/solution'

/*Imports images classeur blanc*/

import mdpP2 from '../images/mdp_p2.png'
import mdpDate from '../images/mdp_280923.png'

/*Imports images casier noir*/
import doc2 from '../images/document_2.png'
import doc3 from '../images/document_3.png'
import doc4 from '../images/document_4.png'
import doc5 from '../images/document_5_Capsanil.png'
import doc6 from '../images/document_6.png'

function ArchieveRoom({
    setIsOpen,
    isOpen,
    closeModal,
    isClasseur,
    setIsClasseur,
    isCommode,
    setIsCommode,
    requirePassword,
    setRequirePassword
}) {
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
            setRequirePassword(true)
            setIsOpen(true)
            console.log(`commode : ${isCommode}`)
            console.log(`commode : ${isCommode}`)
        }
    }

    const commode = (
        <div>
            <img src={doc2} style={{ width: '50%' }}></img>
            <img src={doc3} style={{ width: '50%' }}></img>
            <img src={doc4} style={{ width: '50%' }}></img>
            <img src={doc5} style={{ width: '50%' }}></img>
            <img src={doc6} style={{ width: '50%' }}></img>
        </div>
    )

    const classeur = (
        <div>
            <img src={mdpP2} style={{ width: '50%' }}></img>
            <img src={mdpDate} style={{ width: '50%' }}></img>
        </div>
    )

    return (
        <div>
            <ImageMap
                id="room-image"
                className="usage-map"
                src={ArchieveRoomImage}
                map={mapArea}
                onMapClick={onMapClick}
            />
            {!isOpen && <h2 id="room-title">Salle d'archives</h2>}
            {(isOpen && isClasseur && (
                <ModalWindow
                    content={classeur}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    requirePassword={requirePassword}
                />
            )) ||
                (isOpen && isCommode && (
                    <ModalWindow
                        content={commode}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        requirePassword={requirePassword}
                        setRequirePassword={setRequirePassword}
                        password={solution.passwordCasierArchives}
                    />
                ))}
        </div>
    )
}

export default ArchieveRoom
