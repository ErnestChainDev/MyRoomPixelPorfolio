"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useBackgroundMusic() {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log("🎵 Initializing audio...");

    const audio = document.createElement("audio");

    audio.src = "/music/im-yours.mp3";
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.9;

    audio.addEventListener("canplaythrough", () => {
      console.log("✅ Audio loaded successfully");
    });

    audio.addEventListener("play", () => {
      console.log("▶️ Audio started");
    });

    audio.addEventListener("pause", () => {
      console.log("⏸️ Audio paused");
    });

    audio.addEventListener("ended", () => {
      console.log("🔚 Audio ended");
    });

    audio.addEventListener("error", (e) => {
      console.error("❌ Audio error:", e);
    });

    audioRef.current = audio;

    return () => {
      console.log("🧹 Cleaning up audio");

      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.error("❌ Audio element not initialized");
      return;
    }

    try {
      console.log("🎵 Attempting to play music...");
      console.log("Source:", audio.src);
      console.log("ReadyState:", audio.readyState);

      await audio.play();

      console.log("✅ Music playing");
      setIsMusicOn(true);
    } catch (error) {
      console.error("❌ Failed to play music:", error);
    }
  }, []);

  const stopMusic = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    setIsMusicOn(false);

    console.log("⏹️ Music stopped");
  }, []);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.error("❌ Audio element not initialized");
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();

        console.log("▶️ Music resumed");

        setIsMusicOn(true);
      } else {
        audio.pause();

        console.log("⏸️ Music paused");

        setIsMusicOn(false);
      }
    } catch (error) {
      console.error("❌ Toggle music error:", error);
    }
  }, []);

  return {
    isMusicOn,
    startMusic,
    stopMusic,
    toggleMusic,
  };
}