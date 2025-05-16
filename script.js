// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !phone || !message) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^\d{10}$/;

  if (!email.match(emailPattern)) {
    msg.textContent = "Invalid email format.";
    msg.style.color = "red";
    return;
  }

  if (!phone.match(phonePattern)) {
    msg.textContent = "Phone number must be 10 digits.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Form submitted successfully!";
  msg.style.color = "green";
});

// Image Gallery Function
function addImage() {
  const url = document.getElementById("imageUrl").value.trim();
  if (!url) return;

  const gallery = document.getElementById("gallery");
  const card = document.createElement("div");
  card.className = "img-card";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "User Image";

  const btn = document.createElement("button");
  btn.textContent = "×";
  btn.className = "delete-btn";
  btn.onclick = () => card.remove();

  card.appendChild(img);
  card.appendChild(btn);
  gallery.appendChild(card);

  document.getElementById("imageUrl").value = "";
}
