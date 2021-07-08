import img_logo from "../img/Logo-header.png";
import img_close from "../img/close-icon.png";
import img_search from "../img/Search-icon.png";

const Content_browser = () => {
    const view =`
        <section class="Content_browser">
        <div class="title-home-div">
            <span><img src="${img_logo}" alt="Logo Sci-fi Site"></span>
            <span> <p>Buscador <br> de entretenimiento</p> </span>
        </div>
        </section>
        <nav class="navbar navbar-light bg-transparent">
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="¿Qué buscas?" aria-label="Search">
                    <span><img src="${img_search}"</span>
                    <button class="btn btn-outline-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        <div class="filter-container" >
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
            Filtrar por videojuegos <span><img src="${img_close}"</span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
            Filtrar por Películas <span><img src="${img_close}"</span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
            Filtrar por Series <span><img src="${img_close}"</span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
            Eliminar filtros <span><img src="${img_close}"</span>
            </button>
        </div>
        `;
    return view;
};

export default Content_browser;