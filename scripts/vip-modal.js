const openBtns = document.querySelectorAll(".open-vip-modal");
const modal = document.querySelector("#vip-modal");
const closeBtn = document.querySelector("#close-vip-modal");

openBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.remove("hidden");

    modal.classList.add("flex");
  });
});

closeBtn?.addEventListener("click", () => {
  modal.classList.add("hidden");

  modal.classList.remove("flex");
});

document.querySelector("#vip-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    firstName: document.querySelector("#first-name").value,

    lastName: document.querySelector("#last-name").value,

    phone: document.querySelector("#phone").value,

    date: new Date().toLocaleString("fa-IR"),
  };

  let users = JSON.parse(localStorage.getItem("vipUsers")) || [];

  users.push(user);

  localStorage.setItem("vipUsers", JSON.stringify(users));

  alert("درخواست شما ثبت شد");

  e.target.reset();

  modal.classList.add("hidden");
});
