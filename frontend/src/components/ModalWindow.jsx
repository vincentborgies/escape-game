import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ModalWindow({ content, isOpen, closeModal }) {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div style={{ display: 'flex', width: '100%', color: '#fb0e0e', cursor: 'pointer' }} onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} beatFade style={{ justifyContent: 'flex-end' }} />
                <span>fermer</span>
            </div>
            {content}
        </Modal>
    )
}

export default ModalWindow
