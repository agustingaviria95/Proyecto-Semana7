import css from "./styles.css"
import game1 from "../../assets/img/halo-mcc.jpg";
import game2 from "../../assets/img/ff-vii-remake.jpg";
import game3 from "../../assets/img/horizon-zero-dawn.jpg";
import game4 from "../../assets/img/resident-evil-village.jpg";

const Results = () => {
    const view = `
    <section class="row">
      <div class="col-sm-12 col-lg-8">
        <h3 class="text-black text-center title-games-section">Los Mejores Videojuegos</h3>
          <div class="card-group">
            <div class="card bg-transparent border-light games-container">
              <a href="/"><img src="${game1}" class="card-img-top" alt="Halo MC Collection"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Halo MC Collection</h5><hr>
              <p class="text-black text-center">Disfruta con la colección completa totalmente remasterizada para PC y consolas XBOX, incluye Halo Combat Evolved Anniversary, Halo 2 Anniversary, Halo 3, Halo 3 ODST, Halo 4 y Halo Reach.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
          <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${game2}" class="card-img-top" alt="Final Fantasy VII Remake"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Final Fantasy VII Remake</h5><hr>
              <p class="text-black text-center">Versión remasterizada del popular juego de rol de Square Enix publicado en 1997 para la primera PlayStation, combina la acción en tiempo real similar a Dissidia Final Fantasy con otros elementos estratégicos.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
      </div>
    </section>
    <section class="row">
      <div class="col-sm-12 col-lg-8">
        <div class="card-group">
            <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${game3}" class="card-img-top" alt="Horizon Zero Dawn"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Horizon Zero Dawn</h5><hr>
              <p class="text-black text-center">Conviértete en la habilidosa cazadora Aloy y explora un mundo exuberante habitado por misteriosas criaturas mecanizadas, en un nuevo y emocionante juego de rol, acción y un impresionante mundo abierto.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
          <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${game4}" class="card-img-top" alt="Resident Evil Village"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Resident Evil Village</h5><hr>
              <p class="text-black text-center">Llega la nueva generación de "survival horror" con Resident Evil Village, la octava entrega de su historia principal. Disfruta de sus gráficos ultrarrealistas y lucha por sobrevivir contra todos los peligros letales.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
        </div>
    </section>
    <section class="nav-pages">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
        </ul>
      </nav>
    </section>
    `;
    return view;
  };
  
  export default Results;