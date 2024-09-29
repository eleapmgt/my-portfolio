import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

const Earth = ({ size }) => {
  const canvasRef = useRef();
  const [dimensions, setDimensions] = useState({ width: size, height: size });

  useEffect(() => {
    setDimensions({ width: size, height: size });
  }, [size]);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: dimensions.width * 2,
      height: dimensions.height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      opacity: 0.9,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        // Localisation de Bordeaux
        { location: [44.8378, -0.5792], size: 0.08 },
        // Localisation de New York
        { location: [40.7128, -74.006], size: 0.03 },
        // Localisation de Tokyo
        { location: [35.6762, 139.6503], size: 0.03 },
        // Localisation de Rome
        { location: [41.9028, 12.4964], size: 0.03 },
        // Localisation de Porto
        { location: [41.1496, -8.611], size: 0.03 },
        // Localisation de Port Louis
        { location: [-20.1609, 57.5012], size: 0.03 },
        // Localisation de Berlin
        { location: [52.52, 13.405], size: 0.03 },
        // Localisation de Héraklion
        { location: [35.3387, 25.1442], size: 0.03 },
        // Localisation de Palerme
        { location: [38.1157, 13.3615], size: 0.03 },
        // Localisation de Calafat
        { location: [40.8814, 0.8376], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width * 2}
      height={dimensions.height * 2}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
};

export default Earth;
