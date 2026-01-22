"use client";

export default function ModeMenu({ mode, setMode }) {
  return (
    <div className="mode-menu">
      <button onClick={() => setMode('grid')}>Grid</button>
      <button onClick={() => setMode('focus')}>Focus</button>
      <button onClick={() => setMode('auto')}>Auto</button>
    </div>
  );
}
