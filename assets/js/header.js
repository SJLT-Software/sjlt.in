$(document).ready(function() {
    // Generate Navigation Links
    let navLinks = variables.menu.map(item => `<li><a href="${item.link}">${item.label}</a></li>`).join('');
    
    // Construct Header HTML
    let headerHTML = `
        <div class="header-container">
            <div class="brand">
                <a href="#home" class="logo-link">
                    <h2>${variables.company_name}</h2>
                </a>
            </div>
            <nav class="main-nav">
                <ul>${navLinks}</ul>
            </nav>
        </div>
    `;
    
    // Inject into DOM
    $('#app-header').html(headerHTML);
});