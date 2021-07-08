import img_logo from "../img/Logo-header.png";
import img_arrow from "../img/Arrow-downicon.png";
import img_close from "../img/close-icon.png";
import img_search from "../img/Search-icon.png";

const Content_browser = () => {
    const view =`
    <section class="Content_browser" id="Content_browser"> 
        <section class="title-home-section">
        <div class="title-home-div">
            <span><img src="${img_logo}" alt="Logo Sci-fi Site"></span>
            <span> <p>Buscador <br> de relatorías</p> </span>
        </div>
        </section>
        <section class="browser-home">
        <section class="search-section-home">
            <div class="search-div-home">
                <span class="search-span-home">
                    <span class="search-input-span">
                        <span class="search-icon">
                            <img src="${img_search}" alt="Icono de buscar">
                        </span>
                        <input type="text" placeholder="¿Qué buscas?">
                    </span>
                    <span class="search-filter-span">
                        <span><a href="">Ver filtros</a></span>
                        <span class="arrow-icon">
                            <img src="${img_arrow}" alt="Icono despleglable">
                        </span>
                    </span>
                </span>
            </div>
            <span class="search-button-home"><button>Buscar</button></span>
        </section>
        <section id="filter-home">
            <section class="filter-section-container" >
                <div class="filter-section-1">
                    <p>Videojuegos</p><span><img src="${img_close}" alt="Videojuegos"></span>
                </div>
                <div class="filter-section">
                    <p>Películas</p><span><img src="${img_close}" alt="Películas"></span>
                </div>
                <div class="filter-section">
                    <p>Series</p><span><img src="${img_close}" alt="Series"></span>
                </div>
            </section> 
        </section>
    </section>
        `;
    return view;
};

export default Content_browser;