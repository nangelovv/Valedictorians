import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import noUser from './assets/noUser.jpg';
import SettingsLayout from './components/SettingsLayout';
import { setTheme } from 'mdui/functions/setTheme.js';
import DropMenu from './components/DropMenu';

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('ArsenicToken') ? true : false);
  setTheme('light');

  const navigate = useNavigate();

  const DropMenuItems = [
    { label: 'Групови & Индивидуални уроци', path: '/services', external: false },
    { label: 'Еднодневни семинари', path: '/services', external: false },
    { label: 'Пробни матури', path: '/services', external: false },
    { label: 'Екскурзии', path: '/services', external: false },
  ];

  return (<>
    <mdui-layout>
      <mdui-top-app-bar scroll-behavior='hide'>
        <mdui-top-app-bar-title style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Отличниците</mdui-top-app-bar-title>
        <NavLink to={'/'}><mdui-button variant="text">Начало</mdui-button></NavLink>
        <NavLink to={'/about'}><mdui-button variant="text">За нас</mdui-button></NavLink>
        <mdui-dropdown>
          <mdui-button slot="trigger" variant="text" end-icon="expand_more">Услуги</mdui-button>
          <mdui-card variant='filled' id='cardSettings'>
            <DropMenu menuItems={DropMenuItems} onNavigate={(path) => console.log('Navigating to:', path)} />
          </mdui-card>
        </mdui-dropdown>
        {!isAuthenticated ?
          <NavLink to={'/login'}><mdui-button variant="text">Вход</mdui-button></NavLink>
          :
          <mdui-dropdown>
            <mdui-avatar role='button' slot='trigger' src={noUser}></mdui-avatar>
            <mdui-card variant='filled' id='cardSettings'>
              <SettingsLayout />
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