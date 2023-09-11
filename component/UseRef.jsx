import React, { useRef, useEffect } from "react";

const useRefHook = () => {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      indicatorRef.current.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll-indicator">
      <div ref={indicatorRef} className="scroll-indicator__progress"></div>
    </div>
  );
};

export default useRefHook;
