(() => {
  const playerParams = "rel=0&playsinline=1";
  const pageOrigin =
    window.location.origin && window.location.origin !== "null"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";

  const hydrateEmbeds = () => {
    document.querySelectorAll("iframe[data-youtube-id]").forEach((iframe) => {
      const videoId = iframe.getAttribute("data-youtube-id");

      if (!videoId) {
        return;
      }

      const embedUrl = `https://www.youtube.com/embed/${videoId}?${playerParams}${pageOrigin}`;

      if (iframe.getAttribute("src") !== embedUrl) {
        iframe.setAttribute("src", embedUrl);
      }
    });
  };

  hydrateEmbeds();

  new MutationObserver(hydrateEmbeds).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
