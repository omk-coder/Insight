

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import BloggerDetails from './pages/BloggerDetails'
import BlogDetails from './pages/BlogDetails'
import AllNews from './pages/AllNews'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/blog/dsa' element={<BloggerDetails/>}/>
      <Route path='/blog/:id' element={<BlogDetails/>}/>
      <Route path='/news' element={<AllNews/>}/>
     

      </Routes>
    </Router>
  );
}

export default App;
