import React, { useState } from 'react';
import DropMenu from './DropMenu';
// import GeneralSettings from './GeneralSettings';
// import AppearanceSettings from './AppearanceSettings';
// import OtherSettings from './OtherSettings';

export default function SettingsLayout() {
  const [currentView, setCurrentView] = useState('menu');

  const handleNavigate = (view) => setCurrentView(view);
  const handleBack = () => setCurrentView('menu');

  const renderContent = () => {
    switch (currentView) {
      case 'menu':
        return <DropMenu onNavigate={handleNavigate} />;
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
    </>
  );
}
