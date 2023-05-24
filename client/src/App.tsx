import React from 'react'
import Main from './Pages/Main/Main'
import './assets/style/global.scss'
import { useAppSelector } from './store/hook'
import LoginPage from './Pages/Login/LoginPage'
import RegistrationPage from './Pages/Registration/RegistrationPage'
import { Routes,Route } from 'react-router-dom'
import Loader from './components/Loader/Loader'

const App:React.FC = () => {
  const {isLoading } = useAppSelector(state => state.auth)

  return (
    <div className='container'>
        {isLoading ? <Loader/> : ''}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
    </div>
  )
}

export default App