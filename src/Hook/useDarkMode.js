import { useState, useEffect } from "react";

const useDarkMode = ({ matchDark }) => {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  );
  useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addEventListener(onChange);
    return () => {
      matcher.removeEventListener(onChange);
    };
  }, [setIsDark]);

  return isDark;
};

export default useDarkMode;
