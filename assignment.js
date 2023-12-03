function validateForm(event) {
    var form = event.target;

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
}
function onImageHover(imageId) {
    const zikirText = document.getElementById('zikirText');
    if (imageId === 'image1'|| imageId === 'image2'|| imageId === 'image3') {
        zikirText.style.display = 'block';
    } else {
        zikirText.style.display = 'none';
    }
}