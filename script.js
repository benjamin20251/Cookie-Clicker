function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/;";
    }

    function getCookie(name) {
      let nameEQ = name + "=";
      let ca = document.cookie.split(';');
      for(let i=0;i < ca.length;i++) {
          let c = ca[i].trim();
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
      }
      return null;
    }

    window.onload = () => {
      let contador = parseInt(getCookie("valor")) || 0;
      const boton = document.getElementById("miBoton");
      const contadorElemento = document.getElementById("contador");
      const contadorElemento1 = document.getElementById("contador1");

      contadorElemento.textContent = contador;
      contadorElemento1.textContent = contador;

      boton.addEventListener("click", () => {
        contador++;
        contadorElemento.textContent = contador;
        contadorElemento1.textContent = contador;
        setCookie("valor", contador, 30);
      });
    };