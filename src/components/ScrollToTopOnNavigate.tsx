import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnNavigate() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, search, hash]); // re-run even on same path but query/hash change

  return null;
}
