import React from 'react';
import Head from '../head/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Head />
      </div>
      <div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;