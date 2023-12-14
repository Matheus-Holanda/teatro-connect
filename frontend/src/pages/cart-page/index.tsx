import { Headline, Header } from '../dashboard/style';
import {Container} from './style';
import { YellowBtn } from '../theater-page/style';
import TeatrosCard from '../../components/teatros-card';
import { useContext } from 'react';
import { GeneralContext } from '../../contexts/general.context';
import Navbar from '../../components/nav-tab';
import { useNavigate } from 'react-router-dom';

export default function CartPage(){

    const {hasCart} = useContext(GeneralContext);
    const navigate = useNavigate();

    function render(){
        if(hasCart){
            return (
                <>
                <h3 style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    margin: '.1em 1em'
                }}>Local</h3>
                <TeatrosCard 
                        imagem='https://live.staticflickr.com/8061/8289053718_8f97db4fc2_z.jpg'
                        nomeTeatro='Teatro Ferreira Gullar'
                        distancia='4,9 KM'
                        nivelPreco='$$$'
                        avaliacao='4,89'
                        />
                    <h3  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    margin: '.1em 1em'
                }}>Evento</h3>
                    <TeatrosCard 
                        imagem='https://www.fodors.com/wp-content/uploads/2017/12/cats-hero.jpg'
                        nomeTeatro='CATS (Classicos)'
                        distancia='Val 15/12/23'
                        nivelPreco='R$54,99'
                        avaliacao='5'
                        />
                <YellowBtn onClick={()=>navigate('/pgto-ok')}>Finalizar pagamento (R$54,99)</YellowBtn>
                </>
            )
        }else{
            return (<>
                <h3 style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Ops!</h3>
                <p style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    textAlign: 'center'
                }}>Você ainda não tem nada no carrinho...</p>
            </>)
        }
    }

    return (
        <Container>
            <Header>
                <Headline>Carrinho</Headline>
            </Header>
            {render()}
            <Navbar selected={2}/>
        </Container>
    )
}