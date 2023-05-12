import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';

function FormModalConfirm({ title, clickSave, showModal, closeModal }) {
    return(
        <>
            <Modal show={showModal} onHide={closeModal} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <FormButton 
                        btnText="Não"
                        variant="secondary"
                        click={closeModal}
                    />
                    <FormButton 
                        btnText="Sim"
                        variant="success"
                        click={clickSave}
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FormModalConfirm;