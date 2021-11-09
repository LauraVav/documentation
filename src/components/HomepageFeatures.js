import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Get your API key',
    Svg: require('../../static/img/left.svg').default,
    description: (
      <>
        In order to start using the Lettria API you'll need to get an API key. Then you can install the API and start using the Lettria API.
      </>
    ),
  },
  {
    title: 'Using the API',
    Svg: require('../../static/img/center.svg').default,
    description: (
      <>
        In order to get the most out of the API you'll need to know all the tools available. Browse our documentation and get familiar with the Lettria API.
      </>
    ),
  },
  {
    title: 'Tutorials',
    Svg: require('../../static/img/right.svg').default,
    description: (
      <>
        Not sure where to start? Take a look at our tutorials to see what tools the Lettrai library contains to make your document analysis easier.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
