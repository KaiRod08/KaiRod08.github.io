
document.onkeydown = (e) => {
  if(e.ctrlKey && e.shiftKey && e.key == 'I') {
    e.preventDefault();
  }
  if(e.ctrlKey && e.shiftKey && e.key == 'C') {
    e.preventDefault();
  }
  if(e.ctrlKey && e.shiftKey && e.key == 'J') {
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == 'U') {
    e.preventDefault();
  }
};


var LocTheme = localStorage.getItem("theme");


function light() {
  let theme = document.getElementById("theme");
  theme.setAttribute('href', 'light.css');
  localStorage.setItem("theme", "light");
}

function maintheme() {
  let theme = document.getElementById("theme");
  theme.setAttribute('href', 'maintheme.css');
  localStorage.setItem("theme", "maintheme");
}

function supernova() {
  let theme = document.getElementById("theme");
  theme.setAttribute('href', 'super.css');
  localStorage.setItem("theme", "supernova");
}

function xp() {
  let theme = document.getElementById("theme");
  theme.setAttribute('href', '2001.css');
  localStorage.setItem("theme", "xp");
}

function plain() {
  let theme = document.getElementById("theme");
  theme.setAttribute('href', 'plain.css');
  localStorage.setItem("theme", "plain");
}





if (LocTheme === "light") {
  light();
} else if (LocTheme === "maintheme") {
  maintheme();
} else if (LocTheme === "supernova") {
  supernova();
} else if (LocTheme === "xp") {
  xp();
} else if (LocTheme === "plain") {
  plain();
} else {
  maintheme();
}















