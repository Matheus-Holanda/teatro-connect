import {Card, Imagem, Informacoes} from './style'
import { FaStar } from "react-icons/fa6";


interface iTeatrosProps {
    imagem: string,
    nomeTeatro: string,
    distancia: string,
    nivelPreco: string,
    avaliacao: string
}



export default function TeatrosCard({imagem, nomeTeatro, distancia, nivelPreco, avaliacao} : iTeatrosProps){
    
    return (
        <Card>
            <Imagem src={imagem} alt={`Imagem de ${nomeTeatro}`} />
            <Informacoes>
                <div>
                    <h1>{nomeTeatro}</h1>
                </div>
                <div>
                    <p>{distancia}</p>
                    <p>{nivelPreco}</p>
                </div>
                <div>
                    <FaStar style={{
                        color: '#ffc740',
                        fontSize: '1em'
                    }} />
                    {avaliacao}
                </div>
            </Informacoes>
        </Card>
    )
}