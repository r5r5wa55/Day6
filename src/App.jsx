import {Provider} from 'react-redux'
import './App.css'
import store from './store/store'
import {BrowserRouter ,Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import Header from './component/Header'
import Poke from './page/Poke'
import Movie from './page/Movie'
import ShowDetail from './component/ShowDetail'

function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
      
            <Route path='/m1' element={<Movie />}/>
            <Route path='/movie/:id' element={<ShowDetail />} />
            <Route path='/poke' element={<Poke />}/>
          </Routes>
        </BrowserRouter> 
      </Provider>
    </>
  )
}

export default App
