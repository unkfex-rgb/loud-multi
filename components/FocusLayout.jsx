
"use client";

import { useState } from "react";
import TwitchPlayer from "./TwitchPlayer";
import TwitchChat from "./TwitchChat";

const streamers = [
  { id: "loud_coringa", label: "LOUD Coringa" },
  { id: "loud_brabox", label: "LOUD Brabox" },
  { id: "gabepeixe", label: "GabePeixe" },
];

export default function FocusLayout() {
  const [active, setActive] = useState("loud_coringa");

  return (
    <div className="focus-root">
      <div className="focus-player">
        <TwitchPlayer channel={active} />
      </div>

      <div className="focus-chat">
        <TwitchChat channel={active} />
      </div>

      <div className="focus-selector">
        {streamers.map((s) => (
          <button
            key={s.id}
            className={active === s.id ? "active" : ""}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
