import {Container, Lista, Item} from './style'
import BackHeader from '../../components/centered-header'
import { useContext } from 'react'
import { GeneralContext } from '../../contexts/general.context'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function SelectCidade(){

    const navigate = useNavigate();


    function defineCidade(city: string){
        setCidade(city);
        toast.success(`Cidade alterada para ${city}`);
        navigate(-1);
    }

    const { cidade, setCidade } = useContext(GeneralContext);
    const cidades: string[] = ["Açailândia", "Imperatriz", "São Luis", "Grajaú"];
    return (
        <Container>
            <BackHeader mensagem='Selecione a cidade' />
            <Lista>
                { cidades.map((city)=>{
                    return (
                        <Item key={city} ativa={city === cidade ? true : false}
                            onClick={()=>defineCidade(city)}
                        >{city}</Item>
                    )
                })}
            </Lista>
        </Container>
    )
}