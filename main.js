// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener

document.getElementById("fish-btn").addEventListener("click", fish);
document.getElementById("5").addEventListener("click", fish1);
document.getElementById("200").addEventListener("click", fish2);
document.getElementById("num").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let input = document.getElementById("num").value;
    for (i = 0; i != input; i++) {
      let char = document.getElementById("character-select").value;
      let rand = Math.random();
      if (char == "steve") {
        if (rand <= 0.7) {
          Cod++;
          document.getElementById("num-cod").innerHTML = Cod;
        } else if (rand <= 0.9) {
          Salmon++;
          document.getElementById("num-salmon").innerHTML = Salmon;
        } else if (rand <= 0.95) {
          tropical++;
          document.getElementById("num-tropical").innerHTML = tropical;
        } else {
          puffer++;
          document.getElementById("num-puffer").innerHTML = puffer;
        }
      } else if (char == "alex") {
        if (rand <= 0.1) {
          Cod++;
          document.getElementById("num-cod").innerHTML = Cod;
        } else if (rand <= 0.2) {
          Salmon++;
          document.getElementById("num-salmon").innerHTML = Salmon;
        } else if (rand <= 0.5) {
          tropical++;
          document.getElementById("num-tropical").innerHTML = tropical;
        } else {
          puffer++;
          document.getElementById("num-puffer").innerHTML = puffer;
        }
      } else {
        if (rand <= 0.25) {
          Cod++;
          document.getElementById("num-cod").innerHTML = Cod;
        } else if (rand <= 0.5) {
          Salmon++;
          document.getElementById("num-salmon").innerHTML = Salmon;
        } else if (rand <= 0.75) {
          tropical++;
          document.getElementById("num-tropical").innerHTML = tropical;
        } else {
          puffer++;
          document.getElementById("num-puffer").innerHTML = puffer;
        }
      }
    }
  }
});
let Cod = 0;
let Salmon = 0;
let tropical = 0;
let puffer = 0;

function fish2() {
  let useless = 0;
  for (i = Cod + 200; i != Cod; useless++) {
    let char = document.getElementById("character-select").value;
    let rand = Math.random();
    if (char == "steve") {
      if (rand <= 0.7) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.9) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.95) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    } else if (char == "alex") {
      if (rand <= 0.1) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.2) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.5) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    } else {
      if (rand <= 0.25) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.5) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.75) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    }
  }
  console.log(Cod);
}

function fish1() {
  for (i = 1; i <= 5; i++) {
    let char = document.getElementById("character-select").value;
    let rand = Math.random();
    if (char == "steve") {
      if (rand <= 0.7) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.9) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.95) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    } else if (char == "alex") {
      if (rand <= 0.1) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.2) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.5) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    } else {
      if (rand <= 0.25) {
        Cod++;
        document.getElementById("num-cod").innerHTML = Cod;
      } else if (rand <= 0.5) {
        Salmon++;
        document.getElementById("num-salmon").innerHTML = Salmon;
      } else if (rand <= 0.75) {
        tropical++;
        document.getElementById("num-tropical").innerHTML = tropical;
      } else {
        puffer++;
        document.getElementById("num-puffer").innerHTML = puffer;
      }
    }
  }
}

function fish() {
  let char = document.getElementById("character-select").value;
  let rand = Math.random();
  if (char == "steve") {
    if (rand <= 0.7) {
      Cod++;
      document.getElementById("num-cod").innerHTML = Cod;
    } else if (rand <= 0.9) {
      Salmon++;
      document.getElementById("num-salmon").innerHTML = Salmon;
    } else if (rand <= 0.95) {
      tropical++;
      document.getElementById("num-tropical").innerHTML = tropical;
    } else {
      puffer++;
      document.getElementById("num-puffer").innerHTML = puffer;
    }
  } else if (char == "alex") {
    if (rand <= 0.1) {
      Cod++;
      document.getElementById("num-cod").innerHTML = Cod;
    } else if (rand <= 0.2) {
      Salmon++;
      document.getElementById("num-salmon").innerHTML = Salmon;
    } else if (rand <= 0.5) {
      tropical++;
      document.getElementById("num-tropical").innerHTML = tropical;
    } else {
      puffer++;
      document.getElementById("num-puffer").innerHTML = puffer;
    }
  } else {
    if (rand <= 0.25) {
      Cod++;
      document.getElementById("num-cod").innerHTML = Cod;
    } else if (rand <= 0.5) {
      Salmon++;
      document.getElementById("num-salmon").innerHTML = Salmon;
    } else if (rand <= 0.75) {
      tropical++;
      document.getElementById("num-tropical").innerHTML = tropical;
    } else {
      puffer++;
      document.getElementById("num-puffer").innerHTML = puffer;
    }
  }
}
