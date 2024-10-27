'use client';

import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

export function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const InitMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places']
      });
      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 48.8584,
        lng: 2.2945
      };

      // MAP OPTIONS
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: 'Clinique-Veterinaire-Baillargues'
      };

      // INIT MAP
      const map = new Map(mapRef.current, mapOptions);
    };
    InitMap();
  }, []);
  return (
    <div
      ref={mapRef}
      className="h-[40rem] w-full border-b-2 border-primary shadow-xl shadow-primary/10 lg:rounded-xl"
    />
  );
}
