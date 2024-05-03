document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");
  
    if (!galleryContainer) {
      console.error("Error: gallery-container element not found.");
      return;
    }
  
    fetch("scripts/gallery.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        data.forEach(item => {
          const galleryItem = document.createElement("div");
          galleryItem.classList.add("gallery-item");
  
          const link = document.createElement("a");
          link.href = item.href;
          link.title = item.title;
  
          const image = document.createElement("img");
          image.src = item.image;
          image.alt = item.alt;
  
          link.appendChild(image);
          galleryItem.appendChild(link);
  
          const description = document.createElement("p");
          description.textContent = item.description;
  
          galleryItem.appendChild(description);
          galleryContainer.appendChild(galleryItem);
        });
      })
      .catch(error => {
        console.error("Error fetching gallery data:", error);
      });
  });