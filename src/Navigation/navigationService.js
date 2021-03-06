import * as React from 'react';

export const navigationRef = React.createRef();
export const rootNavigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateToRoot(name, params) {
  rootNavigationRef.current?.navigate(name, params);
}

