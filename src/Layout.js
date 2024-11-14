import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import noUser from './assets/noUser.jpg';
import AccountSettings from './pages/AccountSettings';
import { setTheme } from 'mdui/functions/setTheme.js';
import DropMenu from './components/DropMenu';

export default function Layout() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('ArsenicToken') ? true : false);
  setTheme('light');

  const navigate = useNavigate();

  const DropMenuItems = [
    { label: 'Групови & Индивидуални уроци', path: '/services/groups' },
    { label: 'Еднодневни семинари', path: '/services/seminars' },
    { label: 'Пробни матури', path: '/services/mock-exams' },
    { label: 'Екскурзии', path: '/services/excursions' },
  ];

  return (<>
    <mdui-layout>
      <mdui-top-app-bar scroll-behavior='hide'>
        <mdui-top-app-bar-title style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <mdui-button href="https://github.com/nangelovv/Valedictorians/blob/main/README.md" target="_blank">Changelog</mdui-button></mdui-top-app-bar-title>
        <NavLink to={'/'}><mdui-button variant="text">Начало</mdui-button></NavLink>
        <mdui-dropdown trigger='hover'>
          <mdui-button slot="trigger" variant="text" end-icon="expand_more">Услуги</mdui-button>
          <mdui-card variant='filled' id='cardSettings'>
            <DropMenu menuItems={DropMenuItems} />
          </mdui-card>
        </mdui-dropdown>
        <NavLink to={'/about'}><mdui-button variant="text">За нас</mdui-button></NavLink>
        {!isAuthenticated ?
          <NavLink to={'/login'}><mdui-button variant="text">Вход</mdui-button></NavLink>
          :
          <mdui-dropdown trigger='hover'>
            <mdui-avatar role='button' slot='trigger' src={noUser}></mdui-avatar>
            <mdui-card variant='filled' id='cardSettings'>
              <AccountSettings />
            </mdui-card>
          </mdui-dropdown>
        }
      </mdui-top-app-bar>


      <mdui-layout-main style={{ minHeight: '100vh' }}>
        <div className='main-content'>
          <Outlet />
        </div>
      </mdui-layout-main>
    </mdui-layout>
  </>
  )
}