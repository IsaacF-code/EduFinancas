import { Table } from "react-bootstrap";

function ItemTable (){
    return(
        <>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>1</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td>2</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td>3</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Item 4</td>
                    <td>4</td>
                    <td>40</td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default ItemTable;