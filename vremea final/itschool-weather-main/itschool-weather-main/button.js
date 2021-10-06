const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

function handleScroll() {
//    daca scadem inaltimea userului din cea totala, ne iese numarul total de pixeli ramasi
//    variabila scrollTotal va reprezenta numarul maxim de pixeli pe verticala. Daca impartim acest numar la numarul de pixeli ramasi va rezulta un nr intre 0 si 1 
//    pentru 50% din vh folosim 0.5 
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.5) {
    // arata butonul
    scrollToTopBtn.classList.add("showBtn");
  } else {
    //  ascunde butonul
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);