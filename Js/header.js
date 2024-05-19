
const headerContent = document.querySelector("#header-content");
const footerContent = document.querySelector("#footer-content");


document.getElementById('header-content').innerHTML = `
    <div class="header">
        <button class="abrir-menu-hamburguesa" id="abrir-menu-hamburguesa"><i class="bi bi-list"></i></button>
        <nav class="nav-bar" id="nav-bar">
            <ul>
                <button class="cerrar-menu-hamburguesa" id="cerrar-menu-hamburguesa"><i class="bi bi-x"></i></button>
                <li>
                    <a href="../index.html">
                        <i class="bi bi-house"></i>
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/menu.html">
                        <i class="bi bi-journal-text"></i>
                        <span>Menú</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/contacto.html">
                        <i class="bi bi-envelope-at"></i>
                        <span>Contacto</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/nosotros.html">
                        <i class="bi bi-people"></i>
                        <span>Quienes somos</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-info-circle"></i>
                        <span>Ayuda</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
`;

document.getElementById('footer-content').innerHTML = `
    <div class="footer">
        <p>Creado por Anita- 2023</p>
    </div>
`;

