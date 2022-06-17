import { useState, useEffect } from "react";

const useMediaQuery = (query, whenTrue, whenFalse) => {
  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return whenFalse;

  return match ? whenTrue : whenFalse;
};

export default useMediaQuery;
// usage
// const text = useMediaQuery(
//     '(max-width: 400px)',`
//     'Less than 400px wide',
//     'More than 400px wide'
//   );
