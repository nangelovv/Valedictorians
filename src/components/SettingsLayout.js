import React, { useState } from 'react';
import DropMenu from './DropMenu';
// import GeneralSettings from './GeneralSettings';
// import AppearanceSettings from './AppearanceSettings';
// import OtherSettings from './OtherSettings';

export default function SettingsLayout() {
  const [currentView, setCurrentView] = useState('menu');

  const handleNavigate = (view) => setCurrentView(view);
  const handleBack = () => setCurrentView('menu');

  const DropMenuItems = [
    { label: 'Групови & Индивидуални уроци', path: '/services', external: false },
    { label: 'Еднодневни семинари', path: '/services', external: false },
    { label: 'Пробни матури', path: '/services', external: false },
    { label: 'Екскурзии', path: '/services', external: false },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'menu':
        return <DropMenu menuItems={DropMenuItems} onNavigate={handleNavigate} />;
      // case 'general':
      //   return <GeneralSettings onBack={handleBack} />;
      // case 'appearance':
      //   return <AppearanceSettings onBack={handleBack} />;
      // case 'others':
      //   return <OtherSettings onBack={handleBack} />;
      default:
        return <DropMenu onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderContent()}
      <mdui-button variant="text" onClick={localStorage.removeItem('ArsenicToken')}>Изход</mdui-button>
    </>
  );
}
