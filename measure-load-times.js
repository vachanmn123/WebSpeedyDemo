document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  console.log(
    `Time to DOMContentLoaded: ${
      performance.timing.domContentLoadedEventEnd -
      performance.timing.navigationStart
    }ms`
  );
});

window.addEventListener("load", () => {
  console.log("Page fully loaded");
  console.log(
    `Time to Load: ${
      performance.timing.loadEventEnd - performance.timing.navigationStart
    }ms`
  );
});

// Optional: Measure image load times
window.addEventListener("load", () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", () => {
      console.log(`Image loaded: ${img.src}`);
      console.log(`Time to Image Load: ${performance.now()}ms`);
    });
  });
});
