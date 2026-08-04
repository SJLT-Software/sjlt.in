document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("certifications-container");
    const data = variables.sections.certifications;

    if (!container || !data || !data.certifications.length) return;

    // Generate the individual logo elements
    const logosHtml = data.certifications.map(cert => `
        <div class="marquee-item px-4 mx-lg-4">
            <img src="${cert.image}" alt="${cert.name}" title="${cert.name}" class="cert-logo img-fluid hover-color">
        </div>
    `).join('');

    // Duplicate the logos to create a seamless infinite loop
    const trackHtml = `
        <div class="marquee-track d-flex align-items-center">
            ${logosHtml}
            ${logosHtml}
            ${logosHtml}
        </div>
    `;

    container.innerHTML = `
        <section id="certifications" class="py-5 overflow-hidden bg-white border-top border-bottom">
            <div class="container-fluid px-0">
                <div class="text-center mb-4" data-aos="fade-up">
                    <h6 class="text-uppercase fw-bold text-muted tracking-wider" style="letter-spacing: 2px;">Trusted & Certified Globally</h6>
                </div>
                <div class="marquee-wrapper position-relative">
                    <!-- Optional gradient masks to fade the edges smoothly -->
                    <div class="marquee-mask-left position-absolute top-0 start-0 h-100 bg-gradient-to-r z-2"></div>
                    <div class="marquee-mask-right position-absolute top-0 end-0 h-100 bg-gradient-to-l z-2"></div>
                    
                    ${trackHtml}
                </div>
            </div>
        </section>
    `;
});