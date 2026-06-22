$(document).ready(function() {
    // Populate dynamic text elements based on classes mapped to variables
    $('.var-company-name').text(variables.company_name);
    $('.var-company-tagline').text(variables.company_tagline);
    $('.var-company-since').text(variables.company_since);
    $('.var-company-description').text(variables.company_description);
    
    $('.var-showroom-address').text(variables.showroom_address);
    $('.var-showroom-phone').text(variables.showroom_phone);
    $('.var-showroom-hours').text(variables.showroom_hours);
    
    $('.var-company-email').html(`<a href="mailto:${variables.company_email}">${variables.company_email}</a>`);
    
    // Smooth scrolling for navigation
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70 // offset for fixed header
            }, 800);
        }
    });
});