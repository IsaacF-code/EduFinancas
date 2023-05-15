import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';
import FormInput from './inputs/FormInput.js'
import FormInputCurrency from './inputs/FormInputCurrency.js';

function FormModalEdit({ title, clickSave, handleOnEdit, showModal, closeModal, value}) {
    const {entrada, email, valor} = value || {};

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
                    defaultValue={entrada}
                    handleOnChange={e => handleOnEdit({entrada: e.target.value})}
                />
                <FormInput 
                    type="text"
                    label="E-mail"
                    name="email"
                    placeholder="Digite o email"
                    defaultValue={email}
                    handleOnChange={e => handleOnEdit({email: e.target.value})}

                />
                <FormInputCurrency 
                    label="Valor"
                    name="valor"
                    defaultValue={valor}
                    handleOnChange={e => handleOnEdit({valor: e.target.value})}
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

export default FormModalEdit;