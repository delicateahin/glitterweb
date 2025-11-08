// Datos de personajes
const data = {
  bloe: {
    name: "Blœven",
    logo: "assets/logo-bloe.png",
    img: "assets/photo_bloe.png",
    story: "no hay información",
    origin: "desconocido",
    parents: "—",
    birth: "—",
    sign: "—",
    mbti: "—",
    color: "—",
    power: "—",
    emoji: "•",
    dream: "—"
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
    name: "Member 4",
    logo: "assets/logo-m4.png",
    img: "assets/photo_member4.png",
    story: "no hay información",
    origin: "desconocido",
    parents: "—",
    birth: "—",
    sign: "—",
    mbti: "—",
    color: "—",
    power: "—",
    emoji: "•",
    dream: "—"
  },
  member5: {
    name: "Member 5",
    logo: "assets/logo-m5.png",
    img: "assets/photo_member5.png",
    story: "no hay información",
    origin: "desconocido",
    parents: "—",
    birth: "—",
    sign: "—",
    mbti: "—",
    color: "—",
    power: "—",
    emoji: "•",
    dream: "—"
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
