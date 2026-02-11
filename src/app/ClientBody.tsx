"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  // Handle smooth scrolling on page load if URL contains a hash
  useEffect(() => {
    // Check if URL has a hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure all content is rendered
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return <div className="antialiased" suppressHydrationWarning={true}>{children}</div>;
}
