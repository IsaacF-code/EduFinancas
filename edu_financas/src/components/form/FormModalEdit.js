import { Modal } from 'react-bootstrap';
import FormButton from './FormButton.js';
import { useState } from 'react';
import FormInput from './inputs/FormInput.js'
import FormInputCurrency from './inputs/FormInputCurrency.js';

function FormModalEdit({ title, clickSave, value, handleOnEdit, showModal, closeModal}) {
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
                    value={entrada}
                    handleOnChange={e => {handleOnEdit({...value, entrada: e.target.value})}} 
                />
                <FormInput 
                    type="text"
                    label="E-mail"
                    name="email"
                    placeholder="Digite o email"
                    value={email}
                    handleOnChange={e => {handleOnEdit({...value, email: e.target.value})}}
                />
                <FormInputCurrency 
                    label="Valor"
                    name="valor"
                    value={valor}
                    handleOnChange={e => {handleOnEdit({...value, valor: e.target.value})}}
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