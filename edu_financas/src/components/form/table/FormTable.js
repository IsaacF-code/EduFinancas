import { Table } from "react-bootstrap";
import ItemTable from "./ItemTable";

function FormTable({ striped, bordered, hover, size, variant, data }) {
    // Mapeia o array de objetos e retorna um array com os nomes das colunas
    // excluindo o id
    const colunm = Object.keys(data[0]).filter((colunm) => colunm !== "id");

    const itemTable = data.map((value) => (
        <ItemTable key={value.id} name={value.entrada} email={value.email} valor={value.valor} />
    ));
    
    const novosNomes = {
        entrada: "Nome",
        email: "E-mail"
    };

    // Mapeia as colunas e retorna um th com o nome da coluna
    // Caso o nome da coluna não esteja no objeto novosNomes, retorna o nome da coluna com a primeira letra maiúscula
    const colunmTable = colunm.map((key) => (
        <th key={key}>
            {novosNomes[key] || key.charAt(0).toUpperCase() + key.slice(1)}
        </th>
    ));

    return(
        <Table 
            striped={striped} 
            border={bordered}
            hover={hover}
            size={size}
            variat={variant}
            >
            <thead>
                <tr>
                    {colunmTable}
                </tr>
            </thead>
            <tbody> 
                {itemTable} 
            </tbody>       
           
        </Table>
    )
}

export default FormTable;