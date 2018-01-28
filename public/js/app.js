function landingPage() {
  document.querySelector("#landing-page").style.display = "";
  document.querySelector("#about-page").style.display = "none";
  document.querySelector("#map-page").style.display = "none";

  document.querySelector("#home-li").classList.add('active');
  document.querySelector("#about-li").classList.remove('active');
  document.querySelector("#map-li").classList.remove('active');
}

function aboutPage() {
  document.querySelector("#landing-page").style.display = "none";
  document.querySelector("#about-page").style.display = "";
  document.querySelector("#map-page").style.display = "none";

  document.querySelector("#home-li").classList.remove('active');
  document.querySelector("#about-li").classList.add('active');
  document.querySelector("#map-li").classList.remove('active');
}

function mapPage() {
  document.forms[0].submit()
  /*
  document.querySelector("#landing-page").style.display = "none";
  document.querySelector("#about-page").style.display = "none";
  document.querySelector("#map-page").style.display = "";

  document.querySelector("#home-li").classList.remove('active');
  document.querySelector("#about-li").classList.remove('active');
  document.querySelector("#map-li").classList.add('active');
  */
}
