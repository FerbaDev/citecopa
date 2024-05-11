import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthContextComponent from "./context/AuthContext";
import CartContextComponent from "./context/CartContext";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <CartContextComponent>
          <AuthContextComponent>
            <AppRouter />
          </AuthContextComponent>
        </CartContextComponent>
      </BrowserRouter>
    </>
  )
}

export default App
