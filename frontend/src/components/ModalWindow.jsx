import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ModalWindow({ content, isOpen, closeModal }) {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div style={{ display: 'flex', width: '100%' }}>
                <FontAwesomeIcon
                    icon={faXmark}
                    beatFade
                    style={{ color: '#fb0e0e', cursor: 'pointer', justifyContent: 'flex-end' }}
                    onClick={closeModal}
                />
            </div>
            {content}
        </Modal>
    )
}

export default ModalWindow
