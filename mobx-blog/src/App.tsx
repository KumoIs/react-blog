import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from "./router";

const App: React.FC = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
};

export default App;
