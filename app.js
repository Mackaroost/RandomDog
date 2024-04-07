function iniciar() {
  const mascotaActual = document.getElementById("mascotaActual");
  const API = "https://dog.ceo/api/breeds/image/random";
  const siguiente = document.getElementById("siguiente");
  const like = document.querySelector(".containerLike");
  const dontLike = document.querySelector(".containerDislike");
  const containerRender = document.querySelector(".container-likes");

  const nuevoPerro = async () => {
    mascotaActual.classList.toggle("escondido", true);
    try {
      const data = await fetch(API);
      const res = await data.json();
      console.log(res);
      mascotaActual.innerHTML = `<img src="${res.message}" class="imgMascota" style="width: 50rem; height: 30rem;" alt="Random Dog Image">`;
      mascotaActual.classList.toggle("escondido", false);
    } catch (error) {
      console.log(error);
    }
  };

  nuevoPerro();
  siguiente.addEventListener("click", nuevoPerro);

  function ranking() {
    document.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      containerRender.classList.remove("d-none");
      const imgSrc = mascotaActual.querySelector("img").src;

      if (e.target.id === "meGusta") {
        const imagen = document.createElement("IMG");
        imagen.src = imgSrc;
        like.appendChild(imagen);
      }

      if (e.target.id === "noGusta") {
        const imagen = document.createElement("IMG");
        imagen.src = imgSrc;

        dontLike.appendChild(imagen);
      }
    });
  }

  ranking();
}

document.addEventListener("DOMContentLoaded", iniciar);
