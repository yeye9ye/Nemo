import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const usGeoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

function USMap() {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={usGeoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EEE"
                stroke="#999"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default USMap;
