import {Routes, Route} from 'react-router-dom';
import PresentationPage from '../pages/presentation';
import DashboardPage from '../pages/dashboard';
import SelectCidade from '../pages/selec-cidade';
import HistoryPage from '../pages/historico';
import TheaterPage from '../pages/theater-page';
import CartPage from '../pages/cart-page';
import PagamentoFinalizado from '../pages/pagamento-finalizado';

export default function MakeRoutes(){
    return (
        <Routes>
            <Route path='/' element={<PresentationPage/>}/>
            <Route path='/home' element={<DashboardPage/>}/>
            <Route path='/selec-cidade' element={<SelectCidade/>} />
            <Route path='/history' element={<HistoryPage/>} />
            <Route path='/theater-page' element={<TheaterPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/pgto-ok' element={<PagamentoFinalizado />} />
        </Routes>
    )
}