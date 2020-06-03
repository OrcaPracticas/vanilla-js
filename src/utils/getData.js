const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
    const apiURl = id ? `${API}${id}` : API;
    try {
        const RESPONSE = await fetch(apiURl);
        const DATA = await RESPONSE.json();
        return DATA;
    } catch (error) {
        console.log("Fetch Error", error);
    }
};

export default getData;
