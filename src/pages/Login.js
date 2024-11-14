import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APINoAuth } from '../common/APICalls'
import { sha256 } from '../common/commonFuncs'

export default function Login() {
  const navigate = useNavigate()

  // This function makes the call to the server with the necessary login or register data
  async function sendData() {
    // If an internal server error (500) occur (the server is down), the try-catch block catches it
    try {
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value

      const hashedPassword = await sha256(password)

      // Checks if either the username or password fields are empty
      if (!username || !password) { return }

      // Prepare the data that will be sent to the server
      const body = JSON.stringify({
        email_username: username,
        password: hashedPassword
      })

      const response = await APINoAuth('/users/', 'POST', body)

      login(response)
    }
    catch (err) { return }
  }

  async function login(response) {
    // If the response from the server is successful (200), the user token along with the current date 
    // are saved in the localStorage and the page is reloaded to display the Feed, else an alert message is shown
    if (response.ok) {
      const json = await response.json();
      const data = JSON.parse(json);
      const date = new Date();
      date.setTime(date.getTime() + 600 * 1000000);
      localStorage.setItem('ArsenicToken', data.token);
      localStorage.setItem('ArsenicUserID', data.user_id);
      localStorage.setItem('ArsenicExpiration', date);
      navigate('/grades')
    }
    else {
      alert('Invalid login data, please try again.')
    }
  }

  return (
    <>
      <div className='col-md-6 offset-md-3 text-center'>
        <mdui-text-field id="username" label="Имейл"></mdui-text-field>
        <mdui-text-field id="password" toggle-password label="Парола" type="password"></mdui-text-field>
      </div>
      <div className='col-md-6 offset-md-3 text-center'>
        <mdui-button onClick={sendData}>Вход</mdui-button>
        <mdui-button variant='text' onClick={() => navigate('/register')}>Нямате профил?</mdui-button>
        <mdui-button variant='text'>Забравена парола?</mdui-button>
        {/* <mdui-checkbox>Запомни ме</mdui-checkbox> */}
      </div>
    </>
  )
}
