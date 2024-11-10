import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APINoAuth } from '../common/APICalls'
import { sha256 } from '../common/commonFuncs'

export default function Register() {
  const navigate = useNavigate()

  async function sendData() {
    try {
      const password = document.getElementById('password').value
      const repeatPassword = document.getElementById('repeatPassword').value
      const email = document.getElementById('email').value
      const username = document.getElementById('username').value
      const name = document.getElementById('name').value
      const surname = document.getElementById('surname').value

      const hashedPassword = await sha256(password);

      // Checks if the password in both fields match
      if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Prepare the data that will be sent to the server
      const body = JSON.stringify({
        email: email,
        password: hashedPassword,
        username: username,
        first_name: name,
        last_name: surname,
      })

      const response = await APINoAuth('/users/register', 'POST', body)

      // If the response from the server is successful (200), the login fields are shown, else an alert message is shown
      if (response.ok) {
        navigate('/login')
      } else {
        alert('Invalid register data, please try again.');
      }

    }
    catch (err) { return }
  }

  return (<>
    <span>Регистрация</span>
    <mdui-text-field id="email" label="Имейл"></mdui-text-field>
    <mdui-text-field id="username" label="Потребителско име"></mdui-text-field>
    <mdui-text-field id="password" toggle-password label="Парола" type="password"></mdui-text-field>
    <mdui-text-field id="repeatPassword" toggle-password label="Повторете паролата" type="password"></mdui-text-field>
    <mdui-text-field id="name" label="Име"></mdui-text-field>
    <mdui-text-field id="surname" label="Фамилия"></mdui-text-field>
    <mdui-button onClick={sendData}>Продължи</mdui-button>
    <mdui-button variant='text' onClick={() => navigate('/login')}>Имате профил?</mdui-button></>
  )
}
