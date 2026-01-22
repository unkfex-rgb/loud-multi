"use client";

export default function Chat({ streamer }) {
  return (
    <div className="chat-container">
      <iframe
        src={`https://www.twitch.tv/embed/${streamer}/chat?parent=loud-multi.vercel.app&darkpopout`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
