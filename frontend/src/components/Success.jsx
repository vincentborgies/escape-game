import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Success({ success, timerIsOver, isOpenSuccess, setIsOpenSuccess, displaySuccess }) {
    const congratulations = (
        <div>
            <iframe
                src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5"
                width="480"
                height="400"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
        </div>
    )

    const fail = (
        <img
            id="playOnce"
            src="https://media.giphy.com/media/l0ErQ2UfBNFEIlqjC/giphy.gif"
            style={{ animationIterationCount: 1, animationDuration: '1.5s' }}
        />
    )

    const close = () => {
        setIsOpenSuccess(false)
        displaySuccess(false)
    }

    return (
        <Modal
            isOpen={isOpenSuccess}
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
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    color: '#fb0e0e',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '600'
                }}
                onClick={close}
            >
                <FontAwesomeIcon icon={faXmark} beatFade style={{ justifyContent: 'flex-end' }} />
                <span style={{ fontSize: '20px', fontWeight: '600', paddingLeft: '5px' }}>fermer</span>
            </div>
            {success ? congratulations : fail}
        </Modal>
    )
}

export default Success
