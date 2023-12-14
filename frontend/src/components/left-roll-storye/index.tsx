import {UnList, Item, Imagem, Label} from './style'

export default function ListaTemas(){
    return (
        <UnList>
            <Item>
                <Imagem src='https://noticiasconcursos.com.br/wp-content/uploads/2021/02/noticiasconcursos.com.br-literatura-conheca-os-6-tipos-de-drama-tipos-de-drama-literatura.jpg' alt='Imagem representando drama' />
                <Label>Drama</Label>
            </Item>
            <Item>
                <Imagem src='https://s2-glamour.glbimg.com/2haNMD-WzhpGjHD22aBTN5RNAT8=/0x0:605x395/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/H/K/GnJ36pQ9yfXtzg8PVWuA/2019-05-26-filme-ps-eu-te-amo.png' alt='Imagem representando romance' />
                <Label>Romance</Label>
            </Item>
            <Item>
                <Imagem src='https://s2-g1.glbimg.com/pvP-2yy1k_TK5zRj6V5ON26wYxw=/0x0:750x484/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/J/mcdOvGRPmFRaYDxByCAQ/felipe-gracindo-frederico-braga-e-rodolfo-cordon.jpeg' alt='Imagem representando comedia' />
                <Label>Comedia</Label>
            </Item>
            <Item>
                <Imagem src='https://blog.fritzdobbert.com.br/wp-content/uploads/2018/05/shutterstock_289949240.jpg' alt='Imagem representando concertos' />
                <Label>Concertos</Label>
            </Item>
            <Item>
                <Imagem src='https://static.stealthelook.com.br/wp-content/uploads/2023/01/8-exposicoes-de-arte-para-conhecer-pelo-brasil-banksy-sao-paulo-20230120170704.jpg' alt='Imagem representando quadros' />
                <Label>Quadros</Label>
            </Item>
        </UnList>
    )
}