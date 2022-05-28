import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateProduct />
          </RequireAuth>} />
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>} />
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>} />
        <Route path='/manage-inventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
