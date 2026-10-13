
const profileImage = document.getElementById("profile-image");
const switchButton = document.getElementById("switch-button");
const photoDescription = document.getElementById("photo-description");

const photos = [
    {
        src: "assets/casual.jpg",
        alt: "Casual profile photo",
        description: "Casual Style"
    },
    {
        src: "assets/professional.jpg",
        alt: "Professional profile photo",
        description: "Professional Style"
    }
];

let currentPhoto = 0;

switchButton.addEventListener("click", function () {
    currentPhoto = (currentPhoto + 1) % photos.length;

    profileImage.classList.add("changing");

    window.setTimeout(function () {
        profileImage.src = photos[currentPhoto].src;
        profileImage.alt = photos[currentPhoto].alt;
        photoDescription.textContent = photos[currentPhoto].description;

        profileImage.classList.remove("changing");
    }, 150);
});

