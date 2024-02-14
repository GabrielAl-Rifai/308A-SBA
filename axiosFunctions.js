// Function to toggle favorite status of a dog image
// export async function favourite(imgId) {
//   try {
//     // Send a GET request to check if the image is already favorited
//     const response = await axios.get(`https://dog.ceo/api//v1/favourites?image_id=${imgId}`);
//     // If the image is already favorited, delete the favorite
//     if (response.data.length > 0) {
//       await axios.delete(`https://dog.ceo/api/v1/favourites/${response.data[0].id}`);
//       console.log(`Unfavorited image with ID: ${imgId}`);
//     } 
//     // If the image is not favorited, add it to favorites
//     else {
//       await axios.post("https://dog.ceo/api/v1/favourites", { image_id: imgId });
//       console.log(`Favorited image with ID: ${imgId}`);
//     }
//   } catch (error) {
//     // If an error occurs during the request, log the error and throw it
//     console.error("Error toggling favorite:", error);
//     throw error;
//   }
// }

// Function to fetch and display favorite dog images
// export async function getFavourites() {
//   try {
//     // Fetch all favorites from the API
//     const response = await axios.get("https://dog.ceo/api/v1/favourites");
//     const favorites = response.data;
    
//     // Clear the carousel to prepare for displaying favorites
//     Carousel.clear();
    
//     // Iterate over each favorite and display it in the carousel
//     favorites.forEach(favorite => {
//       const carouselItem = Carousel.createCarouselItem(favorite.image.url, favorite.image.breeds[0].name, favorite.image.id);
//       Carousel.appendCarousel(carouselItem);
//     });
//   } catch (error) {
//     // If an error occurs during the request, log the error and throw it
//     console.error("Error getting favorites:", error);
//     throw error;
//   }
// }