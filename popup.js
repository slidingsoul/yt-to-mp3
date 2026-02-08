document.getElementById("convertBtn").addEventListener("click", () => {
  const status = document.getElementById("status");

  browser.tabs.query({ active: true, currentWindow: true })
    .then((tabs) => {
      const currentTab = tabs[0];
      const url = currentTab.url;

      // Regex YouTube watch URL
      const ytRegex = /^https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/;

      const match = url.match(ytRegex);

      if (match) {
        const videoId = match[1];

        const targetUrl = `https://mp3api.ytjar.info/?id=${videoId}`;

        browser.tabs.create({ url: targetUrl });
        status.textContent = "Opening converter...";
      } else {
        status.textContent = "Invalid YouTube video";
      }
    })
    .catch((err) => {
      console.error(err);
      status.textContent = "Failed reading tab info";
    });
});
