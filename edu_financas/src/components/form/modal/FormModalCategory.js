import { Modal } from 'react-bootstrap';
import FormButton from '../button/FormButton.js';
import { useState } from 'react';
import FormInput from '../inputs/FormInput.js'
import  FormSelect  from '../select/FormSelect.js';

function FormModalCategory({ title, clickSave, value, options, handleOnChange}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {name} = value || {name: ''}; // se value for nulo, o name será nulo

    return(
        <>
           <div style={{marginBottom: '20px'}}>
           <FormButton 
                btnText="Nova Categoria"
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
                    label="Categoria"
                    name="name"
                    placeholder="Digite uma nova categoria"
                    value={name}
                    handleOnChange={e => handleOnChange({...value, name: e.target.value})}
                />
                <FormSelect
                    label="Tipo"
                    name="tipo"
                    options={options}
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

export default FormModalCategory;