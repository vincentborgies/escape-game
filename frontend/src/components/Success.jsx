import Modal from 'react-modal'
import '../style/messages.css'
import { useNavigate } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Success({ success, isOpenSuccess, setIsOpenSuccess, gameOver, setIsOpen }) {
    const { width, height } = useWindowSize()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        setIsOpenSuccess(false)
        setIsOpen(false)
        navigate('/')
    }

    const congratulations = (
        <div className="containerMessage">
            <Confetti width={width} height={height} />
            <p className="congratzFin">Félicitations</p>
            <button role="button" className="button-82-pushable" onClick={handleClick}>
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Retourner à l'accueil</span>
            </button>
        </div>
    )

    const gameOverScreen = (
        <div className="containerMessage">
            <p className="GameOver">Game Over</p>
            <button role="button" className="button-2-pushable" onClick={handleClick}>
                <span className="button-2-shadow"></span>
                <span className="button-2-edge"></span>
                <span className="button-2-front text">Retourner à l'accueil</span>
            </button>
        </div>
    )

    const Content = () => {
        if (success) {
            return congratulations
        }
        if (gameOver) {
            return gameOverScreen
        }
    }

    return (
        <Modal
            isOpen={isOpenSuccess}
            ariaHideApp={false}
            onRequestClose={close}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fond de l'arrière-plan de la modal (transparent)
                },
                content: {
                    backgroundColor: 'transparent', // Fond de la modal (transparent)
                    border: 'none' // Supprime la bordure
                }
            }}
        >
            {<Content />}
        </Modal>
    )
}

export default Success
