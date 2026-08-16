import React, { useState } from "react";

export default function CharacterSitting({ className = "w-80 h-80" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-8xl">🧑‍💻</span>
      </div>
    );
  }

  return (
    <img
      src="/character-sitting.png"
      alt="Character sitting - developer at work"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}