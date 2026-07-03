import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

let status;

// REGISTER (HARUS NAMANYA register)
window.register = async function () {

let nama = document.getElementById("nama")?.value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

status = document.getElementById("status");

if (!email || !password) {
  status.innerHTML = "Isi semua data!";
  return;
}

try {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    nama: nama || email,
    email: email
  });

  status.innerHTML = "Daftar berhasil!";

  setTimeout(() => {
    location.href = "index.html";
  }, 1500);

} catch (e) {
  status.innerHTML = e.message;
}

};

// LOGIN
window.login = async function () {

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

status = document.getElementById("status");

if (!email || !password) {
  status.innerHTML = "Isi semua data!";
  return;
}

try {
  await signInWithEmailAndPassword(auth, email, password);

  status.innerHTML = "Login berhasil!";

  setTimeout(() => {
    location.href = "users.html";
  }, 1000);

} catch (e) {
  status.innerHTML = e.message;
}

};
