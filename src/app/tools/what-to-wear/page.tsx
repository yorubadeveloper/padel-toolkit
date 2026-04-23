"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { CloudSun, MagnifyingGlass, TShirt, Sun, CloudRain, Snowflake, Wind, ThermometerHot } from "@phosphor-icons/react";

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  city: string;
}

interface Outfit {
  top: string;
  bottom: string;
  shoes: string;
  accessories: string[];
  tip: string;
}

function getOutfit(weather: WeatherData): Outfit {
  const { temp, condition, windSpeed } = weather;
  const isRainy = condition.toLowerCase().includes("rain") || condition.toLowerCase().includes("drizzle");
  const isCloudy = condition.toLowerCase().includes("cloud") || condition.toLowerCase().includes("overcast");

  if (temp >= 30) {
    return {
      top: "Light, breathable tank top or sleeveless shirt",
      bottom: "Short padel shorts",
      shoes: "Breathable padel shoes with good grip",
      accessories: ["Sweatband or headband", "Sunglasses", "Sunscreen (lots of it)"],
      tip: "Hydrate before, during, and after. Bring a towel for your grip hand.",
    };
  }
  if (temp >= 22) {
    return {
      top: "Moisture-wicking t-shirt",
      bottom: "Padel shorts or skirt",
      shoes: "Standard padel shoes",
      accessories: [
        ...(isCloudy ? [] : ["Sunglasses", "Cap or visor"]),
        "Light towel",
      ],
      tip: "Perfect conditions. Just wear what's comfortable and focus on your game.",
    };
  }
  if (temp >= 15) {
    return {
      top: windSpeed > 20 ? "Long-sleeve performance top" : "Light long-sleeve or t-shirt",
      bottom: "Padel shorts or lightweight track pants",
      shoes: "Standard padel shoes",
      accessories: [
        ...(windSpeed > 20 ? ["Light windbreaker for warm-up"] : []),
        "Wristband",
      ],
      tip: "You'll warm up quickly once you start playing. Layer up for the warm-up, strip down for the match.",
    };
  }
  if (temp >= 8) {
    return {
      top: "Thermal base layer under a long-sleeve top",
      bottom: "Track pants or thermal leggings",
      shoes: "Padel shoes with good traction (courts can be slippery when cold)",
      accessories: ["Light jacket for warm-up", "Beanie or headband for ears", "Glove for non-racket hand between points"],
      tip: "Take extra time to warm up. Cold muscles and padel don't mix well.",
    };
  }
  return {
    top: "Thermal base layer plus insulated jacket",
    bottom: "Thermal leggings or thick track pants",
    shoes: "Padel shoes with warm socks",
    accessories: ["Beanie", "Neck warmer", "Gloves between points", "Hot drink for the bench"],
    tip: isRainy
      ? "Honestly, maybe check if there's an indoor court available."
      : "Bundle up and keep moving. Longer warm-up is essential in these conditions.",
  };
}

function getWeatherIcon(condition: string) {
  const c = condition.toLowerCase();
  if (c.includes("rain") || c.includes("drizzle")) return <CloudRain size={28} weight="duotone" className="text-blue-400" />;
  if (c.includes("snow")) return <Snowflake size={28} weight="duotone" className="text-blue-300" />;
  if (c.includes("cloud") || c.includes("overcast")) return <CloudSun size={28} weight="duotone" className="text-gray-400" />;
  return <Sun size={28} weight="duotone" className="text-amber-400" />;
}

export default function WhatToWearPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://wttr.in/${encodeURIComponent(city.trim())}?format=j1`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      const current = data.current_condition?.[0];
      if (!current) throw new Error("No weather data");

      setWeather({
        temp: parseInt(current.temp_C),
        condition: current.weatherDesc?.[0]?.value || "Unknown",
        humidity: parseInt(current.humidity),
        windSpeed: parseInt(current.windspeedKmph),
        city: data.nearest_area?.[0]?.areaName?.[0]?.value || city.trim(),
      });
    } catch {
      setError("Could not find weather for that location. Try a different city name.");
    } finally {
      setLoading(false);
    }
  };

  const outfit = weather ? getOutfit(weather) : null;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<CloudSun size={24} weight="duotone" />}
        title="What to Wear"
        description="Enter your city and get outfit suggestions based on the current weather. No more showing up in the wrong gear."
        illustration="/animation-2.svg"
      />

      <div className="max-w-lg">
        <div className="mb-6">
          <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-2 block">
            City
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MagnifyingGlass size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/25" />
              <input
                type="text"
                placeholder="e.g. Madrid, Stockholm, Abu Dhabi..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
              />
            </div>
            <button
              onClick={fetchWeather}
              disabled={!city.trim() || loading}
              className="bg-accent text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Checking..." : "Check"}
            </button>
          </div>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm font-medium mb-4"
          >
            {error}
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          {weather && outfit && (
            <motion.div
              key={weather.city + weather.temp}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-5"
            >
              {/* Weather card */}
              <div className="bg-surface border border-muted rounded-2xl p-6 flex items-center gap-5">
                {getWeatherIcon(weather.condition)}
                <div>
                  <p className="font-bold text-lg">{weather.city}</p>
                  <p className="text-foreground/45 text-sm">
                    {weather.temp}°C, {weather.condition}. Wind {weather.windSpeed} km/h. Humidity {weather.humidity}%.
                  </p>
                </div>
              </div>

              {/* Outfit recommendation */}
              <div className="bg-surface border border-muted rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 mb-5">
                  <TShirt size={20} weight="duotone" className="text-accent" />
                  <h2 className="font-bold text-lg">What to wear</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Top", value: outfit.top },
                    { label: "Bottom", value: outfit.bottom },
                    { label: "Shoes", value: outfit.shoes },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-[11px] font-bold text-foreground/25 uppercase tracking-widest">{item.label}</span>
                      <p className="text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  ))}

                  {outfit.accessories.length > 0 && (
                    <div>
                      <span className="text-[11px] font-bold text-foreground/25 uppercase tracking-widest">Accessories</span>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {outfit.accessories.map((acc) => (
                          <span key={acc} className="text-[13px] font-medium text-foreground/50 bg-muted/70 px-3 py-1.5 rounded-lg">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-muted">
                  <div className="flex items-start gap-2">
                    <ThermometerHot size={16} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/45 leading-relaxed">{outfit.tip}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
}
