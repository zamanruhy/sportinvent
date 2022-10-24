import { y } from "./vendor.js";
const base = "";
const common = "";
const Footer = "";
const Button = "";
const Nav = "";
function script$9() {
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
  script$9();
}
const Hamburger = "";
function script$8() {
  const el = document.querySelector(".hamburger");
  if (!el)
    return;
  let active = false;
  el.addEventListener("click", (e) => {
    active = !active;
    el.classList.toggle("hamburger_active", active);
    window.dispatchEvent(new CustomEvent("hamburger:active", {
      detail: active
    }));
  });
}
{
  script$8();
}
const Search = "";
function script$7() {
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
  script$7();
}
const Drawer = "";
function script$6() {
  const el = document.querySelector(".drawer");
  if (!el)
    return;
  window.addEventListener("hamburger:active", ({
    detail: active
  }) => {
    el.classList.toggle("drawer_open", active);
  });
}
{
  script$6();
}
const Callback = "";
const Checkbox = "";
const Input = "";
const Header = "";
function script$5() {
  const el = document.querySelector(".header");
  if (!el)
    return;
  const searchButtonEl = el.querySelector(".header__search-button");
  searchButtonEl.addEventListener("click", (e) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent("open-search"));
  });
  const cbButtonEls = Array.from(el.querySelectorAll(".header__callback, .header__callback-mobile"));
  const dialogEl = el.querySelector(".header__dialog");
  cbButtonEls.forEach((btnEl) => {
    btnEl.addEventListener("click", (e) => {
      e.preventDefault();
      dialogEl.showModal();
    });
  });
}
{
  script$5();
}
const Banners = "";
const Brands = "";
const Categories = "";
const Features = "";
const keenSlider_min = "";
const Intro = "";
function script$4() {
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
  script$4();
}
const Populars = "";
const Product = "";
const ProductSlider = "";
function script$3() {
  const els = Array.from(document.querySelectorAll(".product-slider"));
  if (!els.length)
    return;
  els.forEach((el) => {
    const prevEl = el.querySelector(".product-slider__nav_prev");
    const nextEl = el.querySelector(".product-slider__nav_next");
    const sliderEl = el.querySelector(".product-slider__slider");
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
  script$3();
}
function script$2() {
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
  script$2();
}
const Breadcrumb = "";
const Amount = "";
function script$1() {
  const els = Array.from(document.querySelectorAll(".amount"));
  if (!els.length)
    return;
  els.forEach((el) => {
    const decrEl = el.querySelector(".amount__button:first-of-type");
    const incrEl = el.querySelector(".amount__button:last-of-type");
    const inputEl = el.querySelector(".amount__input");
    function set(val) {
      if (val < 1)
        val = 1;
      decrEl.disabled = val < 2;
      inputEl.value = val;
    }
    incrEl.addEventListener("click", (e) => set(+inputEl.value + 1));
    decrEl.addEventListener("click", (e) => set(+inputEl.value - 1));
  });
}
{
  script$1();
}
const Card = "";
function script() {
  const el = document.querySelector(".card");
  if (!el)
    return;
  const tabEls = Array.from(el.querySelectorAll(".card__tab"));
  const panelEls = el.querySelectorAll(".card__tabpanel");
  tabEls.forEach((tabEl) => {
    tabEl.addEventListener("click", (e) => {
      const index = tabEls.indexOf(tabEl);
      tabEls.forEach((n) => n.classList.remove("card__tab_selected"));
      panelEls.forEach((n) => n.classList.remove("card__tabpanel_selected"));
      tabEl.classList.add("card__tab_selected");
      panelEls[index].classList.add("card__tabpanel_selected");
      window.dispatchEvent(new CustomEvent("resize"));
    });
  });
  const pictureEl = el.querySelector(".card__picture");
  const imgEl = el.querySelector(".card__img");
  pictureEl.style.backgroundImage = `url(${imgEl.src})`;
  pictureEl.addEventListener("mousemove", (e) => {
    const zoomer = e.currentTarget;
    let offsetX, offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    const x = offsetX / zoomer.offsetWidth * 100;
    const y2 = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + "% " + y2 + "%";
  });
}
{
  script();
}
const main = "";
