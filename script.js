// Datos de personajes
const data = {
  bloe: {
    name: "Blœ:ven",
    logo: "assets/logo-bloe.png",
    img: "assets/photo_bloe.png",
    story: "no hay información",
    origin: "Jardines celestiales de Liria +",
    parents: "Seraphiel ( Ángel de la música ) y Cupidara ( Diosa del amor )",
    birth: "17 Noviembre 2005 +",
    sign: "Escorpio",
    mbti: "ENFJ",
    color: "—",
    power: "—",
    emoji: "💌",
    dream: "Poder crear un mundo donde ningún corazón sufra por amor perdido o roto, donde cada alma recuerde cómo amar sin miedo, sin dolor y sin olvido. Un mundo 0 toxico."
  },
  star: {
    name: "Star Driscoll",
    logo: "assets/logo-star.png",
    img: "assets/photo_star.png",
    story: `Star nació entre dos mundos: 
su padre, un pirata temido en todos los mares, y su madre, una sirena cuyo poder hacía temblar a cualquier corriente. De él heredó el carácter fuerte, la facilidad para liderar incluso en el caos; de ella, la magia del agua, la voz capaz de atravesar la mente… y un corazón dispuesto a amar hasta lo imposible.

Pero la libertad nunca llega fácil. 
Su padre siempre quiso que ella continuara su legado, que tomara su lugar como heredera de su imperio marítimo. Cada decisión, cada paso, cada soplo de aire parecía ya escrito para ella. Y Star… Star odiaba sentirse atrapada.

Una noche, cansada del peso de expectativas ajenas, huyó. 
Cruzó costas, ciudades y océanos mezclándose entre humanos, buscando un lugar que pudiera llamar suyo. Un sitio donde pudiera ser, simplemente, *Star* — ni hija del Rey Pirata, ni reliquia de un linaje marino.

Lo que no imaginaba era que su hogar terminaría siendo un grupo de cinco chicas tan únicas y rotas como ella, capaces de iluminarle el camino incluso en la noche más profunda.`,
    origin: "el océano",
    parents: "Seymour 'King' Driscoll & Loraine",
    birth: "17 Diciembre 1695 — 21 años",
    sign: "Sagitario",
    mbti: "INFP",
    color: "blanco / dorado",
    power: "Control del agua (Élenchos tou nerou) y voz mental",
    emoji: "🪽",
    dream: "poder ser la estrella que merece ser"
  },
  lum: {
    name: "Luminae Elaris",
    logo: "assets/logo-lum.png",
    img: "assets/photo_lum.png",
    story: `Hija de Eos y un silfo errante, Luminae nació en el firmamento, allí donde las auroras respiran. 
Desde pequeña sintió que el cielo era demasiado silencioso para ella. Hermoso, sí… pero vacío. 
Su madre gobernaba el alba y su padre vagaba entre los vientos, pero Luminae soñaba con algo más: 
sentir la vida real, imperfecta, ruidosa, humana.

Una noche, mientras el horizonte se teñía en rosa y azul, tomó una decisión que cambiaría sus dos mundos. 
Descendió a la tierra, renunciando al fulgor divino, adoptando el nombre “Luminae”, 
la que ilumina, en honor a la mujer que la vio nacer con la luz del primer día.

Ahora, en un mundo que apenas entiende, busca aprender a vivir cada amanecer como si fuera único, 
mientras carga consigo la luz del alba y el canto del viento… poderes que pueden sanar o romper, 
según quién mire su brillo.`,
    origin: "cielo / auroras",
    parents: "Eos & Silfo errante",
    birth: "3 abril 1704 — apariencia humana: 20 años",
    sign: "Aries",
    mbti: "ENFJ",
    color: "azul / rosa",
    power: "Fōs tēs Aurōrās (luz del alba) y Anemos Phōnē (canto del viento)",
    emoji: "🌤️",
    dream: "Aprender a vivir cada día como si fuera único."
  },
  member4: {
    name: "Adelyn Sylara",
    logo: "assets/logo-m4.png",
    img: "assets/photo_member4.png",
    story: `Hija de Nymphaea, la ninfa de las flores silvestres, y de Faunor, guardián del bosque, Adelyn nació en un claro donde los lirios nunca dejaban de florecer. Dicen que su primer llanto hizo brotar una lluvia tibia que despertó a las semillas dormidas. Desde entonces, la vida crece allí donde sus pasos tocan la tierra.
Aunque el bosque era su hogar, Adelyn siempre sintió que el mundo más allá necesitaba su voz. Los humanos habían olvidado escuchar al viento, mirar las flores o agradecerle al agua. Y ella, con su magia —Florascencia Vitalis y Faunae Vox—, soñaba con recordarles lo que significa cuidar, no solo vivir.
Una noche, cuando las luciérnagas encendieron el cielo, tomó la decisión de dejar su bosque atrás. No fue por rebeldía, sino por amor. Quería aprender cómo florece la vida fuera de la tierra que la vio nacer.
Ahora, en un mundo que apenas empieza a comprender, Adelyn camina entre humanos y criaturas, llevando en sus manos la promesa de un nuevo comienzo.
`,
    origin: "desconocido",
    parents: "Nymphaea (ninfa de las flores) & Faunor (espíritu guardián de los animales)",
    birth: "25 abril 1705",
    sign: "Tauro",
    mbti: "INFP",
    color: "Verde pastel / rosado",
    power: "Florascencia Vitalis (energía de la naturaleza que cura y florece) y Faunae Vox (voz de la fauna que comunica y guía a los animales silvestres)",
    emoji: "🌷",
    dream: "Hacer florecer la bondad en los corazones de las otras personas, como si fueran parte del mismo bosque"
  },
  member5: {
    name: "Skiá Skotiá",
    logo: "assets/logo-m5.png",
    img: "assets/photo_member5.png",
    story: `Nacida en los jardines sombríos del Tártaro, Skiá es el equilibrio entre la oscuridad y la vida que brota de ella. Hija de Hades, señor de los muertos, y de Minthe, la ninfa convertida en planta de menta, su existencia es un secreto que pocos en el Olimpo recuerdan.
Desde pequeña, aprendió a moverse entre las almas perdidas, escuchando sus historias y ofreciéndoles consuelo. Su poder le permite dar forma a las sombras y extraer memorias del olvido, aunque cada recuerdo que rescata deja un lunar en su piel.
En la superficie, camina entre los mortales bajo identidades distintas, fascinada por su fugaz brillo. Aunque su presencia provoca escalofríos, su esencia no es maligna, solo busca demostrar que incluso en la oscuridad, puede florecer algo puro.
`,
    origin: "desconocido",
    parents: "Hades (Dios del Inframundo) & Minthe (Ninfa del río Cocito)",
    birth: "26 de noviembre de 3500 a. C.",
    sign: "Sagitario",
    mbti: "INFP",
    color: "negro / verde esmeralda",
    power: "Nékrōs Anásis (control de sombras y resurrección). Minthe’s Whisper (fragancia que calma o envenena según la emoción).",
    emoji: "🪞",
    dream: "Recordar lo que el olvido intenta borrar"
  }
};

// Función para actualizar ficha
function setCharacter(key){
  const c = data[key] || data['bloe'];

  // actualizar logo
  document.getElementById('brand-logo').src = c.logo;

  // actualizar DOM
  document.getElementById('char-image').src = c.img;
  document.getElementById('char-name').textContent = c.name;
  document.getElementById('char-origin').textContent = c.origin;
  document.getElementById('char-parents').textContent = c.parents;
  document.getElementById('char-birth').textContent = c.birth;
  document.getElementById('char-sign').textContent = c.sign;
  document.getElementById('char-mbti').textContent = c.mbti;
  document.getElementById('char-color').textContent = c.color;
  document.getElementById('char-power').textContent = c.power;
  document.getElementById('char-emoji').textContent = c.emoji;
  document.getElementById('char-dream').textContent = c.dream;
  document.getElementById('char-story').textContent = c.story;

  // actualizar botón activo del menú
  document.querySelectorAll('.menu-btn').forEach(btn=>{
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.menu-btn[data-character="${key}"]`);
  if(activeBtn) activeBtn.classList.add('active');

  // cambiar data-character en body para CSS dinámico
  document.body.setAttribute('data-character', key);
}


// listeners menú
document.querySelectorAll('.menu-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const char = btn.dataset.character;
    setCharacter(char);
  });
});

// Inicializar con Blœven
setCharacter('bloe');




