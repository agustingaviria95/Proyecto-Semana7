


const series = async () => {
    const series= await getData();
    const view = `
<div class="col-md-3">
                <div>
                    <h5>El cuento de la criada</h5>
                </div>
                <div>
                  <div class="img-container">
                    <img src="assets/img/cuento-criada.jpg" width="100%" height="-5%" alt="cowboy bebop serie">
                  </div>
                    <div>
                      <p>La serie, al igual que la novela, plantea un futuro distópico en el que las personas han perdido todos sus derechos individuales, en especial las mujeres fértiles (las criadas) que están sometidas a un sistema de esclavitud. Entre las criadas se encuentra June, la protagonista de esta historia, una mujer corriente que ha sido despojada de su identidad y que intenta sobrevivir.</p>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
                <div>
                    <h5>Rick y Morty</h5>
                </div>
                <div>
                  <div class="img-container"> 
                    <img src="assets/img/rick-and-morty.jpg" width="100%" height="-5%" alt="Rick and Morty serie">
                  </div>
                    <div>
                      <p>Rick es un "científico loco" irresponsable, alcohólico, egoísta, un poco depresivo y con poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras a lo largo del Cosmos y Universos paralelos.</p>
                    </div>
                </div>
              </div>
              `;
              return view;
            };
            
            export default series;