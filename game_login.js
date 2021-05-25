function login(){
  Username1 = document.getElementById("p1input").value;
  Username2 = document.getElementById("p2input").value;
  localStorage.setItem("Player_1_Username",Username1);
  localStorage.setItem("Player_2_Username",Username2)
  window.location="game_page.html"
}