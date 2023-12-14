import {Container} from './style'
import { BiHome } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export default function Navbar({selected} : {selected: number}){

    const navigate = useNavigate();

    return (
        <Container>
            <BiHome onClick={()=>navigate('/home')} style={{
                color: selected === 0 ? '#FFC740' : '#5E649D'
            }} />
            <FaRegListAlt onClick={()=>navigate('/history')} style={{
                color: selected === 1 ? '#FFC740' : '#5E649D'
            }} />
            <LuShoppingBasket onClick={()=>navigate('/cart')} style={{
                color: selected === 2 ? '#FFC740' : '#5E649D'
            }} />
        </Container>
    )
}