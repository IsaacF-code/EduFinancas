import { Modal } from 'react-bootstrap';
import FormButton from '../button/FormButton.js';
import FormInput from '../inputs/FormInput.js'

function FormModalEditCategory({ title, clickSave, handleOnEdit, showModal, closeModal, value}) {
    const {name} = value || {};

    return(
        <>
            <Modal show={showModal} onHide={closeModal} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormInput
                    type="text"
                    label="Entrada"
                    name="entrada"
                    placeholder="Digite a receita ou despesa"
                    defaultValue={name}
                    handleOnChange={e => handleOnEdit({name: e.target.value})}
                />
                </Modal.Body>
                <Modal.Footer>
                    <FormButton 
                        btnText="Fechar"
                        variant="secondary"
                        click={closeModal}
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

export default FormModalEditCategory;