$(document).ready(function() {
    let socialLinks = '';
    for (const [platform, url] of Object.entries(variables.social_media)) {
        socialLinks += `<a href="${url}" class="text-white mx-2 hover-lift" target="_blank" rel="noopener noreferrer">${platform}</a>`;
    }

    let footerHTML = `
        <div class="bg-primary text-white pt-5 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">${variables.company_name}</h5>
                        <p class="text-light">${variables.company_description}</p>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">Contact</h5>
                        <p class="text-light mb-1">${variables.company_address_1}</p>
                        <p class="text-light mb-1">${variables.company_address_2}</p>
                        <p class="text-light mt-2 mb-0">Email: <a href="mailto:${variables.company_email}" class="text-accent">${variables.company_email}</a></p>
                    </div>
                    <div class="col-md-4 mb-4 text-md-right">
                        <h5 class="mb-3">Follow Us</h5>
                        <div class="d-flex justify-content-md-end">
                            ${socialLinks}
                        </div>
                    </div>
                </div>
                <hr class="border-secondary mt-4 mb-3">
                <div class="text-center text-light small">
                    <p class="mb-0">&copy; ${variables.copyright_year} ${variables.copyright_holder}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    `;
    
    $('#app-footer').html(footerHTML);
});