import {Container, Header, Headline, Main, Section} from './style';
import { useNavigate } from 'react-router-dom';
import ListaTemas from '../../components/left-roll-storye';
import ListaFiltro from '../../components/left-roll-list';
import TeatrosCard from '../../components/teatros-card';
import Navbar from '../../components/nav-tab';
import { useContext } from 'react';
import { GeneralContext } from '../../contexts/general.context';

export default function DashboardPage(){

    const navigate = useNavigate();
    const {cidade} = useContext(GeneralContext);

    function verificaDisposable(){
        if(cidade == "Imperatriz"){
            return (
                <span
                onClick={()=>navigate('/theater-page')}
                >
                    <TeatrosCard 
                    imagem='https://live.staticflickr.com/8061/8289053718_8f97db4fc2_z.jpg'
                    nomeTeatro='Teatro Ferreira Gullar'
                    distancia={4.6}
                    nivelPreco='$$$'
                    avaliacao='4.8'
                    />
                </span>
           )
        }else{
            return (<div>
                    <h2 style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        paddingTop: '100px',
                    }}>Poxa :(</h2>
                    <p style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '12px',
                        fontWeight: 'normal',
                        paddingBottom: '100px',
                    }}>Parece que não há nada programado nesta cidade...</p>            
                </div>)
        }
    }

    return (
        <Container>
            <Header>
                <Headline onClick={()=> navigate('/selec-cidade')}>{cidade}</Headline>
            </Header>
            <Main>
                <ListaTemas />
                <ListaFiltro />
                
                <Section>
                    {
                        verificaDisposable()
                    }    
                </Section>                
            </Main>
            <Navbar selected={0}/>
        </Container>
    )
}