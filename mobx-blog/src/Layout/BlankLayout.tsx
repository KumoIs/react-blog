import React  from "react";
import { renderRoutes } from "react-router-config";
import { Redirect, withRouter } from 'react-router-dom';

const Layout = ({ route, history }) => {
  if (!localStorage.getItem('openId')) {
    return <Redirect to='/login' />;
  }else{
    return  <>{ renderRoutes(route.routes) }</>;
  }
};

export default withRouter(Layout);
