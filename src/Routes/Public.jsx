import HomePage from '../Pages/HomePage'
import RegistroPage from '../Pages/RegistroPage'
import LoginPage from '../Pages/LoginPage'
import CompraPage from '../Pages/CompraPage'
import {
  Routes,
  Route
} from "react-router-dom"
import DetallePage from '../Pages/DetalleProductoPage';
import AuthContext from '../Context/AuthContext';
function Public() {
  return (
    <AuthContext.Consumer>
      {
        context=>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {
            !context.isLogin && 
            <>
             <Route path='/registro' element={<RegistroPage />} />
             <Route path='/login' element={<LoginPage />} />
            </>
          }
          {
            context.isLogin && 
            <>
              <Route path='/compras' element={<CompraPage />}  />
            </>
          }
        <Route path='/producto/:id' element={<DetallePage />}  />
      </Routes>
      }
    </AuthContext.Consumer>
  );
}

export default Public;
