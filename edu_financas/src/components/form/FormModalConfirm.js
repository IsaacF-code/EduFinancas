import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';
import { useState } from 'react';

function FormModalConfirm({ title, clickSave }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <FormButton 
                btnText="Abrir modal"
                variant="primary"
                click={handleShow}    
            /> 

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <FormButton 
                        btnText="Fechar"
                        variant="secondary"
                        click={handleClose}
                    />
                    <FormButton 
                        btnText="Salvar"
                        variant="success"
                        click={clickSave}
                    />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FormModalConfirm;