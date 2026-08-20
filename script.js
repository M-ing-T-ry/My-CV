"use strict";

//    1. HIỂN THỊ THÔNG TIN CÁ NHÂN BẰNG EMAIL

const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const submitEmail = document.querySelector("#submit-email");
const emailError = document.querySelector("#email-error");
const personalContent = document.querySelector("#personal-content");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitEmail.addEventListener("click", function () {
  const email = emailInput.value.trim();

  // Email rỗng
  if (email === "") {
    emailError.textContent = "Vui lòng nhập email.";
    return;
  }

  // Email không đúng định dạng
  if (!regex.test(email)) {
    emailError.textContent = "Email không đúng định dạng.";
    return;
  }

  // Email hợp lệ
  emailError.textContent = "";

  emailForm.classList.add("hide");
  personalContent.classList.remove("hide");
});

//    2. VIEW MORE / VIEW LESS

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  const button = card.querySelector(".toggle-btn");

  button.addEventListener("click", function () {
    card.classList.toggle("show");

    if (card.classList.contains("show")) {
      button.textContent = "View Less";
    } else {
      button.textContent = "View More";
    }
  });
});
