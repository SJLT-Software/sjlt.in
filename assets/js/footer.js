$(document).ready(function() {
    let socialLinks = '';
    
    // Dictionary mapping platform names to their specific FontAwesome 6 classes
    const iconMap = {
        'facebook': 'fab fa-facebook-f',
        'linkedin': 'fab fa-linkedin-in',
        'twitter': 'fab fa-x-twitter', // Uses the new X logo
        'x': 'fab fa-x-twitter',
        'instagram': 'fab fa-instagram',
        'youtube': 'fab fa-youtube',
        'tiktok': 'fab fa-tiktok',
        'pinterest': 'fab fa-pinterest-p',
        'whatsapp': 'fab fa-whatsapp',
        'snapchat': 'fab fa-snapchat',
        'reddit': 'fab fa-reddit-alien',
        'discord': 'fab fa-discord',
        'github': 'fab fa-github'
    };

    // Automatically generate social links based on variables.js
    for (const [platform, url] of Object.entries(variables.social_media)) {
        let platformKey = platform.toLowerCase();
        
        // Use the mapped class if it exists, otherwise fallback to the default fa-name
        let iconClass = iconMap[platformKey] || ('fab fa-' + platformKey);
        
        socialLinks += `<a href="${url}" class="text-white mx-2 fs-4 hover-lift" target="_blank" rel="noopener noreferrer" aria-label="${platform}"><i class="${iconClass}"></i></a>`;
    }

    // Safely get the first location address from the variables
    let primaryAddress = (variables.locations && variables.locations.length > 0) 
        ? variables.locations[0].address 
        : "";
    
    let footerHTML = `
        <div class="bg-primary text-white pt-5 pb-3">
            <div class="container">
                <div class="row text-center text-md-start">
                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">${variables.company_name}</h5>
                        <p class="text-light">${variables.company_byline}</p>
                    </div>
                    
                    <div class="col-md-4 mb-4">
                        <h5 class="mb-3">Contact</h5>
                        <p class="text-light mb-1">${primaryAddress}</p>
                        <p class="text-light mt-2 mb-0">Email: <a href="mailto:${variables.company_email}" class="text-white text-decoration-none hover-effect">${variables.company_email}</a></p>
                    </div>
                    
                    <div class="col-md-4 mb-4 text-center">
                        <h5 class="mb-3">Follow Us</h5>
                        <div class="d-flex justify-content-center">
                            ${socialLinks}
                        </div>
                    </div>
                </div>
                
                <hr class="border-secondary mt-4 mb-3" style="opacity: 0.2;">
                
                <div class="text-center text-light small">
                    <p class="mb-0">&copy; ${variables.copyright_year_us} ${variables.copyright_holder_us}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    `;
    
    $('#app-footer').html(footerHTML);
});