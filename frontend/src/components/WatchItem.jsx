import React from 'react';
import analogFunc from '../assets/analogFunc.png';
import digitalFunc from '../assets/digitalfunc.png';
import chronographFunc from '../assets/chonographfunc.png';
import hybridFunc from '../assets/hybridfunc.png'
import './WatchCollection.css'

const WatchItem = ({ title, image, description, features }) => {
    return (
      <div className="watch-item">
        <div className="content">
          <img src={image} alt={title} className="watch-image" />
        </div>
        <div className="static-content-text">
          <h3 className="static-content-top-left">{title}</h3>
          <p className="static-content-middle">
            <span className="static-clock-feature">Kiemelkedő jellemző:</span> {description}
          </p>
          <ul className="static-content-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const WatchCollection = () => {
    return (
      <div className="collection-container">
        <h2 id="func" className="collection-title">Órák funkcionalitás szerint</h2>
        <hr />
        <div className="watch-grid">
          <WatchItem
            title="Analóg"
            image={analogFunc}
            description="Az időmérők klasszikus és hagyományos oldalának megtestesítése"
            features={['Hagyományos óralap', 'Három mutató mozgás', 'Pénztárca barát']}
          />
          <WatchItem
            title="Digitális"
            image={digitalFunc}
            description="Elektronikus kijelző"
            features={['Számjegyekkel megjelenített idő', 'Teli extrákkal, mint például GPS, lépésszámláló és még sok más', 'Pénztárca barát']}
          />
          <WatchItem
            title="Kronográf"
            image={chronographFunc}
            description="Stoppereket, tachymetereket és még sok mást tartalmaz"
            features={['Kizárólag fényenergiával működtethető', 'Nem igényel elemcserét', 'Körülbelül +/- 15 másodperces pontosság havonta', 'Kvarc kristály alapú időmérés']}
          />
          <WatchItem
            title="Hibrid"
            image={hybridFunc}
            description="Digitális funkciókat ötvöz a hagyományos óraművekkel"
            features={['Analóg és digitális kombináció', 'Hasonló okosóra funkcionalitás', 'Pénztárca barát']}
          />
        </div>
      </div>
    );
  };
  
  export default WatchCollection;