const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const modal = document.getElementById("vehicle-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = modal.querySelector(".close-btn");

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const imageCloseBtn = document.getElementById("image-close");
const prevBtn = document.getElementById("prev-image");
const nextBtn = document.getElementById("next-image");

const loader = document.getElementById("image-loader");

let currentImageIndex = 0;
let currentImageList = [];

const clickSound = new Audio("assets/sounds/mouse_click.mp3");
clickSound.volume = 0.3;

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals__container .tab__content"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

const vehicleDetails = {
  /* LSPD */
  "Baller ST (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlballer7.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Baller ST-D (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlballer8.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 205 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Buffalo STX (LPSD)": {
    images: [
      { src: "assets/assets_modal/dlbuffalo4.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 200 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Cavalcade XL (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcade3.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    speed: "~ 190 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Caracara (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcara.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Cinquemila (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcinq.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 190 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Comet S2 (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcomet6.jpg", label: "Livrée Police" },
      { src: "assets/assets_modal/dlcomet6_interceptor.jpg", label: "Livrée Police Interceptor" }
    ],
    liveries: ["Livrée Police", "Livrée Police Interceptor"],
    spaces: ["2"],
    speed: "~ 220 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Omnis e-GT (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcomni.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Éléctrique",
  },
  "Contender (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlcont.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Granger 3600LX (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlgranger2.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Jugular (LSPD)": {
    images: [
      { src: "assets/assets_modal/dljugular.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 220 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Komoda (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlkomoda.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 200 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Manchez Scout (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlmanch.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Outlaw (LSPD)": {
    images: [
      { src: "assets/assets_modal/dloutlaw.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["2"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Panto (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlpanto.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["2"],
    speed: "~ 120 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Compacts - Diesel",
  },
  "Rhinehart (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlrhine.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 195 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Shinobi (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlshin.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Landstalker XL (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlstalker2.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "10F Widebody (LSPD)": {
    images: [
      { src: "assets/assets_modal/dltenf2.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["2"],
    speed: "~ 240 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Turismo Omaggio (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlturismo3.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["2"],
    speed: "~ 220 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Supers - Diesel",
  },
  "Vigero ZX (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlvigero2.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["2"],
    speed: "~ 210 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "V-STR (LSPD)": {
    images: [
      { src: "assets/assets_modal/dlvstr.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 200 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Scout (LSPD)": {
    images: [
      { src: "assets/assets_modal/dnscoutun.jpg", label: "Scout Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Vapid Dominator GTX (SAHP)": {
    images: [
      { src: "assets/assets_modal/polndom.jpg", label: "Livrée Police San Andreas Highway Patrol" }
    ],
    liveries: ["Livrée Police San Andreas Highway Patrol"],
    spaces: ["2"],
    speed: "~ 230 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Vapid Stanier (LSPD)": {
    images: [
      { src: "assets/assets_modal/rpd.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Admiral Classic (LSPD)": {
    images: [
      { src: "assets/assets_modal/admiral3pol.jpg", label: "Livrée Police Demonstrator" },
      { src: "assets/assets_modal/admiral3pol_2.jpg", label: "Banalisée" }
    ],
    liveries: ["Livrée Police Demonstrator"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Vapid Stanier Undercover Taxi (LSPD)": {
    images: [
      { src: "assets/assets_modal/poltaxi.jpg", label: "Livrée Taxi Downtown Cab Co. Bleu & Jaune" },
      { src: "assets/assets_modal/poltaxi_2.jpg", label: "Livrée Taxi Downtown Cab Co. Jaune" }
    ],
    liveries: ["Livrée Taxi Downtown Cab Co. Bleu & Jaune, Livrée Taxi Downtown Cab Co. Jaune"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Moto Sport (LSPD)": {
    images: [
      { src: "assets/assets_modal/mbu2rb.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Moto Sport 2 (LSPD)": {
    images: [
      { src: "assets/assets_modal/mbu3rb.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Moto Cruiser (LSPD)": {
    images: [
      { src: "assets/assets_modal/mbu1flagrb.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Vélo (LSPD)": {
    images: [
      { src: "assets/assets_modal/pbike.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "Dépend de la motivation et de la pente...",
    type: "Vélo - Électrique",
  },
  "Caméra Robot (LSPD)": {
    images: [
      { src: "assets/assets_modal/rcdtruck.jpg", label: "Robot" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    speed: "C'est un robot tu t'attendais à quoi ?",
    type: "Robot - Électrique",
  },
  "Insurgent (LSPD)": {
    images: [
      { src: "assets/assets_modal/lspdinsur_rescue.jpg", label: "Livrée Police Rescue" },
      { src: "assets/assets_modal/lspdinsur.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police Rescue", "Livrée Police"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Mule (LSPD)": {
    images: [
      { src: "assets/assets_modal/lssdmule_lspd.jpg", label: "Livrée Police" },
      { src: "assets/assets_modal/lssdmule.jpg", label: "Livrée Sheriff" }
    ],
    liveries: ["Livrée Police", "Livrée Sheriff"],
    spaces: ["2"],
    speed: "Si elle roule vite, c’est qu’elle dévale une pente...",
    type: "Camions - Diesel",
  },
  "RCV (LSPD)": {
    images: [
      { src: "assets/assets_modal/riot2.jpg", label: "RCV" }
    ],
    liveries: ["Aucun"],
    spaces: ["6"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Patriot (DOA)": {
    images: [
      { src: "assets/assets_modal/doapatriot.jpg", label: "Patriot DOA" }
    ],
    liveries: ["Patriot DOA"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "S.W.A.T Van (LSPD)": {
    images: [
      { src: "assets/assets_modal/swatvanr2.jpg", label: "Van S.W.A.T Police" }
    ],
    liveries: ["Aucun"],
    spaces: ["7"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Vans - Diesel",
  },
  "S.W.A.T (LSPD)": {
    images: [
      { src: "assets/assets_modal/rookbb.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Police"],
    spaces: ["1"],
    speed: "Pas le plus rapide, mais personne n’a envie de le voir arriver...",
    type: "Off-Road - Diesel",
  },
  "Remorque (LSPD)": {
    images: [
      { src: "assets/assets_modal/DLTS2.jpg", label: "Remorque" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    speed: "Si elle va vite, c’est qu’elle est vide...",
    type: "Trailer",
  },

  /* Sheriff */
  "Moto (LSSD)": {
    images: [
      { src: "assets/assets_modal/bcsdb.jpg", label: "Livrée Sheriff" }
    ],
    liveries: ["Livrée Sheriff"],
    spaces: ["1"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "SUV Banalisé (LSSD)": {
    images: [
      { src: "assets/assets_modal/bombsemite.jpg", label: "Banalisé" }
    ],
    liveries: ["Banalisé"],
    spaces: ["4"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Buffalo Banalisée (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdumk1.jpg", label: "Banalisée" }
    ],
    liveries: ["Banalisée"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Stanier 1 (LSSD)": {
    images: [
      { src: "assets/assets_modal/vvpi.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/vvpi_245.jpg", label: "Livrée Sheriff 245" },
      { src: "assets/assets_modal/vvpi_483.jpg", label: "Livrée Sheriff 483" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 245", "Livrée Sheriff 483"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Stanier 2 (LSSD)": {
    images: [
      { src: "assets/assets_modal/vvpi2.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/vvpi2_unmarked.jpg", label: "Banalisée" },
      { src: "assets/assets_modal/vvpi2_271.jpg", label: "Livrée Sheriff 271" },
      { src: "assets/assets_modal/vvpi2_589.jpg", label: "Livrée Sheriff 589" }
    ],
    liveries: ["Livrée Sheriff", "Banalisée", "Livrée Sheriff 271", "Livrée Sheriff 271"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Stanier Banalisée (LSSD)": {
    images: [
      { src: "assets/assets_modal/sheriffdet2.jpg", label: "Banalisée" }
    ],
    liveries: ["Banalisée"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Insurgent (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdinsur_rescue.jpg", label: "Livrée Sheriff Rescue" },
      { src: "assets/assets_modal/lssdinsur.jpg", label: "Livrée Sheriff" }
    ],
    liveries: ["Livrée Sheriff Rescue", "Livrée Sheriff"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Mule (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdmule.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdmule_lspd.jpg", label: "Livrée Police" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Police"],
    spaces: ["2"],
    speed: "Si elle roule vite, c’est qu’elle dévale une pente...",
    type: "Camions - Diesel",
  },
  "Scout 1 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdscout1.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdscout1_145.jpg", label: "Livrée Sheriff 145" },
      { src: "assets/assets_modal/lssdscout1_460.jpg", label: "Livrée Sheriff 460" },
      { src: "assets/assets_modal/lssdscout1_936.jpg", label: "Livrée Sheriff 936" },
      { src: "assets/assets_modal/lssdscout1_757.jpg", label: "Livrée Sheriff 757" },
      { src: "assets/assets_modal/lssdscout1_439.jpg", label: "Livrée Sheriff 439" },
      { src: "assets/assets_modal/lssdscout1_110.jpg", label: "Livrée Sheriff 110" },
      { src: "assets/assets_modal/lssdscout1_682.jpg", label: "Livrée Sheriff 682" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 145", "Livrée Sheriff 460", "Livrée Sheriff 936", "Livrée Sheriff 757", "Livrée Sheriff 439", "Livrée Sheriff 110", "Livrée Sheriff 682" ],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout 2 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdscout2.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdscout2_761.jpg", label: "Livrée Sheriff 761" },
      { src: "assets/assets_modal/lssdscout2_917.jpg", label: "Livrée Sheriff 917" },
      { src: "assets/assets_modal/lssdscout2_646.jpg", label: "Livrée Sheriff 646" },
      { src: "assets/assets_modal/lssdscout2_361.jpg", label: "Livrée Sheriff 361" },
      { src: "assets/assets_modal/lssdscout2_964.jpg", label: "Livrée Sheriff 964" },
      { src: "assets/assets_modal/lssdscout2_739.jpg", label: "Livrée Sheriff 739" },
      { src: "assets/assets_modal/lssdscout2_301.jpg", label: "Livrée Sheriff 301" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 761", "Livrée Sheriff 917", "Livrée Sheriff 646", "Livrée Sheriff 361", "Livrée Sheriff 964", "Livrée Sheriff 739", "Livrée Sheriff 301" ],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout New 1 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdscoutnew1.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdscoutnew1_275.jpg", label: "Livrée Sheriff 275" },
      { src: "assets/assets_modal/lssdscoutnew1_417.jpg", label: "Livrée Sheriff 417" },
      { src: "assets/assets_modal/lssdscoutnew1_523.jpg", label: "Livrée Sheriff 523" },
      { src: "assets/assets_modal/lssdscoutnew1_589.jpg", label: "Livrée Sheriff 589" },
      { src: "assets/assets_modal/lssdscoutnew1_667.jpg", label: "Livrée Sheriff 667" },
      { src: "assets/assets_modal/lssdscoutnew1_674.jpg", label: "Livrée Sheriff 674" },
      { src: "assets/assets_modal/lssdscoutnew1_921.jpg", label: "Livrée Sheriff 921" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 275", "Livrée Sheriff 417", "Livrée Sheriff 523", "Livrée Sheriff 589", "Livrée Sheriff 667", "Livrée Sheriff 674", "Livrée Sheriff 921" ],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout New 2 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdscoutnew2.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdscoutnew2_114.jpg", label: "Livrée Sheriff 114" },
      { src: "assets/assets_modal/lssdscoutnew2_370.jpg", label: "Livrée Sheriff 370" },
      { src: "assets/assets_modal/lssdscoutnew2_622.jpg", label: "Livrée Sheriff 622" },
      { src: "assets/assets_modal/lssdscoutnew2_834.jpg", label: "Livrée Sheriff 834" },
      { src: "assets/assets_modal/lssdscoutnew2_858.jpg", label: "Livrée Sheriff 858" },
      { src: "assets/assets_modal/lssdscoutnew2_951.jpg", label: "Livrée Sheriff 951" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 114", "Livrée Sheriff 370", "Livrée Sheriff 622", "Livrée Sheriff 834", "Livrée Sheriff 858", "Livrée Sheriff 951"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout New 3 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdscoutnew3.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdscoutnew3_114.jpg", label: "Livrée Sheriff 114" },
      { src: "assets/assets_modal/lssdscoutnew3_370.jpg", label: "Livrée Sheriff 370" },
      { src: "assets/assets_modal/lssdscoutnew3_622.jpg", label: "Livrée Sheriff 622" },
      { src: "assets/assets_modal/lssdscoutnew3_834.jpg", label: "Livrée Sheriff 834" },
      { src: "assets/assets_modal/lssdscoutnew3_858.jpg", label: "Livrée Sheriff 858" },
      { src: "assets/assets_modal/lssdscoutnew3_951.jpg", label: "Livrée Sheriff 951" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 114", "Livrée Sheriff 370", "Livrée Sheriff 622", "Livrée Sheriff 834", "Livrée Sheriff 858", "Livrée Sheriff 951"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Buffalo S Security (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdsecurity1.jpg", label: "Livrée Sheriff" }
    ],
    liveries: ["Livrée Sheriff"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Buffalo S Banalisée (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdumk3.jpg", label: "Banalisée" }
    ],
    liveries: ["Banalisée"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Buffalo STX Banalisée (LSSD)": {
    images: [
      { src: "assets/assets_modal/pdumksx.jpg", label: "Banalisée" }
    ],
    liveries: ["Banalisée"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Alamo Banalisé (LSSD)": {
    images: [
      { src: "assets/assets_modal/sheriffdet.jpg", label: "Banalisé" }
    ],
    liveries: ["Banalisé"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Alamo K9 (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdalamonew1.jpg", label: "Livrée Sheriff K9" },
      { src: "assets/assets_modal/lssdalamonew1_148.jpg", label: "Livrée Sheriff K9 148" },
      { src: "assets/assets_modal/lssdalamonew1_332.jpg", label: "Livrée Sheriff K9 332" },
      { src: "assets/assets_modal/lssdalamonew1_526.jpg", label: "Livrée Sheriff K9 526" },
      { src: "assets/assets_modal/lssdalamonew1_594.jpg", label: "Livrée Sheriff K9 594" },
      { src: "assets/assets_modal/lssdalamonew1_679.jpg", label: "Livrée Sheriff K9 679" },
      { src: "assets/assets_modal/lssdalamonew1_686.jpg", label: "Livrée Sheriff K9 686" },
      { src: "assets/assets_modal/lssdalamonew1_762.jpg", label: "Livrée Sheriff K9 762" }
    ],
    liveries: ["Livrée Sheriff K9", "Livrée Sheriff K9 148", "Livrée Sheriff K9 332", "Livrée Sheriff K9 526", "Livrée Sheriff K9 594", "Livrée Sheriff K9 679", "Livrée Sheriff K9 686", "Livrée Sheriff K9 762"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Alamo (LSSD)": {
    images: [
      { src: "assets/assets_modal/lssdalamonew2.jpg", label: "Livrée Sheriff" },
      { src: "assets/assets_modal/lssdalamonew2_352.jpg", label: "Livrée Sheriff 352" },
      { src: "assets/assets_modal/lssdalamonew2_355.jpg", label: "Livrée Sheriff 355" },
      { src: "assets/assets_modal/lssdalamonew2_466.jpg", label: "Livrée Sheriff 466" },
      { src: "assets/assets_modal/lssdalamonew2_506.jpg", label: "Livrée Sheriff 506" },
      { src: "assets/assets_modal/lssdalamonew2_638.jpg", label: "Livrée Sheriff 638" },
      { src: "assets/assets_modal/lssdalamonew2_817.jpg", label: "Livrée Sheriff 817" },
      { src: "assets/assets_modal/lssdalamonew2_841.jpg", label: "Livrée Sheriff 841" }
    ],
    liveries: ["Livrée Sheriff", "Livrée Sheriff 352", "Livrée Sheriff 355", "Livrée Sheriff 466", "Livrée Sheriff 506", "Livrée Sheriff 638", "Livrée Sheriff 817", "Livrée Sheriff 841"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Terminus (LSSD)": {
    images: [
      { src: "assets/assets_modal/ll6rb.jpg", label: "Livrée Sheriff" }
    ],
    liveries: ["Livrée Sheriff"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },

  /* SAMS */
  "Sadler Ambulance (SAMS)": {
    images: [
      { src: "assets/assets_modal/dlamb.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Ambulance (SAMS)": {
    images: [
      { src: "assets/assets_modal/sandbulance.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "ALS Ambulance (SAMS)": {
    images: [
      { src: "assets/assets_modal/m2ccmed.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["4"],
    speed: "C'est fait pour aller vite ça..? Ah oui.. quelques fois, ~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Buffalo (SAMS)": {
    images: [
      { src: "assets/assets_modal/dlbuffalo.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Moto (SAMS)": {
    images: [
      { src: "assets/assets_modal/dlemsb.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["1"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Moto - Diesel",
  },
  "Granger (SAMS)": {
    images: [
      { src: "assets/assets_modal/dlgranger.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Issi Sport (SAMS)": {
    images: [
      { src: "assets/assets_modal/dlissiamb.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["2"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Speedo (SAMS)": {
    images: [
      { src: "assets/assets_modal/emsnspeedo.jpg", label: "Livrée SAMS" }
    ],
    liveries: ["Livrée SAMS"],
    spaces: ["7"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Aleutian (SAMS)": {
    images: [
      { src: "assets/assets_modal/aleutianems.jpg", label: "Livrée First Responder" }
    ],
    liveries: ["Livrée First Responder"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },

  /* Pompier */
  "Ambulance Medic (SAFR)": {
    images: [
      { src: "assets/assets_modal/f450ambo.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["6"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "ARFF (SAFR)": {
    images: [
      { src: "assets/assets_modal/arff2.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["4"],
    speed: "Il avance, c'est déjà bien.. mais ~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Arrow (SAFR)": {
    images: [
      { src: "assets/assets_modal/arrowrescue.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["7"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Brush 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/brush.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Brush 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/brushram.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Camion 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/enforcer.jpg", label: "Livrée Rouge 8" },
      { src: "assets/assets_modal/enforcer_2.jpg", label: "Livrée Noir 8" }
    ],
    liveries: ["Livrée Rouge 8, Livrée Noir 8"],
    spaces: ["6"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Camion 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/enforcerf.jpg", label: "Livrée Rouge 9" },
      { src: "assets/assets_modal/enforcerf_2.jpg", label: "Livrée Noir 9" }
    ],
    liveries: ["Livrée Rouge 9, Livrée Noir 9"],
    spaces: ["6"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Camion 3 (SAFR)": {
    images: [
      { src: "assets/assets_modal/enforcerta.jpg", label: "Livrée Rouge 10" },
      { src: "assets/assets_modal/enforcerta_2.jpg", label: "Livrée Noir 10" }
    ],
    liveries: ["Livrée Rouge 10, Livrée Noir 10"],
    spaces: ["6"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Camion 4 (SAFR)": {
    images: [
      { src: "assets/assets_modal/enforcerta.jpg", label: "Livrée SAFR 51" }
    ],
    liveries: ["Livrée SAFR 51"],
    spaces: ["8"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Command 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/f250pov.jpg", label: "Livrée SAFR Rouge" },
      { src: "assets/assets_modal/f250pov_2.jpg", label: "Livrée SAFR Noir" }
    ],
    liveries: ["Livrée SAFR Rouge, Livrée SAFR Noir"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Command 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/fpispov.jpg", label: "Livrée SAFR Rouge" },
      { src: "assets/assets_modal/fpispov_2.jpg", label: "Livrée SAFR Noir" }
    ],
    liveries: ["Livrée SAFR Rouge, Livrée SAFR Noir"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Command 3 (SAFR)": {
    images: [
      { src: "assets/assets_modal/fpiupov.jpg", label: "Livrée SAFR Rouge" },
      { src: "assets/assets_modal/fpiupov_2.jpg", label: "Livrée SAFR Gris" },
      { src: "assets/assets_modal/fpiupov_3.jpg", label: "Livrée SAFR Blanc" },
      { src: "assets/assets_modal/fpiupov_4.jpg", label: "Livrée SAFR Bleu" }
    ],
    liveries: ["Livrée SAFR Rouge, Livrée SAFR Gris, Livrée SAFR Blanc, Livrée SAFR Bleu"],
    spaces: ["4"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Command 4 (SAFR)": {
    images: [
      { src: "assets/assets_modal/rampov.jpg", label: "Livrée SAFR Rouge" },
      { src: "assets/assets_modal/rampov_2.jpg", label: "Livrée SAFR Gris" },
      { src: "assets/assets_modal/rampov_3.jpg", label: "Livrée SAFR Blanc" },
      { src: "assets/assets_modal/rampov_4.jpg", label: "Livrée SAFR Bleu" }
    ],
    liveries: ["Livrée SAFR Rouge, Livrée SAFR Gris, Livrée SAFR Blanc, Livrée SAFR Bleu"],
    spaces: ["4"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "F.I.U - Arson Unit (SAFR)": {
    images: [
      { src: "assets/assets_modal/mcurr.jpg", label: "Livrée F.I.U" }
    ],
    liveries: ["Livrée F.I.U"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Medic (SAFR)": {
    images: [
      { src: "assets/assets_modal/fordambo.jpg", label: "Livrée SAFR Rouge" },
      { src: "assets/assets_modal/fordambo_2.jpg", label: "Livrée SAFR Bleu" },
    ],
    liveries: ["Livrée SAFR Rouge, Livrée SAFR Bleu"],
    spaces: ["6"],
    speed: "~ 115 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Medic (LSFD)": {
    images: [
      { src: "assets/assets_modal/medic4.jpg", label: "Livrée LSFD 4132" },
      { src: "assets/assets_modal/medic4_2.jpg", label: "Livrée LSFD 2" }
    ],
    liveries: ["Livrée LSFD 4132, Livrée LSFD 2"],
    spaces: ["4"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Off-Road (SAFR)": {
    images: [
      { src: "assets/assets_modal/dagor.jpg", label: "Livrée SAFR Paleto" }
    ],
    liveries: ["Livrée SAFR Paleto"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Poste de commande (SAFR)": {
    images: [
      { src: "assets/assets_modal/21medcommandfd.jpg", label: "Livrée SAFD" }
    ],
    liveries: ["Livrée SAFD"],
    spaces: ["9"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Pump (SAFR)": {
    images: [
      { src: "assets/assets_modal/fpump.jpg", label: "Livrée SAFR 40" }
    ],
    liveries: ["Livrée SAFR 40"],
    spaces: ["7"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Rearmount (LSFD)": {
    images: [
      { src: "assets/assets_modal/rearmount.jpg", label: "Livrée LSFD" }
    ],
    liveries: ["Livrée LSFD"],
    spaces: ["-"],
    speed: "~ km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Urgences - Diesel",
  },
  "Remorque Bateau 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/DLTBOAT.jpg", label: "Remorque" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    speed: "Si elle va vite, c’est qu’elle est vide...",
    type: "Trailer",
  },
  "Remorque Bateau 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/DLTBOAT2.jpg", label: "Remorque" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    speed: "Si elle va vite, c’est qu’elle est vide...",
    type: "Trailer",
  },
  "Rescue 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/frescue.jpg", label: "Livrée SAFR Rescue 40" }
    ],
    liveries: ["Livrée SAFR Rescue 40"],
    spaces: ["6"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },
  "Rescue 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/rescue9c.jpg", label: "Livrée SAFR HAZMAT-1" }
    ],
    liveries: ["Livrée SAFR HAZMAT-1"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },
  "Rescue 3 (SAFR)": {
    images: [
      { src: "assets/assets_modal/rescue9d.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["3"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },
  "Squad 1 (SAFR)": {
    images: [
      { src: "assets/assets_modal/squad1.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["2"],
    speed: "~ 135 km/h",
    type: "Urgences - Diesel",
  },
  "Squad 2 (SAFR)": {
    images: [
      { src: "assets/assets_modal/squad2.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["2"],
    speed: "~ 130 km/h",
    type: "Urgences - Diesel",
  },
  "Tank (SAFR)": {
    images: [
      { src: "assets/assets_modal/ftank.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["3"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },
  "Tender (SAFR)": {
    images: [
      { src: "assets/assets_modal/tender9a.jpg", label: "Livrée SAFR TANKER 7" }
    ],
    liveries: ["Livrée SAFR TANKER 7"],
    spaces: ["2"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },
  "Wild (SAFR)": {
    images: [
      { src: "assets/assets_modal/fwild.jpg", label: "Livrée SAFR" }
    ],
    liveries: ["Livrée SAFR"],
    spaces: ["7"],
    speed: "~ 145 km/h",
    type: "Urgences - Diesel",
  },

  /* Ammu-Nation */
  "Boxville (Ammu Nation)": {
    images: [
      { src: "assets/assets_modal/aboxville.jpg", label: "Livrée Ammu-Nation" }
    ],
    liveries: ["Livrée Ammu-Nation"],
    spaces: ["6"],
    speed: "~ 100 km/h",
    type: "Commercial - Diesel",
  },
  "Burrito (Ammu Nation)": {
    images: [
      { src: "assets/assets_modal/aburrito.jpg", label: "Livrée Ammu-Nation Rouge" },
      { src: "assets/assets_modal/aburrito_2.jpg", label: "Livrée Ammu-Nation Blanc" }
    ],
    liveries: ["Livrée Ammu-Nation Rouge", "Livrée Ammu-Nation Blanc"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    type: "Commercial - Diesel",
  },
  "Stockade (Ammu Nation)": {
    images: [
      { src: "assets/assets_modal/astockade.jpg", label: "Livrée Ammu-Nation" }
    ],
    liveries: ["Livrée Ammu-Nation"],
    spaces: ["4"],
    speed: "~ 120 km/h",
    type: "Commercial - Diesel",
  },

  /* Armée */
  "Barracks Semi (Armée)": {
    images: [
      { src: "assets/assets_modal/barracks2.jpg", label: "Barrack Semi" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "Déjà plus vite que si il traîne quelque chose...",
    type: "Off-Road - Diesel",
  },
  "Remorque Anti Air (Armée)": {
    images: [
      { src: "assets/assets_modal/trailersmall2.jpg", label: "Remorque Anti Air" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    type: "Trailer",
  },
  "Remorque Plateau (Armée)": {
    images: [
      { src: "assets/assets_modal/armytrailer.jpg", label: "Remorque Plateau" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    type: "Trailer",
  },
  "Remorque Citerne (Armée)": {
    images: [
      { src: "assets/assets_modal/armytanker.jpg", label: "Remorque Citerne" }
    ],
    liveries: ["Aucun"],
    spaces: ["-"],
    type: "Trailer",
  },
  "Transport de troupes (Armée)": {
    images: [
      { src: "assets/assets_modal/barracks.jpg", label: "Transport de troupes" }
    ],
    liveries: ["Aucun"],
    spaces: ["10"],
    speed: ["Plus il y a de monde, moins il avance..."],
    type: "Camions - Diesel",
  },
  "Transport de troupes 2 (Armée)": {
    images: [
      { src: "assets/assets_modal/barracks3.jpg", label: "Transport de troupes 2" }
    ],
    liveries: ["Aucun"],
    spaces: ["10"],
    speed: ["Plus il y a de monde, moins il avance..."],
    type: "Camions - Diesel",
  },
  "Crusader (Armée)": {
    images: [
      { src: "assets/assets_modal/crusader.jpg", label: "Crusader" }
    ],
    liveries: ["Crusader"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Barrage (Armée)": {
    images: [
      { src: "assets/assets_modal/barrage.jpg", label: "Barrage" }
    ],
    liveries: ["Barrage"],
    spaces: ["4"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },

  /* Bus */
  "Tourbus": {
    images: [
      { src: "assets/assets_modal/tourbus.jpg", label: "Tourbus" }
    ],
    liveries: ["Vinewood"],
    spaces: ["10"],
    speed: "~ 100 km/h quand il est vide...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Bus": {
    images: [
      { src: "assets/assets_modal/bus.jpg", label: "Bus" }
    ],
    liveries: ["Los Santos Transit"],
    spaces: ["16"],
    speed: "~ 95 km/h quand il est vide...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Dashound (Bus)": {
    images: [
      { src: "assets/assets_modal/coach.jpg", label: "Dashound" }
    ],
    liveries: ["Dashound"],
    spaces: ["10"],
    speed: "~ 105 km/h quand il est vide...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Rental Bus": {
    images: [
      { src: "assets/assets_modal/rentalbus.jpg", label: "Rental Bus" }
    ],
    liveries: ["Escalera Rent-a-car"],
    spaces: ["10"],
    speed: "~ 100 km/h quand il est vide...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Bus Benefactor": {
    images: [
      { src: "assets/assets_modal/joggerpas.jpg", label: "Bus Benefactor" }
    ],
    liveries: ["Aucun"],
    spaces: ["10"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },

  /* Burger Shot */
  "Boxville (BurgerShot)": {
    images: [
      { src: "assets/assets_modal/boxville2.jpg", label: "Boxville BurgerShot" }
    ],
    liveries: ["BurgerShot"],
    spaces: ["6"],
    speed: "~ 100 km/h, si tu n'as rien à l'arrière...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "FoodTruck - Diesel",
  },
  "Boxville 2 (BurgerShot)": {
    images: [
      { src: "assets/assets_modal/taco.jpg", label: "Boxville BurgerShot" }
    ],
    liveries: ["BurgerShot"],
    spaces: ["1"],
    speed: "~ 100 km/h, si tu n'as rien à l'arrière...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "FoodTruck - Diesel",
  },

  /* Camions */
  "Phantom (Camions)": {
    images: [
      { src: "assets/assets_modal/phantom3.jpg", label: "Phantom" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Mule (Camions)": {
    images: [
      { src: "assets/assets_modal/mule.jpg", label: "Mule" },
      { src: "assets/assets_modal/mule_2.jpg", label: "Mule Good Aids Pharmacy" },
      { src: "assets/assets_modal/mule_3.jpg", label: "Mule E Cola" },
      { src: "assets/assets_modal/mule_4.jpg", label: "Mule Post Op" },
      { src: "assets/assets_modal/mule_5.jpg", label: "Mule Deals & Dollars" },
      { src: "assets/assets_modal/mule_6.jpg", label: "Mule Meteorite" },
      { src: "assets/assets_modal/mule_7.jpg", label: "Mule Pibwasser" }
    ],
    liveries: ["Mule, Mule Good Aids Pharmacy, Mule E Cola, Mule Post Op, Mule Deals & Dollars, Mule Meteorite, Mule Pibwasser"],
    spaces: ["6"],
    speed: "~ 100 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Benson (Camions)": {
    images: [
      { src: "assets/assets_modal/benson.jpg", label: "Benson Cool Beans" },
      { src: "assets/assets_modal/benson_2.jpg", label: "Benson Logger Light" },
      { src: "assets/assets_modal/benson_3.jpg", label: "Benson Los Santos Hoard House" },
      { src: "assets/assets_modal/benson_4.jpg", label: "Benson Stay Frosty" },
      { src: "assets/assets_modal/benson_5.jpg", label: "Benson 247" },
      { src: "assets/assets_modal/benson_6.jpg", label: "Benson Pop's Pills" },
      { src: "assets/assets_modal/benson_7.jpg", label: "Benson" }
    ],
    liveries: ["Benson Cool Beans, Benson Logger Light, Benson Los Santos Hoard House, Benson Stay Frosty, Benson 247, Benson Pop's Pills, Benson"],
    spaces: ["2"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Packer (Camions)": {
    images: [
      { src: "assets/assets_modal/packer.jpg", label: "Packer" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 120 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Camion de poubelles (Camions)": {
    images: [
      { src: "assets/assets_modal/trash.jpg", label: "Camions de Poubelles Little Pricks" }
    ],
    liveries: ["Little Pricks"],
    spaces: ["4"],
    speed: "~ 120 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Pounder (Camions)": {
    images: [
      { src: "assets/assets_modal/pounder.jpg", label: "Pounder Big Goods" },
      { src: "assets/assets_modal/pounder_2.jpg", label: "Pounder Rers Liquor" }
    ],
    liveries: ["Pounder Big Goods, Pounder Rers Liquor"],
    spaces: ["2"],
    speed: "~ 120 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },

  /* Événements */
  "Festival Bus (Événements)": {
    images: [
      { src: "assets/assets_modal/pbus2.jpg", label: "Bus Festival" }
    ],
    liveries: ["Aucun"],
    spaces: ["11"],
    speed: "~ 95 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Formula PR4 (Événements)": {
    images: [
      { src: "assets/assets_modal/formula.jpg", label: "Formula PR4" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Monoplace - Diesel",
  },
  "Formula R88 (Événements)": {
    images: [
      { src: "assets/assets_modal/formula2.jpg", label: "Formula R88" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Monoplace - Diesel",
  },
  "Formula BR8 (Événements)": {
    images: [
      { src: "assets/assets_modal/openwheel1.jpg", label: "Formula BR8" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Monoplace - Diesel",
  },
  "Formula DR1 (Événements)": {
    images: [
      { src: "assets/assets_modal/openwheel2.jpg", label: "Formula DR1" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Monoplace - Diesel",
  },

  /* Ferme */
  "Remorque à foin (Ferme)": {
    images: [
      { src: "assets/assets_modal/baletrailer.jpg", label: "Remorque à foin" }
    ],
    liveries: ["Aucun"],
    type: "Remorque",
  },
  "Remorque à grain (Ferme)": {
    images: [
      { src: "assets/assets_modal/graintrailer.jpg", label: "Remorque à grain" }
    ],
    liveries: ["Aucun"],
    type: "Remorque",
  },
  "Tracteur (Ferme)": {
    images: [
      { src: "assets/assets_modal/tractor2.jpg", label: "Tracteur" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 55 km/h, c'est un tracteur quoi...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Tracteur - Diesel",
  },
  "Herse agricole (Ferme)": {
    images: [
      { src: "assets/assets_modal/raketrailer.jpg", label: "Herse agricole" }
    ],
    liveries: ["Aucun"],
    type: "Herse",
  },

  /* FIB */
  "Revolter (FIB)": {
    images: [
      { src: "assets/assets_modal/revolter.jpg", label: "Revolter" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Brawler (FIB)": {
    images: [
      { src: "assets/assets_modal/brawler.jpg", label: "Brawler" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Schafter LWB (FIB)": {
    images: [
      { src: "assets/assets_modal/schafter4.jpg", label: "Schafter LWB" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Hakuchou (FIB)": {
    images: [
      { src: "assets/assets_modal/hakuchou.jpg", label: "Hakuchou" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Motos - Diesel",
  },
  "Tailgater S (FIB)": {
    images: [
      { src: "assets/assets_modal/tailgater2.jpg", label: "Tailgater S" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Fourgon Speedo (FIB)": {
    images: [
      { src: "assets/assets_modal/speedo.jpg", label: "Fourgon Speedo" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Vans - Diesel",
  },

  /* G6 */
  "Stockade (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/stockade.jpg", label: "Livrée Gruppe6" }
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 120 km/h, quand il n'y a pas de billets...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Stockade 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6stockade2.jpg", label: "Livrée Gruppe6 Bleu" },
      { src: "assets/assets_modal/g6stockade2_2.jpg", label: "Livrée Gruppe sechs Bleu" },
      { src: "assets/assets_modal/g6stockade2_3.jpg", label: "Livrée Gruppe6 Blanc" }
    ],
    liveries: ["Livrée Gruppe6 Bleu, Livrée Gruppe sechs Bleu, Livrée Gruppe6 Blanc"],
    spaces: ["4"],
    speed: "~ 120 km/h, quand il n'y a pas de billets...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Inter 6x6 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/inter6x6.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/inter6x6_2.jpg", label: "Banalisé" }
    ],
    liveries: ["Livrée Gruppe6, Banalisé"],
    spaces: ["7"],
    speed: "~ 130 km/h, quand il n'y a pas de billets...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Alamo (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6alamo.jpg", label: "Livrée Gruppe6" },
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["6"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Alamo 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6alamo2.jpg", label: "Livrée Gruppe6" },
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Alamo 3 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6alamo3.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6alamo3_2.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6alamo3_3.jpg", label: "Livrée Gruppe sechs Noir" },
      { src: "assets/assets_modal/g6alamo3_4.jpg", label: "Banalisé" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security, Livrée Gruppe sechs Noir, Banalisé"],
    spaces: ["6"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Alamo 4 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6alamo4.jpg", label: "Livrée Diamond Patrol Car" },
      { src: "assets/assets_modal/g6alamo4_2.jpg", label: "Livrée Diamond Supervisor" },
      { src: "assets/assets_modal/g6alamo4_3.jpg", label: "Livrée Airport Security LSIA" },
      { src: "assets/assets_modal/g6alamo4_4.jpg", label: "Livrée Airport Supervisor Security LSIA" },
      { src: "assets/assets_modal/g6alamo4_5.jpg", label: "Livrée Security Bleu" },
      { src: "assets/assets_modal/g6alamo4_6.jpg", label: "Livrée Supervisor Security Bleu" }
    ],
    liveries: ["Livrée Diamond Patrol Car, Livrée Diamond Supervisor, Livrée Airport Security LSIA, Livrée Airport Supervisor Security LSIA, Livrée Security Bleu, Livrée Supervisor Security Bleu"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Baller (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6baller.jpg", label: "Livrée Gruppe6" },
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Moto 1 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6bike.jpg", label: "Livrée Gruppe6" },
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["2"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Motos - Diesel",
  },
  "Moto 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6bike2.jpg", label: "Livrée Gruppe6" },
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["2"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Motos - Diesel",
  },
  "Bison (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6bison.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6bison_2.jpg", label: "Livrée Gruppe6 USALS" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 USALS"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Bison 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6bison2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6bison2_2.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6bison2_3.jpg", label: "Livrée Gruppe sechs Noir" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security, Livrée Gruppe sechs Noir"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Boxville (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6boxville.jpg", label: "Livrée Gruppe6 Maintenance Team" },
      { src: "assets/assets_modal/g6boxville_2.jpg", label: "Livrée Gruppe6 Operational Support Unit" }
    ],
    liveries: ["Livrée Gruppe6 Maintenance Team, Livrée Gruppe6 Operational Support Unit"],
    spaces: ["6"],
    speed: "~ 100 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Fourgons - Diesel",
  },
  "Boxville 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6boxville2.jpg", label: "Livrée Gruppe6 Bleu" },
      { src: "assets/assets_modal/g6boxville2_2.jpg", label: "Livrée Gruppe sechs Bleu" }
    ],
    liveries: ["Livrée Gruppe6 Bleu, Livrée Gruppe sechs Bleu"],
    spaces: ["6"],
    speed: "~ 100 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Fourgons - Diesel",
  },
  "Buffalo (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6buffalo2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6buffalo2_2.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6buffalo2_3.jpg", label: "Livrée Gruppe sechs Noir" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security, Livrée Gruppe sechs Noir"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Buffalo 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6buffalo3.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6buffalo3_2.jpg", label: "Livrée Gruppe6 Security" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Buffalo 3 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6buffalo4.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6buffalo4_2.jpg", label: "Livrée Gruppe6 USALS" },
      { src: "assets/assets_modal/g6buffalo4_3.jpg", label: "Livrée Gruppe6 USALS Vert" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 USALS, Livrée Gruppe6 USALS Vert"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Buffalo 4 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6buffalo5.jpg", label: "Livrée Gruppe6" }
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Buffalo 5 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6buffalo6.jpg", label: "Livrée Diamond Patrol Car" },
      { src: "assets/assets_modal/g6buffalo6_2.jpg", label: "Livrée Diamond Supervisor" },
      { src: "assets/assets_modal/g6buffalo6_3.jpg", label: "Livrée Airport Security LSIA" },
      { src: "assets/assets_modal/g6buffalo6_4.jpg", label: "Livrée Airport Supervisor Security LSIA" },
      { src: "assets/assets_modal/g6buffalo6_5.jpg", label: "Livrée Security Bleu" },
      { src: "assets/assets_modal/g6buffalo6_6.jpg", label: "Livrée Supervisor Security Bleu" }
    ],
    liveries: ["Livrée Diamond Patrol Car, Livrée Diamond Supervisor, Livrée Airport Security LSIA, Livrée Airport Supervisor Security LSIA, Livrée Security Bleu, Livrée Supervisor Security Bleu"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Fugitive (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6fugitive.jpg", label: "Livrée Gruppe6" }
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Fugitive 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6fugitive2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6fugitive2_2.jpg", label: "Livrée Gruppe6 Security" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security"],
    spaces: ["4"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Gresley (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6gresley.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6gresley_2.jpg", label: "Livrée Gruppe6 Security USALS Vert" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security USALS Vert"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Gresley 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6gresley2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6gresley2_2.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6gresley2_3.jpg", label: "Banalisé" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security, Banalisé"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Pony (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6pony.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6pony_2.jpg", label: "Livrée Gruppe6 Operational Support Unit" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Operational Support Unit"],
    spaces: ["4"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Fourgons - Diesel",
  },
  "Landstalker (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6roamer.jpg", label: "Livrée Gruppe6" }
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Landstalker 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6roamer2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6roamer2_2.jpg", label: "Livrée Gruppe6 Security" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6scout2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6scout2_2.jpg", label: "Livrée Gruppe6 Security" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6scout3.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6scout3_2.jpg", label: "Livrée Gruppe6 Supervisor" }
    ],
    liveries: ["Livrée Gruppe6 Security, Livrée Gruppe6 Supervisor"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Scout 3 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6scout5.jpg", label: "Livrée Diamond Patrol Car" },
      { src: "assets/assets_modal/g6scout5_2.jpg", label: "Livrée Airport Security LSIA" },
      { src: "assets/assets_modal/g6scout5_3.jpg", label: "Livrée Security Bleu" }
    ],
    liveries: ["Livrée Diamond Patrol Car, Livrée Airport Security LSIA, Livrée Security Bleu"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Stanier (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6stanier.jpg", label: "Livrée Gruppe6 Security" },
      { src: "assets/assets_modal/g6stanier_2.jpg", label: "Livrée Gruppe6 Supervisor" }
    ],
    liveries: ["Livrée Gruppe6 Security, Livrée Gruppe6 Supervisor"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Stanier 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6stanier2.jpg", label: "Livrée Gruppe6" },
      { src: "assets/assets_modal/g6stanier2_2.jpg", label: "Livrée Gruppe6 Security" }
    ],
    liveries: ["Livrée Gruppe6, Livrée Gruppe6 Security"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Stanier 3 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6stanier3.jpg", label: "Livrée Gruppe sechs Bleu" },
      { src: "assets/assets_modal/g6stanier3_2.jpg", label: "Livrée Gruppe sechs Bleu Délavé" }
    ],
    liveries: ["Livrée Gruppe sechs Bleu, Livrée Gruppe sechs Bleu Délavé"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Stanier 4 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6stanier4.jpg", label: "Livrée Diamond Patrol Car" },
      { src: "assets/assets_modal/g6stanier4_2.jpg", label: "Livrée Airport Security LSIA" },
      { src: "assets/assets_modal/g6stanier4_3.jpg", label: "Livrée Security Bleu" },
      { src: "assets/assets_modal/g6stanier4_4.jpg", label: "Livrée Security Blanc" }
    ],
    liveries: ["Livrée Diamond Patrol Car, Livrée Airport Security LSIA, Livrée Security Bleu, Livrée Security Blanc"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Camion (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6steed.jpg", label: "Livrée Gruppe sechs Bleu" }
    ],
    liveries: ["Livrée Gruppe sechs Bleu"],
    spaces: ["4"],
    speed: "~ 100 km/h, quand il est vide...",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Cruiser (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6torrence.jpg", label: "Livrée Gruppe6" }
    ],
    liveries: ["Livrée Gruppe6"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Cruiser 2 (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6torrence2.jpg", label: "Livrée Diamond Patrol Car" },
      { src: "assets/assets_modal/g6torrence2_2.jpg", label: "Livrée Airport Security LSIA" },
      { src: "assets/assets_modal/g6torrence2_3.jpg", label: "Livrée Security Bleu" }
    ],
    liveries: ["Livrée Diamond Patrol Car, Livrée Airport Security LSIA, Livrée Security Bleu"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Yosemite (Gruppe6)": {
    images: [
      { src: "assets/assets_modal/g6yosemite.jpg", label: "Livrée Gruppe sechs Bleu" }
    ],
    liveries: ["Livrée Gruppe sechs Bleu"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Pick-up - Diesel",
  },

  /* Gouvernement */
  "Baller LE LWB Blindé (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/baller6.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Schafter LWB (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/schafter6.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Baller LE Blindé (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/baller5.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Schafter V12 (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/schafter5.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 185 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Cognoscenti 55 (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/cog552.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Cognoscenti Blindée (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/cognoscenti2.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Buffalo Banalisée (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/fbi.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Granger Banalisé (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/fbi2.jpg", label: "Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["7"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Vapid Offroad (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/ll7rb.jpg", label: "Livrée Gouvernement" }
    ],
    liveries: ["Livrée Gouvernement"],
    spaces: ["7"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Limousine (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/cavalcade2s.jpg", label: "Limousine Cavalcade" }
    ],
    liveries: ["Aucune"],
    spaces: ["6"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Limousine - Diesel",
  },
  "Comet (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/umcs21rb.jpg", label: "Comet Banalisée" }
    ],
    liveries: ["Aucune"],
    spaces: ["2"],
    speed: "~ 225 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Dominator (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/umdomgt1rb.jpg", label: "Dominator Banalisée" }
    ],
    liveries: ["Aucune"],
    spaces: ["2"],
    speed: "~ 235 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Buffalo (Gouvernement)": {
    images: [
      { src: "assets/assets_modal/umhellfire1rb.jpg", label: "Buffalo Banalisée" }
    ],
    liveries: ["Aucune"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Camion Service Technique": {
    images: [
      { src: "assets/assets_modal/jogger.jpg", label: "Livrée Service Technique" }
    ],
    liveries: ["Livrée Service Technique"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camion - Diesel",
  },
  "Bison Banalisé": {
    images: [
      { src: "assets/assets_modal/gstbisxl1b.jpg", label: "Bison Banalisé" }
    ],
    liveries: ["Aucun"],
    spaces: ["6"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Pick-up - Diesel",
  },
  "Elegy Banalisée": {
    images: [
      { src: "assets/assets_modal/gstrh81b.jpg", label: "Elegy Banalisée" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },

  /* LifeGuard */
  "Mesa LifeGuard": {
    images: [
      { src: "assets/assets_modal/lguardmesa.jpg", label: "Livrée LifeGuard Rouge LG410" },
      { src: "assets/assets_modal/lguardmesa_2.jpg", label: "Livrée LifeGuard Rouge LG025" },
      { src: "assets/assets_modal/lguardmesa_3.jpg", label: "Livrée LifeGuard Rouge LG666" },
      { src: "assets/assets_modal/lguardmesa_4.jpg", label: "Livrée LifeGuard Rouge LG008" },
      { src: "assets/assets_modal/lguardmesa_5.jpg", label: "Livrée LifeGuard Jaune LG072" },
      { src: "assets/assets_modal/lguardmesa_6.jpg", label: "Livrée LifeGuard Jaune LG836" },
      { src: "assets/assets_modal/lguardmesa_7.jpg", label: "Livrée LifeGuard Jaune LG012" },
      { src: "assets/assets_modal/lguardmesa_8.jpg", label: "Livrée LifeGuard Jaune LG471" }
    ],
    liveries: ["Livrée LifeGuard Rouge LG410, Livrée LifeGuard Rouge LG025, Livrée LifeGuard Rouge LG666, Livrée LifeGuard Rouge LG008, Livrée LifeGuard Jaune LG836, Livrée LifeGuard Jaune LG012, Livrée LifeGuard Jaune LG471"],
    spaces: ["2"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Blazer LifeGuard": {
    images: [
      { src: "assets/assets_modal/blazer2.jpg", label: "Livrée LifeGuard Rouge" }
    ],
    liveries: ["Livrée LifeGuard Rouge"],
    spaces: ["1"],
    speed: "~ 105 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Granger LifeGuard": {
    images: [
      { src: "assets/assets_modal/lguard.jpg", label: "Livrée LifeGuard Jaune" }
    ],
    liveries: ["Livrée LifeGuard Jaune"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },

  /* US Marshal */
  "Buffalo (US Marshal)": {
    images: [
      { src: "assets/assets_modal/usmsbuffalo.jpg", label: "Livrée US Marshal 1" },
      { src: "assets/assets_modal/usmsbuffalo_2.jpg", label: "Livrée US Marshal 2" },
      { src: "assets/assets_modal/usmsbuffalo_3.jpg", label: "Livrée US Marshal 3" },
      { src: "assets/assets_modal/usmsbuffalo_4.jpg", label: "Livrée US Marshal 4" },
      { src: "assets/assets_modal/usmsbuffalo_5.jpg", label: "Livrée US Marshal 5" },
      { src: "assets/assets_modal/usmsbuffalo_6.jpg", label: "Livrée US Marshal 6" },
      { src: "assets/assets_modal/usmsbuffalo_7.jpg", label: "Livrée US Marshal 7" },
      { src: "assets/assets_modal/usmsbuffalo_8.jpg", label: "Livrée US Marshal 8" },
      { src: "assets/assets_modal/usmsbuffalo_9.jpg", label: "Livrée US Marshal 9" },
      { src: "assets/assets_modal/usmsbuffalo_10.jpg", label: "Livrée US Marshal 10" },
      { src: "assets/assets_modal/usmsbuffalo_11.jpg", label: "Livrée US Marshal 11" },
      { src: "assets/assets_modal/usmsbuffalo_12.jpg", label: "Livrée US Marshal 12" }
    ],
    liveries: ["Livrée US Marshal 1, Livrée US Marshal 2, Livrée US Marshal 3, Livrée US Marshal 4, Livrée US Marshal 5, Livrée US Marshal 6, Livrée US Marshal 7, Livrée US Marshal 8, Livrée US Marshal 9, Livrée US Marshal 10, Livrée US Marshal 11, Livrée US Marshal 12"],
    spaces: ["4"],
    speed: "~ 180 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Rumpo (US Marshal)": {
    images: [
      { src: "assets/assets_modal/usmsrumpo.jpg", label: "Livrée US Marshal 1" },
      { src: "assets/assets_modal/usmsrumpo_2.jpg", label: "Livrée US Marshal 2" },
      { src: "assets/assets_modal/usmsrumpo_3.jpg", label: "Livrée US Marshal 3" },
      { src: "assets/assets_modal/usmsrumpo_4.jpg", label: "Livrée US Marshal 4" },
      { src: "assets/assets_modal/usmsrumpo_5.jpg", label: "Livrée US Marshal 5" },
      { src: "assets/assets_modal/usmsrumpo_6.jpg", label: "Livrée US Marshal 6" },
      { src: "assets/assets_modal/usmsrumpo_7.jpg", label: "Livrée US Marshal 7" },
      { src: "assets/assets_modal/usmsrumpo_8.jpg", label: "Livrée US Marshal 8" },
      { src: "assets/assets_modal/usmsrumpo_9.jpg", label: "Livrée US Marshal 9" },
      { src: "assets/assets_modal/usmsrumpo_10.jpg", label: "Livrée US Marshal 10" },
      { src: "assets/assets_modal/usmsrumpo_11.jpg", label: "Livrée US Marshal 11" },
      { src: "assets/assets_modal/usmsrumpo_12.jpg", label: "Livrée US Marshal 12" }
    ],
    liveries: ["Livrée US Marshal 1, Livrée US Marshal 2, Livrée US Marshal 3, Livrée US Marshal 4, Livrée US Marshal 5, Livrée US Marshal 6, Livrée US Marshal 7, Livrée US Marshal 8, Livrée US Marshal 9, Livrée US Marshal 10, Livrée US Marshal 11, Livrée US Marshal 12"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Fourgons - Diesel",
  },
  "Washington (US Marshal)": {
    images: [
      { src: "assets/assets_modal/usmswashington.jpg", label: "Livrée US Marshal 1" },
      { src: "assets/assets_modal/usmswashington_2.jpg", label: "Livrée US Marshal 2" },
      { src: "assets/assets_modal/usmswashington_3.jpg", label: "Livrée US Marshal 3" },
      { src: "assets/assets_modal/usmswashington_4.jpg", label: "Livrée US Marshal 4" },
      { src: "assets/assets_modal/usmswashington_5.jpg", label: "Livrée US Marshal 5" },
      { src: "assets/assets_modal/usmswashington_6.jpg", label: "Livrée US Marshal 6" },
      { src: "assets/assets_modal/usmswashington_7.jpg", label: "Livrée US Marshal 7" },
      { src: "assets/assets_modal/usmswashington_8.jpg", label: "Livrée US Marshal 8" },
      { src: "assets/assets_modal/usmswashington_9.jpg", label: "Livrée US Marshal 9" },
      { src: "assets/assets_modal/usmswashington_10.jpg", label: "Livrée US Marshal 10" },
      { src: "assets/assets_modal/usmswashington_11.jpg", label: "Livrée US Marshal 11" },
      { src: "assets/assets_modal/usmswashington_12.jpg", label: "Livrée US Marshal 12" }
    ],
    liveries: ["Livrée US Marshal 1, Livrée US Marshal 2, Livrée US Marshal 3, Livrée US Marshal 4, Livrée US Marshal 5, Livrée US Marshal 6, Livrée US Marshal 7, Livrée US Marshal 8, Livrée US Marshal 9, Livrée US Marshal 10, Livrée US Marshal 11, Livrée US Marshal 12"],
    spaces: ["4"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Bus (US Marshal)": {
    images: [
      { src: "assets/assets_modal/usmscoach.jpg", label: "Livrée US Marshal" }
    ],
    liveries: ["Livrée US Marshal"],
    spaces: ["10"],
    speed: "~ 105 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Bus - Diesel",
  },
  "Granger 3500LX (US Marshal)": {
    images: [
      { src: "assets/assets_modal/usmsgranger.jpg", label: "Livrée US Marshal" }
    ],
    liveries: ["Livrée US Marshal"],
    spaces: ["4"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },

  /* Mécano */
  "Plateau 1 (Mécano Samcro)": {
    images: [
      { src: "assets/assets_modal/brickader.jpg", label: "Livrée Samcro" }
    ],
    liveries: ["Livrée Samcro"],
    spaces: ["2"],
    speed: "~ 115 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Plateau 2 (Mécano)": {
    images: [
      { src: "assets/assets_modal/flatbed.jpg", label: "Plateau 2" }
    ],
    liveries: ["Aucun"],
    spaces: ["2"],
    speed: "~ 110 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Slamvan Custom (Mécano)": {
    images: [
      { src: "assets/assets_modal/slamvan3.jpg", label: "Livrée Samcro" },
      { src: "assets/assets_modal/slamvan3_2.jpg", label: "Livrée Blanc" },
      { src: "assets/assets_modal/slamvan3_3.jpg", label: "Livrée Flammes Noires" },
      { src: "assets/assets_modal/slamvan3_4.jpg", label: "Livrée Flammes Bleues" },
      { src: "assets/assets_modal/slamvan3_5.jpg", label: "Livrée Flammes Rouge" },
      { src: "assets/assets_modal/slamvan3_6.jpg", label: "Livrée Benny's Rouillé" },
      { src: "assets/assets_modal/slamvan3_7.jpg", label: "Livrée Rouillé" },
      { src: "assets/assets_modal/slamvan3_8.jpg", label: "Livrée Flammes Rouillée" },
      { src: "assets/assets_modal/slamvan3_9.jpg", label: "Livrée Requin" }
    ],
    liveries: ["Livrée Samcro, Livrée Blanc, Livrée Flammes Noires, Livrée Flammes Bleues, Livrée Rouge, Livrée Benny's Rouillé, Livrée Rouillé, Livrée Flammes Rouillée, Livrée Requin"],
    spaces: ["2"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Muscle - Diesel",
  },
  "Slamtruck (Mécano)": {
    images: [
      { src: "assets/assets_modal/slamtruck.jpg", label: "Livrée Samcro" },
      { src: "assets/assets_modal/slamtruck_2.jpg", label: "Livrée Benny's" },
      { src: "assets/assets_modal/slamtruck_3.jpg", label: "Livrée Los Santos Custom" }
    ],
    liveries: ["Livrée Samcro, Livrée Benny's, Livrée Los Santos Custom"],
    spaces: ["2"],
    speed: "~ 155 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Camions - Diesel",
  },
  "Guardian (Mécano)": {
    images: [
      { src: "assets/assets_modal/guardian.jpg", label: "Guardian" }
    ],
    liveries: ["Aucun"],
    spaces: ["6"],
    speed: "~ 150 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Pick-up - Diesel",
  },

  /* Park Rangers */
  "Caracara (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangercara.jpg", label: "Livrée Park Rangers Ligne Verte" },
      { src: "assets/assets_modal/prangercara_2.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte, Livrée Park Rangers Blanc"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Everon (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangereveron.jpg", label: "Livrée Park Rangers Ligne Verte" },
      { src: "assets/assets_modal/prangereveron_2.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte, Livrée Park Rangers Blanc"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Outlaw (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/proutlaw.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Blanc"],
    spaces: ["2"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "Cruiser (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangertor.jpg", label: "Livrée Park Rangers Ligne Verte" },
      { src: "assets/assets_modal/prangertor_2.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte, Livrée Park Rangers Blanc"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Ranger SCT (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangersct.jpg", label: "Livrée Park Rangers Ligne Verte" },
      { src: "assets/assets_modal/prangersct_2.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte, Livrée Park Rangers Blanc"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },
  "Buffalo (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangerbu.jpg", label: "Livrée Park Rangers Ligne Verte" },
      { src: "assets/assets_modal/prangerbu_2.jpg", label: "Livrée Park Rangers Blanc" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte, Livrée Park Rangers Blanc"],
    spaces: ["4"],
    speed: "~ 165 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sports - Diesel",
  },
  "Verus (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/prangerverus.jpg", label: "Verus Park Rangers" }
    ],
    liveries: ["Aucun"],
    spaces: ["1"],
    speed: "~ 135 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Off-Road - Diesel",
  },
  "BF 400 (Park Rangers)": {
    images: [
      { src: "assets/assets_modal/parkbf400.jpg", label: "Livrée Park Rangers Ligne Verte" }
    ],
    liveries: ["Livrée Park Rangers Ligne Verte"],
    spaces: ["2"],
    speed: "~ 175 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Motos - Diesel",
  },

  /* Taxi */
  "Rhinehart (Taxi)": {
    images: [
      { src: "assets/assets_modal/trhinehart.jpg", label: "Livrée Downtown Cab Co. Jaune" },
      { src: "assets/assets_modal/trhinehart_2.jpg", label: "Livrée Downtown Cab Co. Bleu" }
    ],
    liveries: ["Livrée Downtown Cab Co. Jaune, Livrée Downtown Cab Co. Bleu"],
    spaces: ["4"],
    speed: "~ 145 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Taxi": {
    images: [
      { src: "assets/assets_modal/trhinehart.jpg", label: "Livrée Downtown Cab Co. Bleu & Jaune" }
    ],
    liveries: ["Livrée Downtown Cab Co. Bleu & Jaune"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },
  "Admiral Classic (Taxi)": {
    images: [
      { src: "assets/assets_modal/admiral3taxi.jpg", label: "Livrée Downtown Cab Co. Jaune" },
      { src: "assets/assets_modal/admiral3taxi_2.jpg", label: "Livrée LS Blaine County Taxi Délavé" },
      { src: "assets/assets_modal/admiral3taxi_3.jpg", label: "Livrée Downtown Cab Co. Bleu & Jaune" },
      { src: "assets/assets_modal/admiral3taxi_4.jpg", label: "Livrée Taxi Demonstrator" },
      { src: "assets/assets_modal/admiral3taxi_5.jpg", label: "Livrée LS Blaine County Taxi" },
      { src: "assets/assets_modal/admiral3taxi_6.jpg", label: "Livrée Vinewood Cab Taxi" },
      { src: "assets/assets_modal/admiral3taxi_7.jpg", label: "Livrée Grouped Taxi" },
      { src: "assets/assets_modal/admiral3taxi_8.jpg", label: "Livrée Rockford Hills Taxi" },
      { src: "assets/assets_modal/admiral3taxi_9.jpg", label: "Livrée LS Taxi Co-Op" },
      { src: "assets/assets_modal/admiral3taxi_10.jpg", label: "Livrée Taxi Kaufman Cabs" }
    ],
    liveries: ["Livrée Downtown Cab Co. Jaune, Livrée LS Blaine County Taxi Délavé, Livrée Downtown Cab Co. Bleu & Jaune, Livrée Taxi Demonstrator, Livrée LS Blaine County Taxi, Livrée Vinewood Cab Taxi, Livrée Grouped Taxi, Livrée Rockford Hills Taxi, Livrée LS Taxi Co-Op, Livrée Taxi Kaufman Cabs"],
    spaces: ["4"],
    speed: "~ 140 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Sedans - Diesel",
  },

  /* Weazel News */
  "Van (Weazel News)": {
    images: [
      { src: "assets/assets_modal/newsvan.jpg", label: "Livrée Weazel News" },
    ],
    liveries: ["Livrée Weazel News"],
    spaces: ["4"],
    speed: "~ 130 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Vans - Diesel",
  },
  "Alamo (Weazel News)": {
    images: [
      { src: "assets/assets_modal/fascalamo2.jpg", label: "Livrée Weazel First Alert Storm Command" },
    ],
    liveries: ["Livrée Weazel First Alert Storm Command"],
    spaces: ["4"],
    speed: "~ 160 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "SUV - Diesel",
  },

  /* Pizzeria */
  "Speedo Express (Willys Pizza)": {
    images: [
      { src: "assets/assets_modal/nspeedo_pizza.jpg", label: "Livrée Willys Pizza" },
    ],
    liveries: ["Livrée Willys Pizza"],
    spaces: ["4"],
    speed: "~ 170 km/h",
    speedInfo: "Vitesse mesurée sur ligne droite",
    type: "Fourgons - Diesel",
  },
  // autres véhicules ici
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-details");
  if (!btn) return;

  const name = btn.dataset.name;
  const details = vehicleDetails[name];

  if (!details) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${name}</h2>
      <button id="fav-btn" class="fav-btn"><i class="ri-heart-line"></i></button>
    </div>

    ${details.speed ? `<p><strong>Vitesse max :</strong> ${details.speed}
      ${details.speedInfo ? `<i class="ri-information-line info-icon" data-tooltip="${details.speedInfo}"></i>` : ""}
    </p>` : ""}

    ${details.type ? `<p><strong>Type :</strong> ${details.type}</p>` : ""}

    ${details.spaces ? `<p><strong>Nombre de places :</strong> ${details.spaces}</p>` : ""}

    ${details.liveries && details.liveries.length ? `<p><strong>Livrées disponibles :</strong> ${details.liveries.join(", ")}</p>` : ""}

    <hr class="modal-separator">

    <div class="image-gallery-scroll">
      ${details.images.map(img => `
        <div class="image-box">
          <img src="${img.src}" alt="${img.label}" data-label="${img.label}">
          <p class="image-caption">${img.label}</p>
        </div>
      `).join("")}
    </div>
  `;

  modal.classList.remove("hidden");

  const vehicleCard = btn.closest(".deals__card");
  if (vehicleCard) {
    vehicleCard.setAttribute("data-name", name);
    localStorage.setItem(`card_html_${name}`, vehicleCard.outerHTML);
  }

  const favBtn = document.getElementById("fav-btn");
  const favIcon = favBtn.querySelector("i");
  const vehicleName = name;

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favorites.includes(vehicleName)) {
    favBtn.classList.add("active");
    favIcon.classList.replace("ri-heart-line", "ri-heart-fill");
  }

  favBtn.addEventListener("click", () => {
    clickSound.play();
    favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  
    if (favorites.includes(vehicleName)) {
      favorites = favorites.filter((v) => v !== vehicleName);
      favBtn.classList.remove("active");
      favIcon.classList.replace("ri-heart-fill", "ri-heart-line");
  
      localStorage.removeItem(`card_html_${vehicleName}`);
      localStorage.setItem("favorites", JSON.stringify(favorites));
  
      if (window.location.pathname.includes("favoris")) {
        modal.classList.add("hidden");
      }
  
      if (window.location.pathname.includes("favoris")) {
        const targetCard = document.querySelector(`.deals__card[data-name="${vehicleName}"]`);
        if (targetCard) {
          targetCard.classList.add("fade-out");
          setTimeout(() => {
            targetCard.remove();
      
            const stillVisibleCards = document.querySelectorAll(".deals__card");
            if (stillVisibleCards.length === 0) {
              const favoritesContainer = document.getElementById("favorites-container");
              favoritesContainer.innerHTML = `
                <p style="text-align: center; color: gray;">Aucun véhicule favori pour l’instant.</p>
              `;
            }
          }, 400);
        }
      }
    } else {
      favorites.push(vehicleName);
      favBtn.classList.add("active");
      favIcon.classList.replace("ri-heart-line", "ri-heart-fill");
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

document.querySelector("#vehicle-modal").addEventListener("click", (e) => {
  const img = e.target.closest(".image-gallery img, .image-gallery-scroll img");
  if (img) {
    const images = [...e.currentTarget.querySelectorAll(".image-gallery img, .image-gallery-scroll img")];
    currentImageList = images.map((img) => ({
      src: img.getAttribute("src"),
      label: img.dataset.label
    }));
    currentImageIndex = currentImageList.findIndex(i => i.src === img.getAttribute("src"));

    updateModalImage();
    imageModal.classList.remove("hidden");
  }
});

const updateModalImage = () => {
  const imageLabel = document.getElementById("modal-image-label");

  loader.classList.remove("hidden");
  modalImage.style.opacity = "0";

  const newImg = new Image();
  newImg.src = currentImageList[currentImageIndex].src;

  newImg.onload = () => {
    modalImage.src = newImg.src;
    imageLabel.textContent = currentImageList[currentImageIndex].label || "";

    modalImage.style.opacity = "1";
    loader.classList.add("hidden");

    prevBtn.style.display = currentImageIndex > 0 ? "block" : "none";
    nextBtn.style.display = currentImageIndex < currentImageList.length - 1 ? "block" : "none";
  };
};

prevBtn.addEventListener("click", () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateModalImage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentImageIndex < currentImageList.length - 1) {
    currentImageIndex++;
    updateModalImage();
  }
});

imageCloseBtn.addEventListener("click", () => {
  imageModal.classList.add("hidden");
  modalImage.src = "";
  currentImageList = [];
  currentImageIndex = 0;
});

// SI JAMAIS ON VEUT SORTIR DE L'IMAGE FULLSCREEN SANS LA CROIX
// window.addEventListener("click", (e) => {
//   if (e.target === imageModal) {
//     imageModal.classList.add("hidden");
//     modalImage.src = "";
//     currentImageList = [];
//     currentImageIndex = 0;
//   }
// });

const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("keydown", (e) => {
  if (!imageModal.classList.contains("hidden")) {
    if (e.key === "ArrowRight") {
      if (currentImageIndex < currentImageList.length - 1) {
        currentImageIndex++;
        updateModalImage();
      }
    } else if (e.key === "ArrowLeft") {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
      }
    } else if (e.key === "Escape") {
      imageModal.classList.add("hidden");
      modalImage.src = "";
      currentImageList = [];
      currentImageIndex = 0;
    }
  }
});

document.querySelectorAll(".info-icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    const rect = icon.getBoundingClientRect();
    const tooltipHeight = 50; // hauteur estimée du tooltip

    if (rect.top - tooltipHeight < 0) {
      icon.classList.remove("tooltip-top");
      icon.classList.add("tooltip-bottom");
    } else {
      icon.classList.remove("tooltip-bottom");
      icon.classList.add("tooltip-top");
    }
  });
});