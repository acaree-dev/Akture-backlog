"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Share2,
  Clock,
  Users,
  MessageSquare,
  Bell,
  ExternalLink,
  BarChart2,
  Star,
  Maximize,
  Volume2,
  Settings,
} from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

// Mock data for sports broadcast
const sportsData = {
  isLive: true, // Toggle for live/upcoming state
  matchTitle: "Texas Soccer league  Finals",
  homeTeam: {
    name: "Austin FC",
    logo: "/assets/team-logo1.png",
    score: 3,
  },
  awayTeam: {
    name: "SA FC",
    logo: "/assets/team-logo2.png",
    score: 1,
  },
  matchTime: "2nd Half - 15:45", // Match time remaining
  streamUrl: "https://www.youtube.com/watch?v=RXuJuz5fkow",
  embedUrl: "https://www.youtube.com/embed/RXuJuz5fkow?autoplay=1&mute=0",
  viewerCount: 12547,
  nextMatchDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  stats: {
    topScorer: "D. Johnson (Austin) - 2 goals",
    topRebounder: "T. Williams (SA) - 5 saves",
    possession: { home: 53, away: 47 },
    shotsOnGoal: { home: 18, away: 15 },
  },
  chatMessages: [
    {
      id: 1,
      user: "SoccerFan23",
      message: "That goal was incredible!",
      timestamp: "2m ago",
    },
    {
      id: 2,
      user: "CoachK",
      message: "Austin needs better defense",
      timestamp: "1m ago",
    },
    {
      id: 3,
      user: "SportsAnalyst",
      message: "Johnson is on fire tonight!",
      timestamp: "Just now",
    },
  ],
  pastGames: [
    {
      id: 1,
      title: "Austin FC vs Portland Timbers",
      result: "3-1",
      date: "Aug 28",
      thumbnail: "/assets/game-thumb1.jpg",
    },
    {
      id: 2,
      title: "SA FC vs Houston Dynamo",
      result: "2-2",
      date: "Aug 24",
      thumbnail: "/assets/game-thumb2.jpg",
    },
    {
      id: 3,
      title: "LA Galaxy vs Austin FC",
      result: "0-2",
      date: "Aug 20",
      thumbnail: "/assets/game-thumb3.jpg",
    },
    {
      id: 4,
      title: "SA FC vs Seattle Sounders",
      result: "3-2",
      date: "Aug 16",
      thumbnail: "/assets/game-thumb4.jpg",
    },
  ],
};

const LiveSportsBroadcast = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(sportsData.chatMessages);
  const [showControls, setShowControls] = useState(false);

  // Calculate and update countdown timer
  useEffect(() => {
    if (!sportsData.isLive) {
      const calculateTimeRemaining = () => {
        const now = new Date();
        const difference = sportsData.nextMatchDate.getTime() - now.getTime();

        if (difference > 0) {
          setTimeRemaining({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        }
      };

      calculateTimeRemaining();
      const timer = setInterval(calculateTimeRemaining, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      user: "You",
      message: chatInput,
      timestamp: "Just now",
    };

    setMessages([...messages, newMessage]);
    setChatInput("");
  };

  // Social media links with their respective icons and brand colors - Exact same as footer
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
  ];

  // Shared styling classes - Exact same as footer
  const socialIconClass = "w-6 h-6 md:w-5 md:h-5";
  const socialLinkBaseClass =
    "hover:scale-125 transition-all duration-300 ease-in-out";

  return (
    <section className='relative w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden'>
      {/* Background overlay - Using a pattern instead of an image */}
      <div className='absolute inset-0 opacity-20'>
        <div className='w-full h-full bg-gray-900'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100%'
            className='opacity-10'
          >
            <defs>
              <pattern
                id='stadium-pattern'
                patternUnits='userSpaceOnUse'
                width='100'
                height='100'
              >
                <path
                  d='M0 0L100 100M100 0L0 100'
                  stroke='white'
                  strokeWidth='1'
                  fill='none'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#stadium-pattern)' />
          </svg>
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black'></div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent'></div>
      <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Hero Headline */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide'>
            Watch <span className='text-red-600'>Akture Sports Live</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Catch the action in real-time, anytime, anywhere. Premium sports
            streaming at your fingertips.
          </p>
        </div>

        {/* Scoreboard */}
        {sportsData.isLive && (
          <div className='bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 mx-auto max-w-4xl border border-gray-700/50 flex items-center justify-between'>
            {/* Home Team */}
            <div className='flex items-center gap-3'>
              <div className='relative h-12 w-12 bg-green-800 rounded-full flex items-center justify-center text-white font-bold'>
                AFC
              </div>
              <div className='text-center'>
                <p className='font-bold text-white text-lg md:text-xl'>
                  {sportsData.homeTeam.name}
                </p>
                <p className='text-2xl md:text-3xl font-bold text-white'>
                  {sportsData.homeTeam.score}
                </p>
              </div>
            </div>

            {/* Match Info */}
            <div className='text-center px-4'>
              <p className='text-gray-400 text-sm'>{sportsData.matchTitle}</p>
              <div className='flex items-center justify-center mt-1'>
                <div className='h-2 w-2 bg-red-600 rounded-full animate-pulse mr-2'></div>
                <p className='text-red-400 font-semibold'>
                  {sportsData.matchTime}
                </p>
              </div>
            </div>

            {/* Away Team */}
            <div className='flex items-center gap-3'>
              <div className='text-center'>
                <p className='font-bold text-white text-lg md:text-xl'>
                  {sportsData.awayTeam.name}
                </p>
                <p className='text-2xl md:text-3xl font-bold text-white'>
                  {sportsData.awayTeam.score}
                </p>
              </div>
              <div className='relative h-12 w-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold'>
                SAFC
              </div>
            </div>
          </div>
        )}

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
          {/* Main Video Player Column */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Video Player - YouTube Embed */}
            <div className='relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800'>
              {sportsData.isLive ? (
                // YouTube Embed
                <div className='w-full h-full relative'>
                  <iframe
                    src={sportsData.embedUrl}
                    title='Akture Sports Live Broadcast'
                    className='absolute top-0 left-0 w-full h-full'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  ></iframe>

                  {/* Live Badge */}
                  <div className='absolute top-4 left-4 z-10 flex items-center bg-red-600 rounded-full px-3 py-1 shadow-lg animate-pulse'>
                    <div className='h-2 w-2 bg-white rounded-full mr-2'></div>
                    <span className='text-white text-sm font-semibold tracking-wide'>
                      LIVE
                    </span>
                  </div>

                  {/* Viewer Count */}
                  <div className='absolute top-4 right-4 z-10 flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1'>
                    <Users className='h-4 w-4 text-gray-300 mr-2' />
                    <span className='text-white text-sm'>
                      {sportsData.viewerCount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ) : (
                // Coming soon placeholder
                <div className='w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-800 to-gray-900'>
                  <div className='text-red-600 text-4xl font-bold mb-6'>
                    AKTURE
                  </div>

                  <div className='flex items-center gap-6 mb-6'>
                    <div className='text-center'>
                      <div className='h-16 w-16 mx-auto bg-green-800 rounded-full flex items-center justify-center text-white font-bold'>
                        AFC
                      </div>
                      <p className='font-bold text-white mt-2'>
                        {sportsData.homeTeam.name}
                      </p>
                    </div>

                    <div className='text-2xl font-bold text-gray-400'>VS</div>

                    <div className='text-center'>
                      <div className='h-16 w-16 mx-auto bg-blue-800 rounded-full flex items-center justify-center text-white font-bold'>
                        SAFC
                      </div>
                      <p className='font-bold text-white mt-2'>
                        {sportsData.awayTeam.name}
                      </p>
                    </div>
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Upcoming Match
                  </h3>
                  <p className='text-gray-400 mb-8'>
                    {new Intl.DateTimeFormat("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(sportsData.nextMatchDate)}
                  </p>

                  {/* Countdown Timer */}
                  <div className='flex justify-center gap-4 text-center'>
                    <div className='bg-gray-800 p-3 rounded-lg w-20'>
                      <div className='text-2xl font-bold text-white'>
                        {timeRemaining.days}
                      </div>
                      <div className='text-xs text-gray-400 uppercase tracking-wider'>
                        Days
                      </div>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg w-20'>
                      <div className='text-2xl font-bold text-white'>
                        {timeRemaining.hours}
                      </div>
                      <div className='text-xs text-gray-400 uppercase tracking-wider'>
                        Hours
                      </div>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg w-20'>
                      <div className='text-2xl font-bold text-white'>
                        {timeRemaining.minutes}
                      </div>
                      <div className='text-xs text-gray-400 uppercase tracking-wider'>
                        Mins
                      </div>
                    </div>
                    <div className='bg-gray-800 p-3 rounded-lg w-20'>
                      <div className='text-2xl font-bold text-white'>
                        {timeRemaining.seconds}
                      </div>
                      <div className='text-xs text-gray-400 uppercase tracking-wider'>
                        Secs
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Match Details */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {sportsData.matchTitle}
                  </h3>
                  {sportsData.isLive ? (
                    <div className='flex items-center text-gray-300 mb-3'>
                      <div className='h-2 w-2 bg-red-600 rounded-full mr-2 animate-pulse'></div>
                      <span>Live Now - {sportsData.matchTime} remaining</span>
                    </div>
                  ) : (
                    <div className='flex items-center text-gray-300 mb-3'>
                      <Clock className='h-4 w-4 mr-2' />
                      <span>
                        {new Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }).format(sportsData.nextMatchDate)}
                      </span>
                    </div>
                  )}
                </div>

                <div className='flex flex-wrap gap-3 md:justify-end'>
                  {sportsData.isLive ? (
                    <a
                      href={sportsData.streamUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-2px]'
                    >
                      <ExternalLink className='h-4 w-4' />
                      Watch on YouTube
                    </a>
                  ) : (
                    <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-2px]'>
                      <Bell className='h-4 w-4' />
                      Set Reminder
                    </button>
                  )}

                  <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 flex items-center gap-2'>
                    <Share2 className='h-4 w-4' />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Live Stats */}
            {sportsData.isLive && (
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
                <h4 className='font-semibold text-white flex items-center mb-4'>
                  <BarChart2 className='h-5 w-5 mr-2 text-red-500' />
                  Live Match Stats
                </h4>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Left column stats */}
                  <div className='space-y-5'>
                    <div>
                      <p className='text-gray-400 text-sm mb-1'>Top Scorer</p>
                      <p className='text-white font-semibold flex items-center'>
                        <Star className='h-4 w-4 text-red-500 mr-2' />
                        {sportsData.stats.topScorer}
                      </p>
                    </div>

                    <div>
                      <p className='text-gray-400 text-sm mb-1'>
                        Top Goalkeeper
                      </p>
                      <p className='text-white font-semibold flex items-center'>
                        <Star className='h-4 w-4 text-red-500 mr-2' />
                        {sportsData.stats.topRebounder}
                      </p>
                    </div>
                  </div>

                  {/* Right column stats */}
                  <div className='space-y-5'>
                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-400'>Possession</span>
                        <span className='text-white'>
                          {sportsData.stats.possession.home}% -{" "}
                          {sportsData.stats.possession.away}%
                        </span>
                      </div>
                      <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-red-600 rounded-full'
                          style={{
                            width: `${sportsData.stats.possession.home}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className='flex justify-between text-sm mb-1'>
                        <span className='text-gray-400'>Shots On Goal</span>
                        <span className='text-white'>
                          {sportsData.stats.shotsOnGoal.home} -{" "}
                          {sportsData.stats.shotsOnGoal.away}
                        </span>
                      </div>
                      <div className='flex gap-1'>
                        {[...Array(sportsData.stats.shotsOnGoal.home)].map(
                          (_, i) => (
                            <div
                              key={`home-${i}`}
                              className='h-2 flex-1 bg-red-600 rounded-full'
                            ></div>
                          )
                        )}
                        {[...Array(sportsData.stats.shotsOnGoal.away)].map(
                          (_, i) => (
                            <div
                              key={`away-${i}`}
                              className='h-2 flex-1 bg-gray-500 rounded-full'
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Chat & Info */}
          <div className='space-y-6'>
            {/* Live Chat */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 flex flex-col h-[500px]'>
              <div className='p-4 border-b border-gray-700/70'>
                <h4 className='font-semibold text-white flex items-center'>
                  <MessageSquare className='h-4 w-4 mr-2 text-red-500' />
                  Fan Chat
                </h4>
              </div>

              <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                {messages.map((msg) => (
                  <div key={msg.id} className='flex gap-3'>
                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                      {msg.user.charAt(0)}
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-baseline gap-2'>
                        <span className='font-semibold text-white'>
                          {msg.user}
                        </span>
                        <span className='text-xs text-gray-400'>
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className='text-gray-300 text-sm'>{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className='p-4 border-t border-gray-700/70'>
                <form onSubmit={handleChatSubmit} className='flex gap-2'>
                  <input
                    type='text'
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder='Join the conversation...'
                    className='flex-1 bg-gray-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                    aria-label='Chat message'
                  />
                  <button
                    type='submit'
                    className='bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200'
                    aria-label='Send message'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Social Sharing - Updated to match footer styling */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50'>
              <h4 className='font-semibold text-white mb-3'>
                Share This Match
              </h4>

              {/* Replicated footer social icons styling */}
              <div className='flex items-center justify-start space-x-6 md:space-x-5'>
                {socialLinks.map(({ icon: Icon, href, label, colorClass }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`${colorClass} ${socialLinkBaseClass}`}
                    aria-label={label}
                  >
                    <Icon className={socialIconClass} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights section - SVG placeholders instead of images */}
        <div className='mt-20'>
          <div className='flex items-center justify-between mb-8'>
            <h3 className='text-2xl font-bold text-white'>
              Watch Highlights & Replays
            </h3>
            <a
              href='#'
              className='text-red-500 hover:text-red-400 font-semibold transition-colors duration-200'
            >
              View All Games
            </a>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {sportsData.pastGames.map((game) => (
              <div key={game.id} className='group relative'>
                <div className='aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Play className='w-10 h-10 text-white/20' />
                  </div>

                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300'>
                    <div className='bg-red-600/90 p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300'>
                      <Play className='w-6 h-6 text-white' />
                    </div>
                  </div>
                  <div className='absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded'>
                    {game.result}
                  </div>
                </div>
                <h4 className='font-semibold text-white mt-3 group-hover:text-red-500 transition-colors duration-200'>
                  {game.title}
                </h4>
                <p className='text-sm text-gray-400'>{game.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSportsBroadcast;
