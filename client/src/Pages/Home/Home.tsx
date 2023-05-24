import React from 'react'
import { ButtonCustom } from '../../components/ButtonCustom/ButtonCustom'
import { useAppDispatch } from '../../store/hook'
import { logout } from '../../store/slices/authSlice'

const Home:React.FC = () => {
    const dispatch = useAppDispatch()
    const test:any =  localStorage.getItem('myObject')
    const {...arr} = JSON.parse(test)

    return (
      <div>
          <h1>Home</h1>
          <h1>{arr.secondName}</h1>
          <h1>{arr.firstName}</h1>
          <h1>{arr.thirtyName}</h1>
          <ButtonCustom title='exit' onClick={() => dispatch(logout()) }/>
      </div>
    )
}

export default Home