const modal = document.querySelector(".modal");
const menuList = document.querySelectorAll(".nav-item");

menuList.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    modal.style.display = "block";
    modal.innerHTML = `You triggered ${item.innerText}`
    setTimeout(() => {
      modal.style.display = "none";
    }, 1000);
  });
});
