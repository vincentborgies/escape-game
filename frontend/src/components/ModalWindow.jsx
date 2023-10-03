import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import RequirePassword from './requirePassword'

function ModalWindow({ content, isOpen, closeModal, requirePassword, setRequirePassword, password }) {


    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div style={{ display: 'flex', width: '100%', color: '#fb0e0e', cursor: 'pointer' }} onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} beatFade style={{ justifyContent: 'flex-end' }} />
                <span>fermer</span>
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
