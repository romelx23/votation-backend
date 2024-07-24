// const Item = require("../item/item.model");
// const insertAnimes = async () => {
//     try {
//         const items = await Item.find({
//             votation: "6694a4fd8bf5cb71674f2a5c",
//         });

//         // Realiza las solicitudes a la API en paralelo
//         const promises = items.map(async (item) => {
//             try {
//                 const response = await fetch(`https://api.jikan.moe/v4/anime?q=${item.name}`, {
//                     method: "GET",
//                 });
//                 const { data } = await response.json();

//                 if (data && data.length > 0) {
//                     const animeData = data[0];
//                     const newItem = new Item({
//                         name: animeData.title,
//                         image: animeData.images.jpg.image_url,
//                         votes: item.votes,
//                         votation: item.votation,
//                         mal_id: animeData.mal_id,
//                     });
//                     await newItem.save();
//                 } else {
//                     console.log(`No se encontraron datos para ${item.name}`);
//                 }
//             } catch (error) {
//                 console.log(`Error al obtener datos de la API para ${item.name}:`, error);
//             }
//         });

//         await Promise.all(promises);
//         console.log("Items insertados correctamente");
//     } catch (error) {
//         console.error("Error al insertar los items:", error);
//     } finally {
//         // Desconecta de la base de datos si es necesario
//     }
// };

// module.exports = {
//     insertAnimes
// };