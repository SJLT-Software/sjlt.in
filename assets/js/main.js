$(document).ready(function() {
    
    // Initialize Animate On Scroll (AOS)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Global Image Error Fallback
    $('img').on('error', function() {
        $(this).off('error').attr('src', 'assets/images/logo.jpg');
    });

    // Populate dynamic text variables
    $('.var-company-name').text(variables.company_name);
    $('.var-company-since').text(variables.company_since);
    $('.var-company-description').text(variables.company_description);
    $('.var-showroom-address').text(variables.showroom_address);
    $('.var-showroom-phone').text(variables.showroom_phone);
    $('.var-showroom-hours').text(variables.showroom_hours);
    $('.var-company-email').html(`<a href="mailto:${variables.company_email}">${variables.company_email}</a>`);
    
    const locationsContainer = $('#dynamic-locations');
    if (locationsContainer.length && variables.locations && variables.locations.length > 0) {
        
        let locationsHtml = '';
        variables.locations.forEach((loc, index) => {
            let isActive = 'border-primary bg-light shadow';
            
            
            locationsHtml += `
                <div class="contact-info bg-white p-4 rounded mb-4 hover-lift location-card border cursor-pointer ${isActive}" 
                     data-map-url="${loc.map_embed_url ? '#' : '#'}" style="cursor: pointer; transition: all 0.3s;">
                    <h5 class="text-primary mb-3 font-weight-bold">${loc.type}</h5>
                    <p class="mb-2"><strong>Address:</strong> ${loc.address}</p>
                    ${loc.phone ? `<p class="mb-2"><strong>Phone:</strong> ${loc.phone}</p>` : ''}
                    ${loc.hours ? `<p class="mb-0"><strong>Hours:</strong> ${loc.hours}</p>` : ''}
                    ${loc.google_maps_link && loc.google_maps_link != '#' ? `<p class="mt-2"><a href="${loc.google_maps_link}" target="_blank" class="text-decoration-none text-primary hover-effect">View on Google Maps</a></p>` : ''}
                </div>
            `;
        });
        locationsContainer.html(locationsHtml);

        
    }

    // Explicitly Handle Header Active Bubble State on Scroll
    // (This fixes the issue where Bootstrap scrollspy fails on dynamically loaded headers)
    $(window).on('scroll', function() {
        let scrollPos = $(window).scrollTop() + 100; // Offset for fixed header
        
        $('section').each(function() {
            let top = $(this).offset().top;
            let bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos <= bottom) {
                let currentId = $(this).attr('id');
                // Remove active class from all nav links
                $('.navbar-nav .nav-link').removeClass('active');
                // Add active class to the current section's link
                $(`.navbar-nav .nav-link[href="#${currentId}"]`).addClass('active');
            }
        });
    });
    

    // Append Back to Top Button
    $('body').append('<a href="#" id="back-to-top" class="btn btn-primary position-fixed shadow" style="bottom: 25px; right: 25px; display: none; z-index: 9999; border-radius: 50%; width: 45px; height: 45px; text-align: center; line-height: 30px; font-size: 20px;">&#8679;</a>');

    // Smooth scrolling for anchor links & Back to Top Toggle
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

        if ($(this).scrollTop() > 50) {
            $('#main-navbar').addClass('scrolled py-1').removeClass('py-3');
        } else {
            $('#main-navbar').addClass('py-3').removeClass('scrolled py-1');
        }
    });

    $('a.nav-link, #back-to-top').on('click', function(event) {
        if (this.hash !== "" || $(this).attr('id') === 'back-to-top') {
            event.preventDefault();
            var hash = this.hash || 'html';
            $('html, body').animate({
                scrollTop: hash === 'html' ? 0 : $(hash).offset().top - 80 
            }, 600);
            
            // Close mobile menu on click
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Impact Counters Animation Trigger
    let countersAnimated = false;
    $(window).scroll(function() {
        let funFacts = $('#funfacts');
        if (funFacts.length) {
            let offsetTop = funFacts.offset().top - window.innerHeight;
            if (!countersAnimated && $(window).scrollTop() > offsetTop) {
                $('.count-up').each(function() {
                    let $this = $(this);
                    let countTo = variables[$this.data('count-to')];
                    
                    $({ countNum: 0 }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
                countersAnimated = true;
            }
        }
    });

    // AJAX Contact Form Handler
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        let $form = $(this);
        let $btn = $('#submit_btn');
        let $resultBox = $('#form-result');
        
        // Basic validation flag
        let proceed = true;
        $form.find('input[required], textarea[required]').each(function() {
            if(!$(this).val()) proceed = false;
        });

        if(proceed) {
            $btn.prop('disabled', true).text('Sending...');
            
            let post_data = {
                'userName': $('input[name=first_name]').val() + ' ' + $('input[name=last_name]').val(),
                'userEmail': $('input[name=email]').val(),
                'userPhone': $('input[name=phone]').val(),
                'userMessage': $('textarea[name=message]').val()
            };

            // AJAX call to PHP backend (simulate success for static HTML framework context)
            $.ajax({
                type: 'POST',
                url: 'contact.php', 
                data: post_data,
                dataType: 'json',
                success: function(response) {
                    let output = `<div class="alert ${response.type === 'error' ? 'alert-danger' : 'alert-success'} p-2">${response.text}</div>`;
                    $resultBox.hide().html(output).slideDown();
                    if(response.type !== 'error') $form[0].reset();
                },
                error: function() {
                    // Fallback visual for static dev mode
                    let output = `<div class="alert alert-success p-2">Message received! (Dev mode fallback)</div>`;
                    $resultBox.hide().html(output).slideDown();
                    $form[0].reset();
                },
                complete: function() {
                    $btn.prop('disabled', false).text('Submit Message');
                }
            });
        } else {
            $resultBox.hide().html('<div class="alert alert-danger p-2">Please provide the missing fields.</div>').slideDown();
        }
    });
});