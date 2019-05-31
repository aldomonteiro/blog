import React from 'react';
import AboutPage from '../../templates/about-page';

export const AboutPagePreview = ({
  entry,
  widgetFor,
}) => (
    <AboutPage
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );