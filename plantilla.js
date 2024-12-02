const header = document.querySelector('header');
const footer = document.querySelector('footer');
const variable = document.getElementById('fijas');

header.innerHTML=`<a href="index.html" class="logo-container">
        <div class="logo-container">
            <img src="imagenes/logo.jpg " alt="Logo de la empresa" class="logo">
        </div>
    </a>    
        <div class="centrado">
            <h1>Bootleg Embroidery</h1>
        </div>`;
footer.innerHTML = `<div class="footer-container">
            <div class="Contáctanos">
                <h3>Contáctanos</h3>
                <p>¿Tienes alguna pregunta o necesitas más información? ¡Estamos aqui para ayudarte!</p>
                <ul>
                    <img src="Imagenes/Telefono.png" width="20" height="20">Teléfono: +51 999 999 999</li><p></p>
                    <img src="Imagenes/Correo.png" width="20" height="20">Correo: Zzzzzz@gmail.com</li><p></p>
                    <img src="Imagenes/Ubicacion.png" width="20" height="20">Dirección: EE.UU</li>
                </ul>
            </div>
        </div>`;
variable.innerHTML = `<a href="https://api.whatsapp.com/send?phone=51902846072&text=Hola%2C%20deseo%20mas%20informacion." target="_blank">
            <img src="imagenes/logo wsp.png" alt="Imagen 1" class="imagen-fija">
        </a>
        <a href="https://www.instagram.com/bootleg_embroidery_/" target="_blank">
            <img src="imagenes/logo instagram.png" alt="Imagen 2" class="imagen-fija">
        </a>
        <a href="https://www.facebook.com/profile.php?id=61561049604002" target="_blank">
            <img src="imagenes/logo facebook.png" alt="Imagen 2" class="imagen-fija">
        </a>`;