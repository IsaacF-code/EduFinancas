import { Modal } from 'react-bootstrap';
import FormButton from '../button/FormButton.js';
import FormInput from '../inputs/FormInput.js'
import FormInputCurrency from '../inputs/FormInputCurrency.js';
import FormSelect from '../select/FormSelect.js';

function FormModalEntry({ title, clickSave, value, typeOption, categoryOption, showModal, closeModal, handleOnChange}) {
    const {entrada, valor, tipo, estabelecimento, categoria} = value || {};

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
                    handleOnChange={e => handleOnChange({...value, entrada: e.target.value})}
                />
                <FormInputCurrency 
                    label="Valor"
                    name="valor"
                    value={valor}
                    handleOnChange={e => handleOnChange({...value, valor: e.target.value})}
                />
                <FormSelect 
                    label="Selecione o tipo"
                    name="entrada"
                    options={typeOption}
                    value={tipo ? tipo : ''}
                    handleOnChange={e => handleOnChange({...value, tipo: e.target.value})}
                />
                <FormSelect 
                    label="Selecione a categoria"
                    name="categoria"
                    options={categoryOption}
                    value={categoria ? categoria : ''}
                    handleOnChange={e => handleOnChange({...value, categoria: e.target.value})}
                />
                {/* <FormSelect 
                    label="Selecione o estabelecimento"
                    name="estabelecimento"
                    options={options}
                    value={estabelecimento}
                    handleOnChange={e => handleOnChange({...value, estabelecimento: e.target.value})}
                /> */}
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

export default FormModalEntry;