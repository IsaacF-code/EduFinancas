import { Table } from "react-bootstrap";
import ItemTable from "./ItemTable";

function FormTable({ striped, bordered, hover, size, variant, data, onEdit, onDelete }) {
    // Mapeia o array de objetos e retorna um array com os nomes das colunas
    // excluindo o id
    const colunm = Object.keys(data[0] || {}).filter((colunm) => colunm !== "id");
    
    // Mapeia as colunas e retorna um th com o nome da coluna
    // Caso o nome da coluna não esteja no objeto novosNomes, retorna o nome da coluna com a primeira letra maiúscula
    const novosNomes = {
        entrada: "Nome",
        email: "E-mail"
    };

    const colunmTable = colunm.map((key) => (
        <th key={key}>
            {novosNomes[key] || key.charAt(0).toUpperCase() + key.slice(1)}
        </th>
    ));
    
    // -------

    const itemTable = data.map((value) => (
        <ItemTable 
            key={value.id} 
            name={value.entrada} 
            email={value.email} 
            valor={value.valor} 
            data={value.id} 
            onEdit={onEdit} 
            onDelete={onDelete} 
        />
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
                {data.length > 0 ? itemTable : ( 
                    <tr>
                        <td colSpan={colunm.length + 1}>
                            Nenhum registro encontrado
                        </td>
                    </tr>
                )}
            </tbody>       
           
        </Table>
    )
}

export default FormTable;