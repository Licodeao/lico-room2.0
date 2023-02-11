import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

interface ISelected {
  long?: number;
}

interface IProps {
  children?: ReactNode;
  searchResults: any;
}

const MapBox: FC<IProps> = (props) => {
  const { searchResults } = props;
  const [selectedLocation, setSelectedLocation] = useState<ISelected>({});
  const transformResults = searchResults.map(
    (item: { lat: number; long: number }) => {
      return {
        latitude: item.lat,
        longitude: item.long,
      };
    }
  );

  type originT = { latitude: number; longitude: number } | false;
  type newT = Exclude<originT, false>;
  const center = getCenter(transformResults) as unknown as newT;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/licodeao216/cldzpofdp000101qxe1hx2vxg"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >
      {searchResults.map((item: any) => {
        return (
          <div key={item.long}>
            <Marker
              latitude={item.lat}
              longitude={item.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                className="cursor-pointer text-2xl animate-bounce"
                onClick={() => setSelectedLocation(item)}
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === item.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={item.lat}
                longitude={item.long}
              >
                {item.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
};

export default memo(MapBox);
MapBox.displayName = "MapBox";
