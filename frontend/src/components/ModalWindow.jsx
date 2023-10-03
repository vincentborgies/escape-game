import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import RequirePassword from './requirePassword'

function ModalWindow({ content, isOpen, closeModal, requirePassword, setRequirePassword, password }) {
    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={closeModal}
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
                onClick={closeModal}
            >
                <FontAwesomeIcon icon={faXmark} beatFade style={{ justifyContent: 'flex-end' }} />
                <span style={{ fontSize: '20px', fontWeight: '600', paddingLeft: '5px' }}>fermer</span>
            </div>
            {requirePassword ? (
                <RequirePassword setRequirePassword={setRequirePassword} password={password} />
            ) : (
                content
            )}
        </Modal>
    )
}

export default ModalWindow
