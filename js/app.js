import { y, d as delegateEvents } from "./vendor.js";
const Footer = "";
const Button = "";
const Nav = "";
function script$6() {
  const el = Array.from(document.querySelectorAll(".nav__sub"));
  if (!el)
    return;
  el.forEach((node) => {
    const imgEl = node.querySelector("img");
    const linkEls = Array.from(node.querySelectorAll("a"));
    linkEls.forEach((linkEl) => {
      linkEl.addEventListener("mouseenter", (e) => {
        const src = linkEl.dataset.imgsrc;
        imgEl.src = src;
      });
    });
  });
}
{
  script$6();
}
const Hamburger = "";
function script$5() {
  const el = document.querySelector(".hamburger");
  if (!el)
    return;
  el.addEventListener("click", (e) => {
    el.classList.toggle("hamburger_active");
  });
}
{
  script$5();
}
const Search = "";
function script$4() {
  const el = document.querySelector(".search");
  if (!el)
    return;
  const closeEl = el.querySelector(".search__close");
  function open() {
    el.classList.add("search_open");
  }
  function close() {
    el.classList.remove("search_open");
  }
  closeEl.addEventListener("click", close);
  window.addEventListener("open-search", open);
  window.addEventListener("click", (e) => {
    if (!el.contains(e.target))
      close();
  });
}
{
  script$4();
}
const Header = "";
function script$3() {
  const el = document.querySelector(".header");
  if (!el)
    return;
  const searchButtonEl = el.querySelector(".header__search-button");
  searchButtonEl.addEventListener("click", (e) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent("open-search"));
  });
}
{
  script$3();
}
const Banners = "";
const Brands = "";
const Categories = "";
const Features = "";
const keenSlider_min = "";
const Intro = "";
function script$2() {
  const el = document.querySelector(".intro");
  if (!el)
    return;
  const sliderEl = el.querySelector(".intro__slider");
  const prevEl = el.querySelector(".intro__nav_prev");
  const nextEl = el.querySelector(".intro__nav_next");
  const slider = new y(sliderEl, {
    loop: true,
    defaultAnimation: {
      duration: 2e3
    },
    detailsChanged: (s) => {
      s.slides.forEach((element, idx) => {
        element.style.opacity = s.track.details.slides[idx].portion;
      });
    },
    renderMode: "custom"
  });
  prevEl.addEventListener("click", () => slider.prev());
  nextEl.addEventListener("click", () => slider.next());
}
{
  script$2();
}
const Populars = "";
const Product = "";
const ProductSlider = "";
function script$1() {
  const el = document.querySelectorAll(".product-slider");
  if (!el)
    return;
  el.forEach((node) => {
    const prevEl = node.querySelector(".product-slider__nav_prev");
    const nextEl = node.querySelector(".product-slider__nav_next");
    const sliderEl = node.querySelector(".product-slider__slider");
    const slider = new y(sliderEl, {
      loop: true,
      slides: {
        perView: 1
      },
      breakpoints: {
        "(min-width: 576px)": {
          slides: {
            perView: 2
          }
        },
        "(min-width: 768px)": {
          slides: {
            perView: 3
          }
        },
        "(min-width: 992px)": {
          slides: {
            perView: 4
          }
        }
      }
    });
    prevEl.addEventListener("click", (e) => slider.prev());
    nextEl.addEventListener("click", (e) => slider.next());
  });
}
{
  script$1();
}
function script() {
  const el = document.querySelector(".populars");
  if (!el)
    return;
  const tabEls = Array.from(el.querySelectorAll(".populars__tab"));
  const panelEls = el.querySelectorAll(".populars__tabpanel");
  tabEls.forEach((tabEl) => {
    tabEl.addEventListener("click", (e) => {
      const index = tabEls.indexOf(tabEl);
      tabEls.forEach((n) => n.classList.remove("populars__tab_selected"));
      panelEls.forEach((n) => n.classList.remove("populars__tabpanel_selected"));
      tabEl.classList.add("populars__tab_selected");
      panelEls[index].classList.add("populars__tabpanel_selected");
      window.dispatchEvent(new CustomEvent("resize"));
    });
  });
}
{
  script();
}
delegateEvents(["click"]);
delegateEvents(["click"]);
delegateEvents(["click", "keydown"]);
const main = "";
