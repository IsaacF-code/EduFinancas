import { Table } from "react-bootstrap";

function Tablle({ striped, bordered, hover, size, variant, responsive }) {
    return(
        <Table 
            striped={striped} 
            border={bordered}
            hover={hover}
            size={size}
            variat={variant}
            >
        </Table>
    )
}

export default Tablle;