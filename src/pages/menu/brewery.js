import React from 'react';
// import '../../scss/sub-menu.scss'
import '../../scss/brewery.scss'
import PropTypes from 'prop-types';
import Layout from '../../components/layout'

const Brewery = props => {
  return (
    <Layout>
      <div className="brew__container">
        <h4 className="brew__header">Brewery</h4>

        <div className="sub__container--col">

          <div className="sub__list">
            <h5 className="sub__header--brew">DRAUGHT BEER </h5>
            
            <div className="brew-item">
              <h6 className="brew-item__header">BLUE MOON</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">FIRESTONE 805</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">NEW BELGIUN FAT TIRE</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SIERRA NEVADA PALE ALE</h6>
              <p className="brew-item__price">10</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">STONE NEVERENDING HAZE</h6>
              <p className="brew-item__price">10</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">GUINNESS</h6>
              <p className="brew-item__price">10</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">PACIFICO</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">STELLA LEGERE</h6>
              <p className="brew-item__price">9</p>
            </div>

            <h5 className="sub__header--brew">IMPERIAL IPAS</h5>

            <div className="brew-item">
              <h6 className="brew-item__header">EPIC HOPULENT, 9%</h6>
              <p className="brew-item__price">14</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">MELVIN, 10%</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">ODELL MYRCENARY, 9.3%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SIERRA NEVADA TORPEDA, 7.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SQUATTERS HOP RISING, 9%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">UINTA DUBHE IMPERIAL BLACK, 9.2%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <h5 className="sub__header--brew">UK STYLE ALES</h5>

            <div className="brew-item">
              <h6 className="brew-item__header">BASS ENGLISH PALE ALE, 5.0%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">NEWCASTLE ENGLISH BROWN ALE, 4.7%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">OSKAR BLUES SCOTCH ALE, 8%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SAM ADAMS BOSTON ALE, 5.4%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SAMUEL ADAMS BUT BROWN, 5.0%</h6>
              <p className="brew-item__price">8</p>
            </div>
          </div>

          <div className="sub__list">
            <h5 className="sub__header--brew">AMERICAN PALE ALES</h5>
            <div className="brew-item">
              <h6 className="brew-item__header">2ROW NEMESIS, 6.3%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">DESCHUTES MIRROR POND, 5.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">LAGUNITAS SUPER CLUSTER, 8.0%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">LAGUNITAS SUMPIN' EASY, 5.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">MELVIN HUBERT MPA, 6.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">MOAB PALE ALE, 6.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">MODERN TIMES, 5.0%</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">ODELL DRUMROLL, 5.3%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">ODELL RUPTURE, 6.0%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">OMISSION PALE ALE, 5.8%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">OSKAR BLUES DALE'S, 6.5%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">PARK CITY AMERICAN PALE, 5.5%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">RITUAL PALE, 8.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">STONE RIPPER, 5.7%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">UPSLOPE CITRA, 5.8%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <h5 className="sub__header--brew">WHEAT ALES</h5>

            <div className="brew-item">
              <h6 className="brew-item__header">ALASKAN WHITE ALE, 5.3%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">AYINGER BRAU-WEISS, 5.1%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">EPIC WHEAT, 5.0%</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">GOOSE ISLAND, 4.2%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">HOEGAARDEN WITBIER, 4.9%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">LAGUNITAS, 7.5%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">PINKUS ORGANIC HEFE, 5.1%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">PYRAMID HEFEWEIZEN, 5.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">ROGUE HONEY KOLSCH, 5.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">UPSLOPE ROCKY MOUNTAIN, 5.1%</h6>
              <p className="brew-item__price">6</p>
            </div>
          </div>
          <div className="sub__list">
            <h5 className="sub__header--brew">AMERICAN IPAS</h5>
            <div className="brew-item">
              <h6 className="brew-item__header">AVBC HOP OTTIN', 7.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">BALLAST POINT SCULPIN, 7.0%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">BIG SKY, 6.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">DOGFISH HEAD, 7.5%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">EPIC HAZY NEW ENGLAND, 7.0%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">FOUNDERS CENTENNIAL, 7.2%</h6>
              <p className="brew-item__price">5</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">FULL SAIL, 6.0%</h6>
              <p className="brew-item__price">5</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">LAGUNITAS, 6.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">MELVIN, 7.5%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">ODELL IPA, 7.0%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">STONE, 6.9%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">STONE DELICIOUS, 7.7%</h6>
              <p className="brew-item__price">7</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">UINTA HOP NOSH, 7.3%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">UNITA GRAPEFRUIT HOP NASH, 7.3%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <h5 className="sub__header--brew">PORTERS</h5>

            <div className="brew-item">
              <h6 className="brew-item__header">DESCHUTES BLACK BUTTE, 5.2%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SAMUEL SMITH TADDY PORTER, 5.0%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <h5 className="sub__header--brew">STOUTS</h5>

            <div className="brew-item">
              <h6 className="brew-item__header">2 ROW BARREL AGED, 15.2%</h6>
              <p className="brew-item__price">14</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">FOUNDERS BREAKFAST STOUT, 8.3%</h6>
              <p className="brew-item__price">9</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">FOUNDERS KENTUCKY BOURBON STOUT, 12.2%</h6>
              <p className="brew-item__price">20</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">GREAT DIVIDE YETI STOUT, 9.5%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">NORTH COAST OLD RASPUTIN, 9.0%</h6>
              <p className="brew-item__price">6</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SAMUEL SMITH OATMEAL STOUT, 5.0%</h6>
              <p className="brew-item__price">8</p>
            </div>

            <div className="brew-item">
              <h6 className="brew-item__header">SQUATTERS OUTER DARKNESS STOUT, 10.5%</h6>
              <p className="brew-item__price">8</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Brewery.propTypes = {};

export default Brewery;
