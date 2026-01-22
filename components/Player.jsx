"use client";

export default function Player({ streamer }) {
  return (
    <div className="player">
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
