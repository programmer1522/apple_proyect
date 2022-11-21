const search_lupe = document.querySelector('.fa-search');
const container_inp = document.querySelector('.container_search_inp');
const close_btn = document.querySelector('.fa-times');

search_lupe.addEventListener("click", ()=>{
    container_inp.classList.add("show_inp");
})
close_btn.addEventListener("click", ()=> {
    container_inp.classList.remove("show_inp");
})