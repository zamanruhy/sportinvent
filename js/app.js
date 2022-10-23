import { y, d as delegateEvents } from "./vendor.js";
const Footer = "";
const Button = "";
const Nav = "";
function script$4() {
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
  script$4();
}
const Hamburger = "";
function script$3() {
  const el = document.querySelector(".hamburger");
  if (!el)
    return;
  el.addEventListener("click", (e) => {
    el.classList.toggle("hamburger_active");
  });
}
{
  script$3();
}
const Search = "";
function script$2() {
  const el = document.querySelector(".search");
  if (!el)
    return;
  const closeEl = el.querySelector(".search__close");
  function close() {
    el.classList.remove("search_open");
  }
  closeEl.addEventListener("click", close);
  document.addEventListener("click", (e) => {
    if (!el.contains(e.target))
      close();
  });
}
{
  script$2();
}
const Header = "";
function script$1() {
  const el = document.querySelector(".header");
  if (!el)
    return;
  const searchButtonEl = el.querySelector(".header__search-button");
  const searchEl = document.querySelector(".search");
  searchButtonEl.addEventListener("click", (e) => {
    e.stopPropagation();
    searchEl.classList.add("search_open");
  });
}
{
  script$1();
}
const Banners = "";
const Brands = "";
const Categories = "";
const Features = "";
const keenSlider_min = "";
const Intro = "";
function script() {
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
  script();
}
delegateEvents(["click"]);
delegateEvents(["click"]);
delegateEvents(["click", "keydown"]);
const main = "";
