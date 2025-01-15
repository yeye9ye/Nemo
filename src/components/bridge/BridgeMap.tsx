import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const usGeoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const markers = [
  { markerOffset: -30, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: -30, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -30, name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { markerOffset: -30, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { markerOffset: -30, name: "Miami", coordinates: [-80.1918, 25.7617] },
  { markerOffset: -30, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

function BridgeMap() {
  return (
    <div className='bridge_map' >
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
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as [number, number]} id={name}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ComposableMap>
    </div>
  );
}

export default BridgeMap;
