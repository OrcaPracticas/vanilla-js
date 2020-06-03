import GetHash from "../utils/getHash";
import GetData from "../utils/getData";



const Character = async () => {
    const HASH = GetHash();
    const DATA = await GetData(HASH);
    const VIEW = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${DATA.image}" alt="${DATA.name}">
                <h2>${DATA.name}</h2>
            </article>
            <article class="Character-card">
                <h3>Episode : <span>${DATA.episode.length}</span></h3>
                <h3>Status : <span>${DATA.status}</span></h3>
                <h3>Species : <span>${DATA.species}</span></h3>
                <h3>Gender : <span>${DATA.gender}</span></h3>
                <h3>Origin : <span>${DATA.origin.name}</span></h3>
                <h3>Last Location : <span>${DATA.location.name}</span></h3>
            </article>
        </div>
    `;
    return VIEW;
};

export default Character;
