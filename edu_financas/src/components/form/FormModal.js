import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';
import { useState } from 'react';
import FormInput from './inputs/FormInput.js'
import FormInputCurrency from './inputs/FormInputCurrency.js';

function FormModal({ title, clickSave, value, handleOnChange }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {entrada, email, valor} = value || {};

    return(
        <>
           <div style={{marginBottom: '20px'}}>
           <FormButton 
                btnText="Nova entrada"
                variant="primary"
                click={handleShow}    
            /> 
           </div>

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormInput
                    type="text"
                    label="Entrada"
                    name="entrada"
                    placeholder="Digite a receita ou despesa"
                    value={entrada}
                    handleOnChange={e => handleOnChange({...value, entrada: e.target.value})}
                />
                <FormInput 
                    type="text"
                    label="E-mail"
                    name="email"
                    placeholder="Digite o email"
                    value={email}
                    handleOnChange={e => handleOnChange({...value, email: e.target.value})} 
                />
                <FormInputCurrency 
                    label="Valor"
                    name="valor"
                    value={valor}
                    handleOnChange={e => handleOnChange({...value, valor: e.target.value})}
                />
                </Modal.Body>
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

export default FormModal;