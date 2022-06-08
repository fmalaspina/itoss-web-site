import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    
    description: (
      <>
        Itoss fue pensada para su rápida implementación
      </>
    ),
  },
  {
    title: 'Focalizado en lo importante',
    description: (
      <>
        El énfasis está puesto en las métricas de vital importancia para la operación de los servicios.
      </>
    ),
  },
  {
    title: 'Flexible',
    description: (
      <>
         Cualquier dispositivo o tecnología puede ser monitoreada en muy pocos pasos.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
