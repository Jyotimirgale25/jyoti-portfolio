import React, { useState } from "react";

export default function CharacterStanding({
  className = "w-64 h-80",
  style = {},
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={style}
      >
        <span className="text-8xl">🧑‍💼</span>
      </div>
    );
  }

  return (
    <img
      src="/character-standing.jpg"
      alt="Character standing - professional developer"
      draggable={false}
      loading="lazy"
      className={`object-contain ${className}`}
      style={{
        display: "block",
        objectFit: "contain",
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
      onError={() => setHasError(true)}
    />
  );
}