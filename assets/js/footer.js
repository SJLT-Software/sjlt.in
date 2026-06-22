$(document).ready(function() {
    // Generate Social Links
    let socialLinks = '';
    for (const [platform, url] of Object.entries(variables.social_media)) {
        socialLinks += `<a href="${url}" target="_blank" rel="noopener noreferrer">${platform}</a> `;
    }

    // Construct Footer HTML
    let footerHTML = `
        <div class="footer-container">
            <div class="footer-details">
                <h3>${variables.company_name}</h3>
                <p>${variables.company_description}</p>
            </div>
            <div class="footer-contact">
                <h4>Contact</h4>
                <p>${variables.company_address_1}, ${variables.company_address_2}</p>
                <p>Email: <a href="mailto:${variables.company_email}">${variables.company_email}</a></p>
                <p>Phone: ${variables.company_phone}</p>
            </div>
            <div class="footer-social">
                <h4>Follow Us</h4>
                <div class="social-links">${socialLinks}</div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${variables.copyright_year} ${variables.copyright_holder}. All Rights Reserved.</p>
        </div>
    `;
    
    // Inject into DOM
    $('#app-footer').html(footerHTML);
});