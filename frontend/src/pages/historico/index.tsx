import { Container, ModalFog, ModalContent, ModalHeader } from "./style";
import { Header, Headline, Main } from "../dashboard/style";
import Navbar from "../../components/nav-tab";
import { GeneralContext } from "../../contexts/general.context";
import { useContext, useState } from "react";
import TeatrosCard from "../../components/teatros-card";

export default function HistoryPage(){

    const [modal, setModal] = useState<boolean>(false) 
    const { tickets } = useContext(GeneralContext);

    return (
        <Container>

            {
                modal && (<>
                    <ModalFog>
                        <ModalContent>
                            <ModalHeader>
                                <h4>Detalhes do Ticket</h4>
                                <h3 onClick={()=>setModal(false)}>X</h3>
                            </ModalHeader>
                            <p>Adquirido em {new Date().toLocaleString('pt-BR')}</p>
                            <p>Pagamento efetuado via PIX (R$54,99)</p>
                            <p>Acompanhamentos: N/A</p>
                            <p>Local: Teatro Ferreira Gullar</p>
                        </ModalContent>
                    </ModalFog>
                </>)
            }

            <Header>
                <Headline>Histórico</Headline>
            </Header>
            <Main>
                {
                    tickets == 0 ? (<>
                        <h2 style={{
                            color: 'white',
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '0px'
                        }}>Ops!</h2>
                        <p style={{
                            color: 'white',
                            width: '80%',
                            margin: 'auto',
                            textAlign: 'center',
                            marginTop: '0px',
                            marginBottom: '0px'
                        }}>Após você comprar um ticket, ele aparecerá aqui!</p>
                    </>) : (<span onClick={()=>setModal(true)}>
                        <TeatrosCard 
                            imagem='https://www.fodors.com/wp-content/uploads/2017/12/cats-hero.jpg'
                            nomeTeatro='CATS (Classicos)'
                            distancia='Val 15/12/23'
                            nivelPreco='R$54,99'
                            avaliacao='5'
                        />
                    </span>)
                }
            </Main>
            <Navbar selected={1} />
        </Container>
    )
}