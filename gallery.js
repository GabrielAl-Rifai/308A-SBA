// export async function favourite(imgId) {
//   try {
//     const response = await axios.get(`https://dog.ceo/api//v1/favourites?image_id=${imgId}`);
//     if (response.data.length > 0) {
//       await axios.delete(`https://dog.ceo/api//v1/favourites/${response.data[0].id}`);
//       console.log(`Unfavorited image with ID: ${imgId}`);
//     } else {
//       await axios.post("https://dog.ceo/api//v1/favourites", { image_id: imgId });
//       console.log(`Favorited image with ID: ${imgId}`);
//     }
//   } catch (error) {
//     console.error("Error toggling favorite:", error);
//     throw error;
//   }
// }
