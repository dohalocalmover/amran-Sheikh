import React, { useEffect, useRef, useState } from 'react';
import { QATAR_SERVICE_AREAS, ServiceArea } from '../data/areas';
import { MapPin, Navigation, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import L from 'leaflet';

interface InteractiveMapProps {
  onSelectAreaForQuote?: (areaName: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectAreaForQuote }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(QATAR_SERVICE_AREAS[0]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization if already created
    if (mapInstanceRef.current) return;

    try {
      // Qatar center coordinates
      const map = L.map(mapContainerRef.current, {
        center: [25.33, 51.48],
        zoom: 10,
        minZoom: 8,
        maxZoom: 16,
        scrollWheelZoom: false, // Prevent page scroll interception
      });

      // OpenStreetMap public tiles (free, crisp, detailed street & district names)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: ['a', 'b', 'c'],
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icon HTML
      const createCustomIcon = (name: string, isSelected: boolean) => {
        return L.divIcon({
          className: 'custom-map-marker',
          html: `
            <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer;">
              <div style="background-color: ${isSelected ? '#EA580C' : '#0F172A'}; color: white; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2); border: 2px solid white; display: flex; align-items: center; gap: 4px;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 9999px; background: ${isSelected ? '#FFFFFF' : '#38BDF8'};"></span>
                ${name}
              </div>
              <div style="width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid ${isSelected ? '#EA580C' : '#0F172A'}; margin-top: -1px;"></div>
            </div>
          `,
          iconSize: [110, 42],
          iconAnchor: [55, 36],
        });
      };

      // Add markers
      const markerMap: Record<string, L.Marker> = {};
      QATAR_SERVICE_AREAS.forEach((area) => {
        const marker = L.marker(area.coordinates, {
          icon: createCustomIcon(area.name, area.id === QATAR_SERVICE_AREAS[0].id),
        }).addTo(map);

        marker.on('click', () => {
          setSelectedArea(area);
          map.flyTo(area.coordinates, 12, { duration: 0.8 });
        });

        markerMap[area.id] = marker;
      });

      markersRef.current = markerMap;
      mapInstanceRef.current = map;
    } catch (e) {
      console.warn('Map initialization failed:', e);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleSelectArea = (area: ServiceArea) => {
    setSelectedArea(area);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(area.coordinates, 12, { duration: 0.8 });
    }
  };

  const handleQuoteClick = () => {
    if (onSelectAreaForQuote) {
      onSelectAreaForQuote(selectedArea.name);
    }
    const quoteElement = document.getElementById('quote-form');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="service-areas" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Qatar Map Glow */}
      <div className="absolute inset-0 bg-radial from-slate-800/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5" />
            Qatar Coverage Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
            Service Areas Across <span className="text-orange-500">Doha & Qatar</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We provide punctual door-to-door relocation across all major municipalities, master developments, high-rise towers, and villa communities in Qatar.
          </p>
        </div>

        {/* Quick Location Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {QATAR_SERVICE_AREAS.map((area) => {
            const isCurrent = area.id === selectedArea.id;
            return (
              <button
                key={area.id}
                onClick={() => handleSelectArea(area)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-400'
                    : 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-orange-400'}`} />
                {area.name}
              </button>
            );
          })}
        </div>

        {/* Grid: Map View & Interactive Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Map Container */}
          <div className="lg:col-span-8 bg-slate-800/80 rounded-2xl p-2.5 sm:p-3 border border-slate-700 shadow-2xl flex flex-col min-h-[420px]">
            <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400 border-b border-slate-700/80 mb-2">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Service Route Visualizer • Click any pin or area to explore
              </span>
              <span className="hidden sm:inline text-slate-400">GPS Coverage Active</span>
            </div>
            <div
              ref={mapContainerRef}
              className="w-full flex-1 rounded-xl overflow-hidden min-h-[360px] sm:min-h-[420px] bg-slate-950 z-0"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Selected Area Detail Panel */}
          <div className="lg:col-span-4 bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-orange-400">
                    {selectedArea.zone}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{selectedArea.name}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-0.5">{selectedArea.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Neighborhoods & Communities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArea.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-700/70 text-slate-200 text-xs font-medium border border-slate-600/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1.5">
                  <Info className="w-4 h-4 text-orange-400 shrink-0" />
                  Moving Logistics & Permits
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedArea.movingNotes}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-6">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                Dedicated trucks & moving teams available daily in this sector.
              </div>
            </div>

            <button
              onClick={handleQuoteClick}
              className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Quote for {selectedArea.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
