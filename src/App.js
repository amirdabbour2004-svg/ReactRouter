import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Header from "./component/header"
import OrderSummary from './component/ordersummary';
import Navbar from './component/navbar';
import Product from './component/product';
import FeaturedProduct from './component/featuredproduct';
import NewProduct from './component/newproduct';
import Profile from './component/profile';
import Users from './component/users';
import UsersDetails from "./component/Usersdetails";
import { ContextProvider } from './component/Auth';
import Login from './component/Login';
import RequireAuth from './component/RequireAuth';



function App() {
  return (
    <div className="App">
      <ContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<> <Header/> <Home/> </>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/order-summary' element={<OrderSummary/>}/>
      {/* Nested Routes */}
      <Route path='/products' element={<Product/>}>
        <Route index element={<NewProduct/>}/>
        <Route path='featured' element={<FeaturedProduct/>}/>
        <Route path='new' element={<NewProduct/>}/>
      </Route> 
      {/* Nested Routes */}
      <Route path='/profile' element={<RequireAuth> <Profile/> </RequireAuth>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='/users/:userId' element={<UsersDetails/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<h1>page not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
    </div>
  );
}

export default App;
