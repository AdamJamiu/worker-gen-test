// app/components/AOSInitializer.jsx
"use client"; // Mark this as a Client Component

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname to detect route changes

export default function AOSInitializer() {
  const pathname = usePathname(); // Get the current route path

  useEffect(() => {
    let AOS: typeof import("aos"); // Define AOS variable with a specific type

    // Dynamically import AOS
    import("aos").then((aos) => {
      AOS = aos.default;
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Allow animations to trigger every time an element comes into view
      });
    });

    // Refresh AOS whenever the route changes
    return () => {
      if (AOS) AOS.refresh();
    };
  }, [pathname]); // Re-run this effect whenever the pathname changes

  return null; // This component doesn't render anything
}
