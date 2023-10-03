import AnalyseRoomImage from '../images/salle-analyse.png'
import { ImageMap } from '@qiuz/react-image-map'
import ModalWindow from './ModalWindow'
import '../style/room.css'
import carnetOrdre from '../images/carnet_ordre.png'
import postItAnalyse from '../images/post_it_3007.png'
import solution from '../secret/solution'

function AnalyseRoom({
    isOpen,
    setIsOpen,
    closeModal,
    isPcAnalyse,
    setIsPcAnalyse,
    isAffiche,
    setIsAffiche,
    requirePassword,
    setRequirePassword
}) {
    const mapArea = [
        /*PC ecran blanc*/
        {
            width: '10.186199342825848%',
            height: '10.9375%',
            left: '72.17449342825847%',
            top: '49.4140625%'
        },
        /*Affiches sur mur*/
        {
            width: '23.484848484848484%',
            height: '18.91891891891892%',
            left: '61.89157196969697%',
            top: '29.18918918918919%'
        }
    ]

    const onMapClick = (area, index) => {
        setIsOpen(true)
        if (index === 0) {
            setIsPcAnalyse(true)
            setRequirePassword(true)
            setIsOpen(true)
        }
        if (index === 1) {
            setIsAffiche(true)
            setIsOpen(true)
        }
    }

    const pcContent = (
        <div>
            <h1>Notes de recherches</h1>
            <h2>[Jour 1]</h2>
            <p>
                Aujourd'hui marque le début de nos expériences sur le virus X afin de trouver un antidote efficace pour
                contrer les effets dévastateurs de cette souche virale particulièrement dangereuse. Les premières
                expériences débutent demain. Nous devons être prudents et méthodiques dans nos recherches. Chaque détail
                compte. Je garde espoir que nous pourrons identifier la composition de l'antidote à temps pour prévenir
                une catastrophe.
            </p>
            <p>Dr …</p>

            <h2>[Jour 12]</h2>
            <p>
                Nos progrès sont lents mais nous arrivons peu à peu à isoler certains composants pouvant composer
                l'antidote. Il semblerait que 4 éléments soient nécessaires à sa réalisation. Cependant, à ce stade de
                recherche nous hésitons entre le Flumazénil et le Naloxone comme composant du remède. Nous avons
                également découvert que le temps joue contre nous. Les échantillons du Virus X se transforment
                rapidement, devenant de plus en plus résistants aux traitements. L'urgence est palpable, et nous sommes
                en compétition contre la montre pour trouver l'antidote.
            </p>

            <h2>[Jour 16]</h2>
            <p>
                C'est un jour sombre pour l'équipe. Le chef du laboratoire a été infecté lors d'une expérience
                malheureuse. Nous n'avons plus que quelques heures pour trouver l'antidote, sinon nous courons tous un
                grave danger. Le temps presse, et je crains que nous ne soyons à court de temps.
            </p>

            <h2>[Jour 25]</h2>
            <p>
                Aujourd'hui est un grand jour, nous avons fait une découverte majeure ! Nos recherches ont enfin porté
                leurs fruits et nous avons réussi à identifier un ingrédient majeur de l'antidote. Ce composant est le
                Naloxone. Nous savons maintenant qu'associé à 3 autres ingrédients dans des proportions bien précises
                nous pourrons développer un remède.
            </p>
        </div>
    )

    const affichesContent = (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={carnetOrdre}></img>
            <img src={postItAnalyse}></img>
        </div>
    )

    return (
        <div>
            <ImageMap className="usage-map" src={AnalyseRoomImage} map={mapArea} onMapClick={onMapClick} />
            <h2 id="room-title">Salle d'analyses</h2>
            {(isOpen && isPcAnalyse && (
                <ModalWindow
                    content={pcContent}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    requirePassword={requirePassword}
                    setRequirePassword={setRequirePassword}
                    password={solution.passwordPcAnalyse}
                />
            )) ||
                (isOpen && isAffiche && (
                    <ModalWindow
                        content={affichesContent}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        requirePassword={requirePassword}
                    />
                ))}
        </div>
    )
}

export default AnalyseRoom
