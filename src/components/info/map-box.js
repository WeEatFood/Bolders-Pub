import React, { Component } from 'react';
import MapGl, { NavigationControl, Marker, Popup } from 'react-map-gl';
// import Hours from './hours';
import { Icon } from 'semantic-ui-react';
import '../../scss/info2.scss';

const TOKEN =
  'pk.eyJ1IjoibWF0dHlhZGFkYSIsImEiOiJja2hxd2ptYWYwMTE4MnFvNXFkd2NtanlyIn0.6qCzdr06dzoP5Gp5YLPDJQ';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '1em',
};

const markerList = [
  {
    lat: 40.02291,
    long: -105.26701,
    name: 'Bolders Pub',
    info: 10,
  },
];

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 40.02291,
        longitude: -105.26701,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 500,
      },
      popupInfo: null,
    };
  }

  renderPopup(index) {
    return (
      this.state.popupInfo && (
        <Popup
          tipSize={5}
          anchor="bottom-right"
          longitude={markerList[index].long}
          latitude={markerList[index].lat}
          onMouseLeave={() =>
            this.setState({
              popupInfo: null,
            })
          }
          closeOnClick={true}
        >
          <p>
            <strong>{markerList[index].name}</strong>
            <br />
            Avaiable beds: {markerList[index].info}
          </p>
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGl
        {...viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={viewport => this.setState({ viewport })} />
          {markerList.map((marker, index) => {
            return (
              <div key={index}>
                {' '}
                <Marker longitude={marker.long} latitude={marker.lat}>
                  <Icon
                    name="hospital"
                    size="big"
                    onMouseEnter={() => this.setState({ popupInfo: true })}
                    onMouseLeave={() => this.setState({ popupInfo: null })}
                  />
                </Marker>{' '}
                {this.renderPopup(index)}
              </div>
            );
          })}
        </div>
      </MapGl>
    );
  }
}

export default MapBox;
