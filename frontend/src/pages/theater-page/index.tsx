import { Container, DetailCard, Image, InfoZone, UpperCardZone, ColumnZone, YellowBtn } from "./style";
import BackHeader from "../../components/centered-header";
import { FaStar } from "react-icons/fa6";
import { TbSquareLetterL } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "../../components/nav-tab";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../contexts/general.context";
import toast from "react-hot-toast";

export default function TheaterPage(){

    const navigate = useNavigate();
    const {setHasCart} = useContext(GeneralContext);
    
    useEffect(()=>{
        toast.success('O anfitrião determinou que só poderá ser vendido um assento por ticket.', {
            icon: "⚠️",
            duration: 5000
        })
        return;
    },[])
    

    function levaCarrinho(){
        setHasCart(true);
        navigate('/cart');
    }

     return (
        <Container>
            <BackHeader mensagem="Teatro Ferreira Gullar" />
            <DetailCard>
                <UpperCardZone>
                    <Image src='https://www.fodors.com/wp-content/uploads/2017/12/cats-hero.jpg' alt='Imagem do espetáculo CATS' />
                    <ColumnZone>
                        <h2>CATS (Classicos da Broadway)</h2>
                        <InfoZone>
                            <div>
                                <FaStar style={{
                                    color: '#ffc740',
                                    fontSize: '1em'
                                }} />
                                <FaStar style={{
                                    color: '#ffc740',
                                    fontSize: '1em'
                                }} />
                                <FaStar style={{
                                    color: '#ffc740',
                                    fontSize: '1em'
                                }} />
                                <FaStar style={{
                                    color: '#ffc740',
                                    fontSize: '1em'
                                }} />
                                <FaStar style={{
                                    color: '#ffc740',
                                    fontSize: '1em'
                                }} />
                                    5
                            </div>
                            <div>
                                <TbSquareLetterL style={{
                                    color: 'green',
                                    fontSize: '1em'
                                }} />
                            </div>
                        </InfoZone>
                        <InfoZone>
                        <FaCalendarAlt /> 12 dez 23 - 22 dez 23
                        </InfoZone>
                    </ColumnZone>
                </UpperCardZone>
                <p style={{
                    textAlign: 'justify',
                    fontSize: '1em'
                }}>A tribo de gatos Jellicles todo ano precisa tomar uma
                grande decisão em uma noite especial: escolher um
                dos membros para ascender ao Heaviside Layer, lugar
                que promete uma vida melhor a todos.</p>
            </DetailCard>
            <YellowBtn onClick={levaCarrinho}>Comprar Ticket</YellowBtn>

            <Navbar selected={0}/>
        </Container>
     )
}