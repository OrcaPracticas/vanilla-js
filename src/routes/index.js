import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import GetHash from "../utils/getHash";
import ResolveRoutes from "../utils/resolveRoutes";

const ROUTERS = {
    "/": Home,
    "/:id": Character,
    "/Contact": "Contact",
};

const ROUTER = async () => {
    const $HEADER = null || document.querySelector("#header");
    const $CONTENT = null || document.querySelector("#content");

    $HEADER.innerHTML = await Header();
    let hash = GetHash();
    let route = await ResolveRoutes(hash);
    let render = ROUTERS[route] ? ROUTERS[route] : Error404;
    $CONTENT.innerHTML = await render();
};


export default ROUTER;
