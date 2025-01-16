import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const usGeoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

type Marker = {
  markerOffset: number;
  name: string;
  coordinates: [number, number]
}

const markers = [
  { markerOffset: -30, name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { markerOffset: -30, name: "Boston", coordinates: [-71.0589, 42.3601] },
  { markerOffset: -30, name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { markerOffset: -30, name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { markerOffset: -30, name: "Miami", coordinates: [-80.1918, 25.7617] },
  { markerOffset: -30, name: "Los Angeles", coordinates: [-118.2426, 34.0549] },
];

function BridgeMap() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipData, setTooltipData] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMarkerClick = async (marker: Marker, event: React.MouseEvent<SVGGElement, MouseEvent>) => {
    event.stopPropagation();
    setShowTooltip(true);
    setSelectedMarker(marker);
    setTooltipData(`Hey I'm the bridge of ${marker.name}`);
    const { clientX, clientY } = event;
    setTooltipPosition({ x: clientX, y: clientY });
  };

  const hideTooltip = () => {
    // click on the map background to hide the tooltip
    setShowTooltip(false);
  };

  return (
    <div className='bridge_map' onClick={hideTooltip}>
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
        {markers.map((marker, index) => (
          <Marker key={marker.name} coordinates={marker.coordinates as [number, number]} id={marker.name}
            onClick={(e) => {
              handleMarkerClick(marker as Marker, e);
            }}
          >
            <g
              fill="#fa6b6b"
              stroke="#FF5533"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={marker.markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {/* {marker.name} */}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      {selectedMarker && tooltipData && showTooltip && (
        <div
          style={{
            position: "absolute",
            top: `${tooltipPosition.y + 440}px`,
            left: `${tooltipPosition.x - 120}px`,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1000
          }}
        >
          <h4>{selectedMarker.name}</h4>
          <p>{tooltipData}</p>
        </div>
      )}
    </div>
  );
}

export default BridgeMap;
