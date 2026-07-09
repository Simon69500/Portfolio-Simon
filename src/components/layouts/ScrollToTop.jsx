import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    
    if (hash) {
      // Scroll vers l'élément correspondant au hash
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (state?.scrollToId) {
      // Scroll vers un élément via state
      const element = document.getElementById(state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Scroll en haut si pas de hash ni state
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash, state]);

  return null;
}
