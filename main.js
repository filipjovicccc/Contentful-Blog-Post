import { getStaticProps } from './index.mjs';

window.contentful = contentful;

const client = contentful.createClient({
  space: "7f0u5e1crvm",
  accessToken: "UjaLABjj3evZ8VC2DKbsR4gdq2A9ZClXmTV8hckZKM"
});

let data; // Declare data in the broader scope

async function fetchData() {
  try {
    data = await getStaticProps(); // Assign the fetched data to the data variable
    console.log('Fetched data from Contentful:', data);

    const dataDiv = document.getElementById('data');
    dataDiv.textContent = JSON.stringify(data, null, 2);

    const fields = data[0].fields;

    dataDiv.innerHTML = `
    <h2>${fields.title}</h2>
    <img src="${fields.thumbnail.fields.file.url}" alt="${fields.title}">
    <h3>Ingredients:</h3>
    <ul>
        ${fields.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Cooking Time:</h3>
    <p>${fields.cookingTime} minutes</p>
    <h3>Method:</h3>
    <p>${fields.method.content[0].content[0].value}</p>
`;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

const dataDiv = document.getElementById('data');
const entryId = "7f0u5e1crvm";

// Function to render the recipe
function renderRecipe() {
   // Access data in the broader scope


 

  // Create the HTML structure using the data
 
}

renderRecipe(); // Call th
// Fetch the entry from Contentful and render it
// client.getEntry(entryId)
//     .then(entry => renderRecipe(entry.fields))
//     .catch(error => console.error('Error fetching data from Contentful:', error));