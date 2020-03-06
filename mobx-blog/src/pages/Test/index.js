import React from 'react';
import { renderRoutes } from "react-router-config";

const Test = ({ route }) => {
  console.log(route);
  return renderRoutes(route.routes)
};

export default Test;
