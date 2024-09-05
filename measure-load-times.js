// Define variables to store timestamps
let domContentLoadedTime;
let pageLoadTime;
let imageLoadTimes = {};

// Capture the time when the script first runs
const startTime = Date.now();

document.addEventListener("DOMContentLoaded", () => {
    domContentLoadedTime = Date.now();
    console.log("DOM fully loaded and parsed");
    console.log(`Time to DOMContentLoaded: ${domContentLoadedTime - startTime}ms`);
});

window.addEventListener("load", () => {
    pageLoadTime = Date.now();
    console.log("Page fully loaded");
    console.log(`Time to Load: ${pageLoadTime - startTime}ms`);

    // Optional: Measure image load times
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        // Use a unique ID for each image to track its load time
        img.addEventListener('load', () => {
            imageLoadTimes[img.src] = Date.now() - startTime;
            console.log(`Image loaded: ${img.src}`);
            console.log(`Time to Image Load: ${imageLoadTimes[img.src]}ms since page load start`);
        });
    });
});
