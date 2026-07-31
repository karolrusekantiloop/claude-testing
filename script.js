const openButton = document.getElementById("openModalBtn");
const closeButton = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});