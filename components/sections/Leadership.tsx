// components/sections/Leadership.tsx
"use client";

import { useState } from "react";
import { Play, Linkedin, ImageOff } from "lucide-react";
import Link from "next/link";

type Leader = {
  name: string;
  title: string;
  description: string;
  linkedin: string;
  videoId: string; // YouTube ID
  posterOverride?: string; // optional custom image if you prefer
};

const leaders: Leader[] = [
  {
    name: "Damian Colarte",
    title: "CEO",
    description:
      "Watch Damian Colarte, CEO of iSectra talk about why he started iSectra, his motivations, his beliefs and how he grew the company to where it is today, the fastest growing Virtual IT Department for Hire in the country.",
    linkedin: "https://www.linkedin.com/in/dcolarte/",
    videoId: "mBTh-ylU_fw",
  },
  {
    name: "Roni Banerjee",
    title: "CMO & Investment Officer",
    description:
      "Watch Roni Banerjee, CMO & Investment Officer of iSectra talk about why he joined iSectra, about why he believes the IT Services industry is broken and how iSectra is disrupting this industry to better serve customers.",
    linkedin: "https://www.linkedin.com/in/ronibanerjee/",
    videoId: "EcYST3Rbyuo",
  },
];

export default function Leadership() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Our Leadership Team on{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Why and How
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            we are disrupting the IT Support Industry
          </p>
        </div>

        <div className="space-y-16">
          {leaders.map((leader, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={leader.name}
                className={`grid lg:grid-cols-2 gap-10 items-center`}
              >
                {/* Video */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <VideoWithPoster
                    videoId={leader.videoId}
                    title={`${leader.name}, ${leader.title}`}
                    isPlaying={playingIndex === index}
                    onPlay={() => setPlayingIndex(index)}
                    posterOverride={leader.posterOverride}
                  />
                </div>

                {/* Copy */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">
                        {leader.name}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600">
                        {leader.title}
                      </p>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {leader.description}
                    </p>
                    <Link
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white
                                 bg-[linear-gradient(90deg,#7dca00,#5ea300)] hover:shadow-lg hover:shadow-lime-500/30 hover:translate-y-[-1px] transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect with {leader.name.split(" ")[0]} on LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoWithPoster({
  videoId,
  title,
  isPlaying,
  onPlay,
  posterOverride,
}: {
  videoId: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
  posterOverride?: string;
}) {
  // Prefer maxres; gracefully fall back to hqdefault if the first 404s
  const maxres = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const hq = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/60 bg-white/70 backdrop-blur shadow-sm">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="absolute inset-0 text-left"
          aria-label={`Play video: ${title}`}
        >
          {/* Poster image with graceful fallback */}
          <picture>
            {/* if you want webp first, uncomment: */}
            {/* <source srcSet={`https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`} type="image/webp" /> */}
            <img
              src={posterOverride ?? maxres}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src !== (posterOverride ?? hq))
                  img.src = posterOverride ?? hq;
              }}
              alt={title}
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Overlay to match site style */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 rounded-full bg-white text-blue-600 shadow-xl grid place-items-center transition-transform hover:scale-105">
              <Play className="w-9 h-9 fill-blue-600 ml-1" />
            </span>
          </div>

          {/* Top accent bar */}
          <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
        </button>
      )}
    </div>
  );
}
