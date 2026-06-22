$(document).ready(function() {
    let navLinks = variables.menu.map(item => `
        <li class="nav-item">
            <a class="nav-link" href="${item.link}">${item.label}</a>
        </li>
    `).join('');
    
    let headerHTML = `
        <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm transition-effect">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#home">
                    <img src="${variables.company_logo}" alt="${variables.company_name} Logo" height="40" class="mr-2 d-inline-block align-top">
                    <span class="font-weight-bold text-primary brand-text">${variables.company_name}</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav nav-pills">
                        ${navLinks}
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    $('#app-header').html(headerHTML);
});