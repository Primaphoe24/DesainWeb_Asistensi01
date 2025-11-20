export default {
  mounted(el) {
    el.classList.add(
      "opacity-0",
      "translate-y-6",
      "transition-all",
      "duration-700"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  },
};

// TIDAK DIGUNAKAN, HANYA PERCOBAAN