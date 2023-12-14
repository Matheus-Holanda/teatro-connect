import { Container } from "./style";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/general.context";
import toast from "react-hot-toast";

export default function PagamentoFinalizado(){

    const {setTickets} = useContext(GeneralContext);
    const navigate = useNavigate();

    setTimeout(()=>{
        setTickets(1);
        navigate("/history");
        toast.success('Estamos processando sua solicitação, prepare a pipoca por enquanto...')
    }, 3000);

    return (
        <Container>
            <IoMdCheckmarkCircle style={{
                color: 'white',
                fontSize: '2em'
            }} />
            <h3 style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>Pagamento finalizado</h3>
        </Container>
    )
}