"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

// Type definitions for proper TypeScript support
type TeamInfo = {
  name: string;
  logo: string;
  score: number;
};

type MatchStats = {
  possession: [number, number]; // [team1, team2]
  shots: [number, number];
  shotsOnTarget: [number, number];
  corners: [number, number];
  fouls: [number, number];
};

type ChatMessage = {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
};

const LiveSportsBroadcast = () => {
  // State management
  const [isLive, setIsLive] = useState(true);
  const [liveViewers, setLiveViewers] = useState(1247);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      user: "AktureFan22",
      message: "What a game! Can't believe that save!",
      timestamp: new Date(),
    },
    {
      id: "2",
      user: "SoccerLover",
      message: "Austin's defense looking solid today",
      timestamp: new Date(),
    },
    {
      id: "3",
      user: "FootballExpert",
      message: "They need to control the midfield better",
      timestamp: new Date(),
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Match data
  const homeTeam: TeamInfo = {
    name: "Austin FC",
    logo: "/images/teams/austin-fc.svg", // Keep original path
    score: 2,
  };

  const awayTeam: TeamInfo = {
    name: "SA FC",
    logo: "/images/teams/sa-fc.svg", // Keep original path
    score: 1,
  };

  const matchStats: MatchStats = {
    possession: [58, 42],
    shots: [12, 8],
    shotsOnTarget: [5, 3],
    corners: [7, 4],
    fouls: [9, 11],
  };

  // Social media links with brand colors - matching footer styling
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "#",
      label: "Share on Instagram",
      colorClass: "text-orange-500 hover:text-orange-600",
    },
    {
      icon: FaXTwitter,
      href: "#",
      label: "Share on X (Twitter)",
      colorClass: "text-black hover:text-gray-700",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "Share on YouTube",
      colorClass: "text-red-600 hover:text-red-700",
    },
    {
      icon: FaFacebookF,
      href: "#",
      label: "Share on Facebook",
      colorClass: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "Share on LinkedIn",
      colorClass: "text-blue-700 hover:text-blue-800",
    },
  ];

  // Shared styling classes
  const socialIconClass = "w-6 h-6 md:w-5 md:h-5";
  const socialLinkBaseClass =
    "hover:scale-125 transition-all duration-300 ease-in-out";

  // Simulate viewer count changes
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      // Random fluctuation in viewer count for realism
      setLiveViewers((prev) =>
        Math.max(1000, prev + Math.floor(Math.random() * 10) - 5)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  // Handle chat submission with memoization to prevent unnecessary re-renders
  const handleChatSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!chatInput.trim()) return;

      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        user: "You",
        message: chatInput.trim(),
        timestamp: new Date(),
      };

      setChatMessages((prev) => [...prev, newMessage]);
      setChatInput("");
    },
    [chatInput]
  );

  // Improved fallback handler for image loading errors
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
    teamName: string
  ) => {
    // Generate initials from team name
    const initials = teamName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    // Create SVG with team initials as fallback
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="#374151" rx="24" />
        <text x="24" y="30" font-family="Arial" font-size="16" fill="white" text-anchor="middle">${initials}</text>
      </svg>
    `;

    // Convert SVG to data URL
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    e.currentTarget.src = url;

    // Clean up the object URL when the component unmounts
    return () => URL.revokeObjectURL(url);
  };

  return (
    <section className='relative w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6'>
          {/* Section header */}
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Live<span className='text-red-600'>Sports</span>
            </h2>

            {isLive && (
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                  <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
                  </span>
                  <span className='text-red-500 font-semibold'>LIVE</span>
                </div>
                <span className='text-gray-400 text-sm'>
                  {liveViewers.toLocaleString()} watching
                </span>
              </div>
            )}
          </div>

          {/* Main content grid */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            {/* Live match content - takes up 3/4 of the grid on large screens */}
            <div className='lg:col-span-3 space-y-6'>
              {/* Scoreboard */}
              <div className='bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='relative h-12 w-12 overflow-hidden'>
                    <Image
                      src={homeTeam.logo}
                      alt={homeTeam.name}
                      width={48}
                      height={48}
                      onError={(e) => handleImageError(e, homeTeam.name)}
                      className='object-contain'
                    />
                  </div>
                  <span className='text-white font-semibold'>
                    {homeTeam.name}
                  </span>
                </div>

                <div className='px-6 py-3 bg-gray-900/80 rounded-lg flex items-center gap-3'>
                  <span className='text-white text-2xl font-bold'>
                    {homeTeam.score}
                  </span>
                  <span className='text-gray-400'>-</span>
                  <span className='text-white text-2xl font-bold'>
                    {awayTeam.score}
                  </span>
                </div>

                <div className='flex items-center gap-3'>
                  <span className='text-white font-semibold'>
                    {awayTeam.name}
                  </span>
                  <div className='relative h-12 w-12 overflow-hidden'>
                    <Image
                      src={awayTeam.logo}
                      alt={awayTeam.name}
                      width={48}
                      height={48}
                      onError={(e) => handleImageError(e, awayTeam.name)}
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>

              {/* Video player */}
              <div className='relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900'>
                {isLive ? (
                  <iframe
                    className='absolute inset-0 w-full h-full'
                    src='https://www.youtube.com/embed/RXuJuz5fkow?autoplay=1&mute=1'
                    title='Live match stream'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className='flex items-center justify-center h-full'>
                    <div className='text-center'>
                      <p className='text-gray-400 mb-4'>This match has ended</p>
                      <button className='px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white font-medium'>
                        Watch Replay
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Match statistics */}
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6'>
                <h3 className='text-xl font-semibold text-white mb-4'>
                  Match Statistics
                </h3>

                <div className='space-y-4'>
                  {/* Possession stat */}
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-white'>
                        {matchStats.possession[0]}%
                      </span>
                      <span className='text-gray-400'>Possession</span>
                      <span className='text-white'>
                        {matchStats.possession[1]}%
                      </span>
                    </div>
                    <div className='flex h-2 rounded-full overflow-hidden bg-gray-700'>
                      <div
                        className='bg-green-600'
                        style={{ width: `${matchStats.possession[0]}%` }}
                      ></div>
                      <div
                        className='bg-blue-600'
                        style={{ width: `${matchStats.possession[1]}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Shots stat */}
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-white'>{matchStats.shots[0]}</span>
                      <span className='text-gray-400'>Shots</span>
                      <span className='text-white'>{matchStats.shots[1]}</span>
                    </div>
                    <div className='flex h-2 rounded-full overflow-hidden bg-gray-700'>
                      <div
                        className='bg-green-600'
                        style={{
                          width: `${
                            (matchStats.shots[0] /
                              (matchStats.shots[0] + matchStats.shots[1])) *
                            100
                          }%`,
                        }}
                      ></div>
                      <div
                        className='bg-blue-600'
                        style={{
                          width: `${
                            (matchStats.shots[1] /
                              (matchStats.shots[0] + matchStats.shots[1])) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Additional stats */}
                  <div className='grid grid-cols-2 gap-4 pt-2'>
                    <div className='flex justify-between'>
                      <span className='text-white'>
                        {matchStats.shotsOnTarget[0]}
                      </span>
                      <span className='text-gray-400'>Shots on Target</span>
                      <span className='text-white'>
                        {matchStats.shotsOnTarget[1]}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white'>
                        {matchStats.corners[0]}
                      </span>
                      <span className='text-gray-400'>Corners</span>
                      <span className='text-white'>
                        {matchStats.corners[1]}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white'>{matchStats.fouls[0]}</span>
                      <span className='text-gray-400'>Fouls</span>
                      <span className='text-white'>{matchStats.fouls[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Chat & Info */}
            <div className='space-y-6'>
              {/* Live Chat */}
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 flex flex-col h-[400px]'>
                <h4 className='font-semibold text-white mb-3'>Live Chat</h4>

                <div className='flex-grow overflow-y-auto space-y-3 mb-3 pr-2 custom-scrollbar'>
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className='bg-gray-700/50 rounded-lg p-3'>
                      <div className='flex justify-between items-center mb-1'>
                        <span className='font-medium text-red-400'>
                          {msg.user}
                        </span>
                        <span className='text-xs text-gray-400'>
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className='text-white text-sm'>{msg.message}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleChatSubmit} className='flex gap-2'>
                  <input
                    type='text'
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder='Type a message...'
                    className='flex-grow bg-gray-900 text-white rounded-lg px-3 py-2 text-sm border border-gray-700 focus:outline-none focus:border-red-500'
                  />
                  <button
                    type='submit'
                    className='bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors'
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Social Sharing */}
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50'>
                <h4 className='font-semibold text-white mb-3'>
                  Share This Match
                </h4>

                {/* Social icons with styling matched from footer */}
                <div className='flex items-center justify-start space-x-6 md:space-x-5'>
                  {socialLinks.map(
                    ({ icon: Icon, href, label, colorClass }) => (
                      <Link
                        key={label}
                        href={href}
                        className={`${colorClass} ${socialLinkBaseClass}`}
                        aria-label={label}
                      >
                        <Icon className={socialIconClass} />
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Upcoming Matches */}
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50'>
                <h4 className='font-semibold text-white mb-3'>
                  Upcoming Matches
                </h4>

                <div className='space-y-3'>
                  {[1, 2, 3].map((item) => (
                    <Link
                      href='#'
                      key={`upcoming-${item}`}
                      className='block bg-gray-700/50 hover:bg-gray-700 transition-colors p-3 rounded-lg'
                    >
                      <div className='flex justify-between text-sm text-gray-400 mb-2'>
                        <span>Oct {10 + item}, 2025</span>
                        <span>7:30 PM CT</span>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='w-6 h-6 bg-gray-600 rounded-full'></div>
                          <span className='text-white'>
                            Team {item * 2 - 1}
                          </span>
                        </div>
                        <span className='text-gray-400'>vs</span>
                        <div className='flex items-center gap-2'>
                          <span className='text-white'>Team {item * 2}</span>
                          <div className='w-6 h-6 bg-gray-600 rounded-full'></div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Past broadcasts */}
          <div className='mt-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              Past Broadcasts
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[1, 2, 3].map((item) => (
                <Link
                  href='#'
                  key={`past-${item}`}
                  className='block bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300 rounded-xl overflow-hidden group'
                >
                  <div className='relative aspect-video bg-gray-900'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center group-hover:scale-110 transition-transform'>
                        <svg
                          className='w-8 h-8 text-white'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8 5v14l11-7z' />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className='p-4'>
                    <h4 className='text-white font-semibold mb-1'>
                      Team A vs Team B
                    </h4>
                    <div className='flex justify-between text-sm text-gray-400'>
                      <span>Regular Season</span>
                      <span>Sep {item}, 2025</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </section>
  );
};

export default LiveSportsBroadcast;
