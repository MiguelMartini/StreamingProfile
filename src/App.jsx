import ListProfiles from './components/ListProfiles';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>

    <div className='containerh1'>
      <h1 className='streaming'>Streaming</h1>
    </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<ListProfiles/>}/>
        <Route path='profile/create' element={<CreateProfile/>}/>
        <Route path='profile/:id/edit' element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
    
    <div>
      <p className='copyright'>
      © 2025 Streaming. Todos os direitos reservados. Proibida a reprodução, distribuição ou qualquer outra forma de utilização sem autorização prévia.
      </p>
    </div>
    </>
  )
}

export default App
