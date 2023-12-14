import {BackHeader as Main} from './style'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


export default function BackHeader({mensagem} : {mensagem: string}) {

    const navigate = useNavigate();

    return (
        <Main>
            <IoIosArrowBack onClick={()=>navigate(-1)} style={{
                color: 'white',
                fontSize: '1.6em'
            }} />
            <h1>{mensagem}</h1>
        </Main>
    )
}