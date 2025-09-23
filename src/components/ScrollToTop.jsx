import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll when route changes
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If you want instant scroll instead:
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
