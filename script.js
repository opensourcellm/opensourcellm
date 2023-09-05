document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("subscription-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert("Subscribed with email: " + email);
  });
});
