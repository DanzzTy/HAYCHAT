import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// REGISTER
window.daftar = async function () {

let nama = document.getElementById("nama").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if (!nama || !email || !password) {
  status.innerHTML = "Isi semua data!";
  return;
}

try {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    nama: nama,
    email: email
  });

  status.innerHTML = "Akun berhasil dibuat!";
  setTimeout(() => location.href = "index.html", 1500);

} catch (e) {
  status.innerHTML = e.message;
}

};

// LOGIN
window.login = async function () {

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try {
  await signInWithEmailAndPassword(auth, email, password);

  localStorage.setItem("email", email);

  status.innerHTML = "Login sukses!";
  setTimeout(() => location.href = "chat.html", 1000);

} catch (e) {
  status.innerHTML = e.message;
}

};
