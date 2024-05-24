function displayImage(file) {
    const gallery = document.getElementById('gallery');
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    imageContainer.appendChild(image);
    gallery.appendChild(imageContainer);
}

// Event listener for file input change
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        displayImage(file);
    }
});