import homeImage from '../images/accueil.png'
import '../style/game-intro.css'

function GameIntro({ Link, navigate }) {
    const handleClick = () => {
        navigate('choose-room')
    }

    return (
        <div>
            <img className='img1' src={homeImage} alt="" />
            <h1 className='title-intro'>Bienvenue dans le Laboratoire Maudit</h1>
            <div className="box-intro">
                <div className="container-intro">
                    <div className="regles">
                        <h2>Règles du jeu</h2>
                        <ul>
                            <li> L'escape game se joue en équipe de 4 : vous avez 1h pour trouver l'antidote </li>
                            <li>Vous devez fouiller minutieusement votre salle pour découvrir les indices </li>
                            <li>
                                Communiquez entre vous : la communication est essentielles pour résoudre les énigmes{' '}
                            </li>
                            <li>
                                N'hésitez pas à utilisez les indices signalés par une petite ampoule si vous êtes en
                                difficulté
                            </li>
                        </ul>
                    </div>
                    <div className="materiel">
                        <h2>Matériel</h2>
                        <ul>
                        <li>Un ordinateur</li> 
                        <li>De quoi prendre des notes si nécessaire</li> 
                        <li>Un moyen de communiquer avec vos co-équipiers : Discord, skype etc. Privilégiez une communication audio si vous le pouvez.</li>
                        </ul>
                    </div>
                    <div className="scenario">
                        <h2>Scénario</h2>
                        <p>
                            Vous faites partie d'une équipe de quatre chercheurs au sein d'un laboratoire expérimentant
                            sur l'un des virus les plus dangereux au monde. Lors d'une expérience de routine, votre chef
                            fait une erreur fatale et se retrouve infecté. Au cours de vos recherches, vous avez pu
                            déterminer qu'une fois infecté, il ne reste qu'une heure avant que la mutation ne commence,
                            mettant en danger toute votre équipe. Vous devez donc absolument trouver la recette de
                            l'antidote permettant de stopper la propagation du virus et vous échapper avant qu'il ne
                            soit trop tard. Choisissez une salle pour commencer votre mission.
                        </p>
                    </div>
                </div>
            </div>
            <div className="play">
                <Link to={'/choose-room'} onClick={handleClick}>
                    <h3>commencer le jeu</h3>
                </Link>
            </div>
        </div>
    )
}

export default GameIntro
