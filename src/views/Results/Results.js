import css from "./styles.css"
import serie1 from "../../assets/img/el-cuento-de-la-criada.jpg";
import serie2 from "../../assets/img/rick-y-morty.jpg";
import movie1 from "../../assets/img/jl-zack-snyder.jpg";
import movie2 from "../../assets/img/borat.jpg";
import game1 from "../../assets/img/halo-mcc.jpg";
import game2 from "../../assets/img/ff-vii-remake.jpg";
import game3 from "../../assets/img/horizon-zero-dawn.jpg";
import game4 from "../../assets/img/resident-evil-village.jpg";

const Results = () => {
    const view = `
    <section class="row">
      <div class="col-12">
        <nav class="navbar navbar-light bg-transparent">
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="¿Qué buscas?" aria-label="Search">
                    <button onclick="resuladosBuscador()" class="btn btn-outline-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
      </div>
    </section>
    <section class="row">
      <div class="col-sm-12 col-lg-8">
        <h3 class="text-black text-center title-games-section">Las Mejores series y Películas</h3>
          <div class="card-group">
            <div class="card bg-transparent border-light games-container">
              <a href="/"><img src="${serie1}" class="card-img-top" alt="El Cuento de la Criada"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">El Cuento de la Criada</h5><hr>
              <p class="text-black text-center">La serie, al igual que la novela, plantea un futuro distópico en el que las personas han perdido todos sus derechos individuales, en especial las mujeres fértiles (las criadas) que están sometidas a un sistema de esclavitud. Entre las criadas se encuentra June, la protagonista de esta historia.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Mírala Ahora</button>
          </div>
          <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${serie2}" class="card-img-top" alt="Rick y Morty"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Rick y Morty</h5><hr>
              <p class="text-black text-center">Rick es un "científico loco" que por diferentes razones termina mudándose a la casa de su hija Beth y se encuentra con su nieto Morty, un chico de 14 años, tímido y no muy listo. Ambos viven una variedad de aventuras a lo largo del Cosmos y multiversos.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Mírala Ahora</button>
          </div>
      </div>
    </section>
    <section class="row">
      <div class="col-sm-12 col-lg-8">
        <div class="card-group">
            <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${movie1}" class="card-img-top" alt=""></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">La Liga de la Justicia de Zack Snyder</h5><hr>
              <p class="text-black text-center">Luego de esperar cinco años de batallas interminables entre Zack Snyder y Warner Brothers la humanidad ha conseguido ver el corte del director de la película que él dice que siempre quiso hacer, llegó una nueva liga de héroes sin precedentes.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
          <div class="card bg-transparent border-light games-container">
            <a href="/"><img src="${movie2}" class="card-img-top" alt="Resident Evil Village"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Borat</h5><hr>
              <p class="text-black text-center">Borat Sagdiyev, uno de los periodistas más famosos en su país por triunfar en los Estados Unidos y su cultura, ha sido golpeado por la realidad y descubre que solo trajo vergüenza a Kazajstán. Para corregir el problema, su gobierno lo ha asignado a una nueva misión en territorio norteamericano.</p>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Juega Ahora</button>
          </div>
        </div>
    </section>
    <section class="row">
      <div class="col-sm-12 col-lg-8">
        <h3 class="text-black text-center title-games-section">Los Mejores Videojuegos</h3>
          <div class="card-group">
            <div class="card bg-transparent border-light games-container">
              <a href="/"><img src="${game1}" class="card-img-top" alt="Halo la Colección del Jefe Maestro"></a>
            <div class="card-body">
              <h5 class="card-title text-black text-center">Halo la Colección del Jefe Maestro</h5><hr>
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