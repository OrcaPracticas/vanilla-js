import GetData from "../utils/getData";

const Home = async () => {
    const { results } = await GetData();
    const view = `
        <div class="Character">
            ${results.map((char) => `
                    <article class="Character-item">
                        <a href="#/${char.id}/">
                            <img src="${char.image}" alt="${char.name}" />
                            <h2>${char.name}</h2>
                        </a>
                    </article>
                `).join("")}
        </div>
    `;
    return view;
};

export default Home;
