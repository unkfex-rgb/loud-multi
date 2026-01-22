"use client";

export default function Player({ streamer, big, height }) {
  const h = height || (big ? '600px' : '300px');
  return (
    <div className="player" style={{ height: h }}>
      <iframe
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
