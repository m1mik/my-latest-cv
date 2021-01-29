import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

interface PrivateRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  const isCookiePresented = true;
  return isCookiePresented ? (
    <Route path="/todos" component={component} {...rest} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
