"use client";

import { useState } from 'react';

export default function Player({ streamer }) {
  const [isVisible, setIsVisible] = useState(true);
  const [key, setKey] = useState(0);

  const handleReload = () => setKey(prev => prev + 1);
  const handleOpenTwitch = () => window.open(`https://twitch.tv/${streamer}`, '_blank');
  const handleToggleVisibility = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <div className="player hidden-player">
        <button onClick={handleToggleVisibility} className="show-player-btn">
          Mostrar {streamer}
        </button>
      </div>
    );
  }

  return (
    <div className="player group">
      <div className="player-actions">
        <button onClick={handleToggleVisibility} title="Ocultar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
        </button>
        <button onClick={handleOpenTwitch} title="Abrir na Twitch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </button>
        <button onClick={handleReload} title="Recarregar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
        </button>
      </div>
      <iframe
        key={key}
        src={`https://player.twitch.tv/?channel=${streamer}&parent=loud-multi.vercel.app`}
        height="100%"
        width="100%"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
}
