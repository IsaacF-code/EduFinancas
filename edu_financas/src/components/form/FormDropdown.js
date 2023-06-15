import { Dropdown } from "react-bootstrap";

function FormDropdown({ clickR, clickD }) {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Novo
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={clickR}>Receita</Dropdown.Item>
                <Dropdown.Item onClick={clickD}>Despesa</Dropdown.Item> 
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FormDropdown;