import React, { useState } from "react";

export default function CharacterOnPhone({ className = "w-64 h-80" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-8xl">📱</span>
      </div>
    );
  }

  return (
    <img
      src="/character-phone.jpg"
      alt="Character on phone - mobile development"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}