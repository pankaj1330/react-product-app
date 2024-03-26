import Products from './components/Products';
import Detailpage from './components/Detailpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'

const App = () =>{
    return(
        // <Products />
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Products />} />
                    <Route path="productDetails/:id" element={<Detailpage />} />
                    <Route path="*" element={<div className='text-center'>Nothing here</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;