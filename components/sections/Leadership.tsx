// components/sections/Leadership.tsx
"use client";

import { useState } from "react";
import { Play, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  description: string;
  linkedin: string;
  videoId: string; // YouTube ID
  posterOverride?: string; // optional custom image if you prefer
  posterTitle: string;
  highlights: string[];
};

const leaders: Leader[] = [
  {
    name: "Damian Colarte",
    title: "CEO",
    description:
      "Watch Damian Colarte, CEO of iSectra talk about why he started iSectra, his motivations, his beliefs and how he grew the company to where it is today, the fastest growing Virtual IT Department for Hire in the country.",
    linkedin: "https://www.linkedin.com/in/dcolarte/",
    videoId: "mBTh-ylU_fw",
    posterOverride: "/images/Damian_Colarte.jpg",
    posterTitle: "Chief Executive Officer",
    highlights: ["Why I started iSectra", "Why Customers Love Us"],
  },
  {
    name: "Roni Banerjee",
    title: "Chief Investment Officer",
    description:
      "Watch Roni Banerjee, Chief Investment Officer of iSectra talk about why he joined iSectra, about why he believes the IT Services industry is broken and how iSectra is disrupting this industry to better serve customers.",
    linkedin: "https://www.linkedin.com/in/ronibanerjee/",
    videoId: "EcYST3Rbyuo",
    posterOverride: "/images/Roni_Banerjee.jpg",
    posterTitle: "Chief Investment Officer",
    highlights: ["Why I joined iSectra", "How We Are Disrupting IT Services"],
  },
  {
    name: "Santiago Aristizabal",
    title: "President & COO",
    description:
      "Watch Santiago Aristizabal, President and COO of iSectra talk about why his training and IT work in the Navy shaped his beliefs and motivations, and how he stays on the forefront of technology to bring the best of IT to all our customers.",
    linkedin: "https://www.linkedin.com/in/santiago-aristizabal-1a5b89146/",
    videoId: "2rU9JONRhPc",
    posterOverride: "/images/Santiago_Aristizabal.jpg",
    posterTitle: "President & Chief Operating Officer",
    highlights: ["How the Navy Shaped My Approach", "Staying Ahead of Technology"],
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
            const reversed = index % 2 === 1; // alternate layout
            return (
              <div
                key={leader.name}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Video */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <VideoWithPoster
                    videoId={leader.videoId}
                    title={`${leader.name}, ${leader.title}`}
                    isPlaying={playingIndex === index}
                    onPlay={() => setPlayingIndex(index)}
                    posterOverride={leader.posterOverride}
                    name={leader.name}
                    posterTitle={leader.posterTitle}
                    highlights={leader.highlights}
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white bg-[linear-gradient(90deg,#7dca00,#5ea300)] hover:shadow-lg hover:shadow-lime-500/30 hover:translate-y-[-1px] transition-all"
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
  name,
  posterTitle,
  highlights,
}: {
  videoId: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
  posterOverride?: string;
  name: string;
  posterTitle: string;
  highlights: string[];
}) {
  // Use medium quality for mobile, max quality for desktop
  const mqdefault = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`; // 320x180
  const maxres = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`; // 1280x720
  const hq = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`; // 480x360

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
          {posterOverride ? (
            <div className="absolute inset-0 bg-slate-50">
              <span className="absolute inset-y-0 left-0 z-20 w-px bg-slate-300" />
              <div className="absolute inset-y-0 right-0 w-[49%] overflow-hidden bg-slate-200">
                <Image
                  src={posterOverride}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-50 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full w-[58%] flex-col p-4 sm:p-6">
                <div className="max-w-[78%] border-l-4 border-[#d77735] pl-3 sm:pl-4">
                  <p className="text-sm sm:text-xl font-bold leading-tight text-slate-950">
                    {name}
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-sm font-medium leading-tight text-slate-700">
                    {posterTitle}
                  </p>
                </div>

                <ul className="hidden min-[440px]:block mt-4 sm:mt-6 space-y-1 text-xs sm:text-sm font-medium text-slate-900">
                  {highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>

                <Image
                  src="/images/logo.svg"
                  alt="iSectra — Believe IT"
                  width={180}
                  height={100}
                  className="mt-auto h-auto w-28 sm:w-40"
                />
              </div>
            </div>
          ) : (
            <>
              <picture>
                <source media="(min-width: 1024px)" srcSet={maxres} />
                <source media="(min-width: 640px)" srcSet={hq} />
                <img
                  src={mqdefault}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
            </>
          )}

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
