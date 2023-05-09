import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';
import { useState } from 'react';
import FormInput from './inputs/FormInput.js'
import FormInputCurrency from './inputs/FormInputCurrency.js';

function FormModal({ title, clickSave, value, value1, value2, handleOnChange, handleOnChange1, handleOnChange2 }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    value={value}
                    handleOnChange={handleOnChange}
                // value={entrada}
                // handleOnChange={e => setEntrada(e.target.value)}
                />
                {/* <span>{entrada}</span> */}
                <FormInput 
                    type="text"
                    label="E-mail"
                    name="email"
                    placeholder="Digite o email"
                    value={value}
                    handleOnChange={handleOnChange}
                    //value={email}
                    //handleOnChange={e => setEmail(e.target.value)}
                />
                {/* <span>{email}</span> */}

                <FormInputCurrency 
                    label="Valor"
                    value={value}
                    handleOnChange={handleOnChange}
                    //value={valor}
                    //handleOnChange={e => setValor(e.target.value)}
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