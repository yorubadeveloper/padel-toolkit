"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ToolPageHeader } from "@/components/ui/ToolPageHeader";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, MagnifyingGlass, ArrowSquareOut } from "@phosphor-icons/react";

export default function CourtFinderPage() {
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = () => {
    if (!location.trim()) return;
    setSubmitted(true);
  };

  const mapsUrl = `https://www.google.com/maps/search/padel+courts+near+${encodeURIComponent(location.trim())}`;

  return (
    <PageWrapper>
      <ToolPageHeader
        icon={<MapPin size={24} weight="duotone" />}
        title="Court Finder"
        description="Enter your city or area and we'll open Google Maps with padel courts near you. Simple as that."
        illustration="/animation-4.svg"
      />

      <div className="max-w-md">
        <div className="mb-6">
          <label className="text-xs font-semibold text-foreground/35 uppercase tracking-widest mb-2 block">
            Your location
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MagnifyingGlass size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/25" />
              <input
                type="text"
                placeholder="e.g. Amsterdam, London, Dubai..."
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSubmitted(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-muted rounded-xl text-sm focus:outline-none transition-all placeholder:text-foreground/25"
              />
            </div>
            <Button onClick={handleSearch} disabled={!location.trim()}>
              Search
            </Button>
          </div>
        </div>

        {submitted && location.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-surface border border-muted rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                <MapPin size={20} weight="duotone" className="text-accent" />
              </div>
              <div>
                <p className="font-bold text-sm">Padel courts near {location.trim()}</p>
                <p className="text-xs text-foreground/35">Via Google Maps</p>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-accent-dark active:scale-[0.97] transition-all duration-200 shadow-sm shadow-accent/20"
            >
              Open in Google Maps
              <ArrowSquareOut size={16} weight="bold" />
            </a>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
}
