
const headerContent = document.querySelector("#header-content");
const footerContent = document.querySelector("#footer-content");


document.getElementById('header-content').innerHTML = `
    <header class="header" >
    <button class="abrir-menu-hamburguesa" id="abrir-menu-hamburguesa"><i class="bi bi-list"></i></button>
        <nav class="nav-bar" id="nav-bar">
            <ul>
                <button class="cerrar-menu-hamburguesa" id="cerrar-menu-hamburguesa"><i class="bi bi-x"></i></button>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Menú</a></li>
                <li><a href="../Js/pages/contacto.html">Contacto</a></li>
                <li><a href="#">Quiénes somos</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
        </nav>
    </header>
`;

document.getElementById('footer-content').innerHTML = `
    <footer  class="footer">
        <p>Creado por Anita - 2023</p>
    </footer>
`;

