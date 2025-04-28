export const updateDocumentHead = (title: string, faviconPath: string) => {
  // Update the document title
  document.title = title;

  // Remove any existing favicon
  const existingFavicon = document.querySelector("link[rel='icon']");
  if (existingFavicon) {
    document.head.removeChild(existingFavicon);
  }

  // Create and add new favicon
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = faviconPath;
  document.head.appendChild(favicon);
}; 