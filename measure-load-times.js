document.addEventListener("DOMContentLoaded", () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    console.log("DOM fully loaded and parsed");
    console.log(`Time to DOMContentLoaded: ${navigation.domContentLoadedEventEnd - navigation.navigationStart}ms`);
});

window.addEventListener("load", () => {
    const navigation = performance.getEntriesByType("navigation")[0];
    console.log("Page fully loaded");
    console.log(`Time to Load: ${navigation.loadEventEnd - navigation.navigationStart}ms`);

    // Optional: Measure image load times
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('load', () => {
            console.log(`Image loaded: ${img.src}`);
            console.log(`Time to Image Load: ${performance.now()}ms since page load start`);
        });
    });
});
