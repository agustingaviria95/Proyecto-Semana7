import img_logo from "../../assets/img/LOGO 1.5.png";
import img_close from "../../assets/img/close-icon.png";
import img_search from "../../assets/img/Search-icon.png";
import busqueda from "../../assets/img/Busqueda.png";

const Content_browser = () => {
    const view =`
        <section class="Content_browser">
            <div class="title-home-div">
              <span><img src="${img_logo}" alt="Logo Sci-fi Site" width="400px"></span>
              <span> <p>Buscador <br> de entretenimiento</p> </span>
          </div>
        </section>
        <nav class="navbar navbar-light bg-transparent">
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="¿Qué buscas?" aria-label="Search">
                    
                    <button class="btn btn-outline-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        <div class="filter-container" >
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
            Filtrar por videojuegos <span><img src="${img_close}"></span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
            Filtrar por Películas <span><img src="${img_close}"></span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
            Filtrar por Series <span><img src="${img_close}"></span>
            </button>
            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
            Eliminar filtros <span><img src="${img_close}"></span>
            </button>
        </div>
        <div class="formulario" id="formulario">
        <h5 class="titulo-form">Quieres hacer una recomendacion a la comunidad? ¡rellena el siguiente formulario y podras hacerlo!</h5>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Pepito Perez">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="pepitoperez@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">¡Ingresa el nombre de la serie/pelicula/viedojuego que quieres recomendarle a la comunidad!</label>
          <input type="text" class="form-control" id="exampleFormControlInput1">
        </div>
        <h6>Adjunta una imagen de la serie/pelicula/viedojuego</h6>
        <section class="drag-home-section">
          <div class="drag-documents-div">
              <img src="${busqueda}" alt="Imagen de arrastre de documentos">
              <div class="drag-documents-text-container">
                <div class="input-group mb-3">
                  <input type="file" class="form-control" id="inputGroupFile02" accept=".jpg, .png, .jpeg, .gif">
                </div>
              </div>
          </div>
        </section>
        <button type="submit" class="btn btn-success">Enviar</button>
      </form>
    </div>
        `;
    return view;
};

export default Content_browser;