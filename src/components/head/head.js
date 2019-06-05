import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet>
    <html lang="en" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
  </Helmet>
);

export default Head;
