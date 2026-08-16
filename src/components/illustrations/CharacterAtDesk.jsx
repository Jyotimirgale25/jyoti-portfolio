import React, { useState } from "react";

export default function CharacterAtDesk({ className = "w-80 h-64" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-8xl">👩‍💻</span>
      </div>
    );
  }

  return (
    <img
      src="/character-desk.jpg"
      alt="Character working at desk - building digital solutions"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}