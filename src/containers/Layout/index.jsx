import React from 'react';

import './style.css';
export const MovieBrowserLayout = ({ Toolbar, LeftPanel, RightPanel }) => {
  return (
    <React.Fragment>
      <Toolbar />
      <div className="contentLayout">
        <LeftPanel />
        <RightPanel />
      </div>
    </React.Fragment>
  );
};
