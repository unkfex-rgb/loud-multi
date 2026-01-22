
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ModeMenu from '../components/ModeMenu';
import Player from '../components/Player';
import Chat from '../components/Chat';
import { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [mode, setMode] = useState('grid');
  const [mainStreamer, setMainStreamer] = useState('loud_coringa');
  const [chatStreamer, setChatStreamer] = useState('loud_coringa');
  const [refreshKey, setRefreshKey] = useState(0);
  const [chatWidth, setChatWidth] = useState(300); // largura inicial do chat
  const chatContainerRef = useRef();
  const isResizing = useRef(false);

  const streamers = [
    { name: 'loud_coringa', twitch: 'https://www.twitch.tv/loud_coringa' },
    { name: 'loud_brabox', twitch: 'https://www.twitch.tv/loud_brabox' },
    { name: 'gabepeixe', twitch: 'https://www.twitch.tv/gabepeixe' },
  ];

  // Recarregar Twitch Embed no Grid
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [mode]);

  // Eventos de redimensionamento
  useEffect(() => {
    const startResize = (e) => {
      e.preventDefault();
      isResizing.current = true;
    };
    const stopResize = () => {
      isResizing.current = false;
    };
    const resize = (e) => {
      if (isResizing.current && chatContainerRef.current) {
        const containerWidth = chatContainerRef.current.parentElement.offsetWidth;
        let newWidth = containerWidth - e.clientX;
        if (newWidth < 200) newWidth = 200;
        if (newWidth > 600) newWidth = 600;
        setChatWidth(newWidth);
      }
    };

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <>
      <Header />
      {window.innerWidth > 768 && <ModeMenu mode={mode} setMode={setMode} />}
      <main>
        {mode === 'grid' && (
          <div className="grid-container" key={refreshKey}>
            <div className="grid-main" style={{ width: `calc(100% - ${chatWidth + 10}px - 20%)` }}>
              <Player streamer={mainStreamer} />
            </div>
            <div className="grid-side" style={{ width: '20%', gap: '10px' }}>
              <Player streamer={streamers[1].name} height="48%" />
              <Player streamer={streamers[2].name} height="48%" />
            </div>
            <div
              className="chat-container"
              style={{ width: `${chatWidth}px` }}
              ref={chatContainerRef}
            >
              <div
                className="chat-resize"
                onMouseDown={(e) => {
                  e.preventDefault();
                  isResizing.current = true;
                }}
              />
              <Chat streamer={chatStreamer} />
            </div>
          </div>
        )}

        {mode === 'focus' && (
          <div className="focus-container">
            <Player streamer={mainStreamer} big />
            <div className="focus-buttons">
              {streamers.map((s) => (
                <button key={s.name} onClick={() => setMainStreamer(s.name)}>
                  {s.name}
                </button>
              ))}
            </div>
            <div className="chat-container" style={{ width: '300px' }}>
              <Chat streamer={chatStreamer} />
            </div>
          </div>
        )}

        {mode === 'auto' && (
          <div className="auto-container">
            {streamers.map((s) => (
              <Player key={s.name} streamer={s.name} />
            ))}
            <div className="chat-container" style={{ width: '300px' }}>
              <div className="chat-buttons">
                {streamers.map((s) => (
                  <button key={s.name} onClick={() => setChatStreamer(s.name)}>
                    {s.name}
                  </button>
                ))}
              </div>
              <Chat streamer={chatStreamer} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
