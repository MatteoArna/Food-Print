const sanityClient = require("@sanity/client");

const client = sanityClient.createClient({
  projectId: "vvusuian",
  dataset: "production",
  useCdn: true, // set this to false if you want to use the live dataset
});

client
  .fetch(
    `

    *[_type == "food"]{
      _id,
      name,
      short_description,
      image,
      ecologicScores{
        score,
        price,
        groceryStore->{
          _id,
          name,
          location
        }
      }
    }
  
  
  `
  )
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error:", error));
