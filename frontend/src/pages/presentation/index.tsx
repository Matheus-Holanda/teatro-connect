import { Container, Headline } from "./styles";
import { useNavigate } from "react-router-dom";
import { FaMasksTheater } from "react-icons/fa6";


export default function PresentationPage(){

    const navigate = useNavigate();

    setTimeout(()=> {
        navigate('/home');
        return;
    }, 3000)

    return (
        <Container>
            <FaMasksTheater style={{
                color: "#ffc740",
                fontSize: "10em"
            }} />
            <Headline>TeatroConnect</Headline>
        </Container>
    )
}