import { Modal } from 'react-bootstrap';
import FormButton from '../button/FormButton.js';
import FormInput from '../inputs/FormInput.js'
import FormSelect from '../select/FormSelect.js';

function FormModalEditCategory({ title, clickSave, options, handleOnEdit, showModal, closeModal, value}) {
    const {name, type} = value || {};

    return(
        <>
            <Modal show={showModal} onHide={closeModal} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormInput
                    type="text"
                    label="Categoria"
                    name="name"
                    placeholder="Digite a categoria"
                    defaultValue={name}
                    handleOnChange={e => handleOnEdit({name: e.target.value})}
                />
                <FormSelect
                    label="Tipo"
                    name="tipo"
                    options={options}
                    defaultValue={type}
                    handleOnChange={e => handleOnEdit({type: e.target.value})}
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