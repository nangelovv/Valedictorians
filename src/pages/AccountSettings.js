import React from 'react';
import DropMenu from '../components/DropMenu';

export default function AccountSettings() {

  const DropMenuItems = [
    { label: 'Оценки', path: ':username/grades'},
    { label: 'Настройки', path: '/settings'},
  ];

  return (
    <>
      <DropMenu menuItems={DropMenuItems} />
      <mdui-button variant="text" onClick={localStorage.removeItem('ArsenicToken')}>Изход</mdui-button>
    </>
  );
}
