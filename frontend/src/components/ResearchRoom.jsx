import ResearchRoomImage from '../images/salle-recherche.png'
import ModalWindow from './ModalWindow'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'
import Form from './Form'
import Timer from './timer'
import Success from './Success'
import solution from '../secret/solution'
import { useState } from 'react'

/*Imports images cote bureau*/
import docCensure from '../images/document_censure_1.png'
import papierMdp from '../images/papier_mdp_1399_p1.png'

function ResearchRoom({
    isOpen,
    setIsOpen,
    closeModal,
    isRemede,
    setIsRemede,
    isPcResearch,
    setIsPcResearch,
    isCotePc,
    setIsCotePc,
    requirePassword,
    setRequirePassword
}) {
    const [gameOver, setGameOver] = useState(false)
    const [isOpenSuccess, setIsOpenSuccess] = useState(false)

    const mapArea = [
        //coordonnées de l'endroit pour fabriquer le remède
        {
            width: '9.529025191675794%',
            height: '31.25%',
            left: '19.600561336254106%',
            top: '25.9765625%'
        },
        //coordonnées du pc
        {
            width: '5.115511551155116%',
            height: '7.058823529411764%',
            left: '51.60719175936759%',
            top: '43.23529411764705%'
        },
        //A cote du PC
        {
            width: '8.91812865497076%',
            height: '7.03125%',
            left: '42.02987938596491%',
            top: '43.22916666666667%'
        }
    ]

    const onMapClick = (area, index) => {
        if (index === 0) {
            setIsRemede(true)
            setIsOpen(true)
        }
        if (index === 1) {
            setIsPcResearch(true)
            setRequirePassword(true)
            setIsOpen(true)
        }
        if (index === 2) {
            setIsCotePc(true)
            setIsOpen(true)
        }
    }

    const pcContent = (
        <div className="note">
            <h1>Note de Dossier de Sécurité</h1>
            <h2>[Dossier N° : X4578L]</h2>
            <p>Objet: Stockage des ingrédients</p>
            <br />
            <p>
                Dans le cadre de nos procédures de sécurité strictes, nous tenons à rappeler l'importance du stockage
                des ingrédients dans le laboratoire. Nous rappelons que conformément aux réglementations en vigueur, les
                ingrédients doivent être conservés dans des conditions optimales pour garantir leur efficacité dans le
                processus de création de l'antidote.
            </p>
            <br />
            <p>
                1. Conformément au protocole de sécurité, la quantité actuelle d’<b>Hématosol</b> en stock est de{' '}
                <b>10</b> millilitres. Cette quantité est suffisante pour nos besoins immédiats, mais nous devrons
                maintenir un approvisionnement constant pour la suite de nos recherches.
            </p>
            <br />
            <p>
                2. Les ingrédients doivent être stockés dans un Contenant spécifique, conforme aux normes de sécurité.
                La température de stockage doit être maintenue entre 2°C et <b>30</b>°C en tout temps.
            </p>
            <br />

            <p>
                3. Nous rappelons également que tous les ingrédients (cent cinquante en stock) ne doivent jamais être
                exposés à des températures extrêmes ou à la lumière directe du soleil, car cela pourrait altérer leur
                stabilité.
            </p>
            <br />

            <p>
                4. La surveillance régulière des niveaux de l'ingrédient est cruciale pour éviter toute pénurie
                potentielle. Nous devons maintenir un stock d'au moins <b>10</b> millilitres pour garantir la poursuite
                de nos recherches.
            </p>
            <br />
            <p>
                5. La durée de conservation des ingrédients est de <b>50</b> jours après ouverture du flacon. Une fois
                cette période dépassée, tout reste de produit doit être éliminé de manière appropriée. Nous soulignons
                l'importance de ces directives pour la sécurité de notre équipe et la réussite de notre mission.
            </p>
        </div>
    )

    const pcCoteContent = (
        <div>
            <img src={docCensure} style={{ width: '50%' }}></img>
            <img src={papierMdp} style={{ width: '50%' }}></img>
        </div>
    )

    const remede = <Form setIsOpenSuccess={setIsOpenSuccess} isOpenSuccess={isOpenSuccess} setIsOpen={setIsOpen} />

    return (
        <>
            <ImageMap className="usage-map" src={ResearchRoomImage} map={mapArea} onMapClick={onMapClick} />
            {!isOpen && <h2 id="room-title">Salle de recherches</h2>}
            <Timer setGameOver={setGameOver} setIsOpenSuccess={setIsOpenSuccess} />
            {gameOver && (
                <Success gameOver={gameOver} isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} setIsOpen={setIsOpen} />
            )}
            {(isOpen && isRemede && (
                <ModalWindow
                    content={remede}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    requirePassword={requirePassword}
                />
            )) ||
                (isOpen && isPcResearch && (
                    <ModalWindow
                        content={pcContent}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        requirePassword={requirePassword}
                        setRequirePassword={setRequirePassword}
                        password={solution.passwordPcResearch}
                    />
                )) ||
                (isOpen && isCotePc && (
                    <ModalWindow
                        content={pcCoteContent}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        requirePassword={requirePassword}
                    />
                ))}
        </>
    )
}

export default ResearchRoom
