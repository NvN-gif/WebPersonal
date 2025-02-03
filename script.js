let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    
    if (menuVisible) {
        nav.classList.remove("responsive"); // Elimina la clase "responsive"
        menuVisible = false;
    } else {
        nav.classList.add("responsive"); // Añade la clase "responsive"
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive"); // Elimina la clase "responsive"
    menuVisible = false;
}
document.querySelector('.nav-responsive').addEventListener('click, mostrarOcultarMenu');
    document.querySelector('.nav-responsive').addEventListener('touchstart', mostrarOcultarMenu);

   
   

emailjs.init({
    publicKey: 'OptkNRo4EPsfrpJAJ',
  });
  emailjs.sendForm('service_smynix9', 'template_1lysp8i', this);