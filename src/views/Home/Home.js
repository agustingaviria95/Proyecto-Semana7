import css from "./styles.css"
import busqueda from "../../assets/img/busqueda.png"

const Home = () => {
    const view = `
    <div class="formulario">
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
          <label for="exampleFormControlInput1" class="form-label">¡Ingresa el nombre de la serie/pelicula/viedojuego <br> que quieres recomendarle a la comunidad!</label>
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
  
  export default Home;