function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function yearly() {
  let month = document.getElementById('login');
  let year = document.getElementById('free-trial');
  let money = document.getElementById('money');
  let mont = document.getElementById('month');

  month.classList.remove('active');
  year.classList.add('active');
  month.classList.add('free-trial');
  year.classList.remove('free-trial');
  month.classList.remove('login');
  year.style.marginLeft = "-20rem";
  money.innerHTML = "200";
  mont.innerHTML = "/Yearly";
}

function monthly() {
  let month = document.getElementById('login');
  let year = document.getElementById('free-trial');
  let money = document.getElementById('money');
  let mont = document.getElementById('month');

  year.classList.remove('active');
  month.classList.add('active');
  year.classList.add('free-trial');
  month.classList.remove('free-trial');
  year.style.marginLeft = "7rem";
  money.innerHTML = "0";
  mont.innerHTML = "/Monthly";
}