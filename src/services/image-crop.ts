import noImagePlaceholder from "../assets/no-image-placeholder.webp"
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImagePlaceholder;
    return url.replace("media/games", "media/crop/600/400/games");
}

export default getCroppedImageUrl;