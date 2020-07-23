
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openNav() {
  var x = window.matchMedia("(max-width: 600px)")
  if (x.matches) { // If media query matches
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
}


//myFunction(x) // Call listener function at run time
// openNav(x) 
// x.addListener(openNav) 