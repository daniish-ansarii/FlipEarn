import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import ListingDetails from './pages/ListingDetails'
import MyListings from './pages/MyListings'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  const {pathname} = useLocation();
  return (
    <div>
      {!pathname.includes('/admin') && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/marketplace' element={<Marketplace />}/>
        <Route path='/my-listings' element={<MyListings />}/>
        <Route path='/listing/:listingId' element={<ListingDetails />}/>
        <Route path='/create-lsiting' element={<ManageListing />}/>
        <Route path='/edit-lsiting/:id' element={<ManageListing />}/>
        <Route path='/messages' element={<Messages />}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/loading' element={<Loading />}/>
      </Routes>
      
    </div>
  )
}

export default App
