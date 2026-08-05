document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("infrastructure-container");
    const data = variables.sections.infrastructure;

    if (!container || !data) return;

    let panelsHtml = data.subsections.map((sub, index) => {
        // The first panel is open ('active') by default
        const isActive = index === 0 ? 'active' : '';
        
        const statsHtml = sub.stats.map(stat => `
            <div class="col-sm-6 mb-3">
                <span class="d-block text-uppercase text-muted fw-bold" style="font-size: 0.7rem; letter-spacing: 1px;">${stat.label}</span>
                <span class="fw-bold text-dark fs-6">${stat.value}</span>
            </div>
        `).join('');

        return `
            <div class="flex-panel ${isActive}" style="background-image: url('${sub.image}');" tabindex="0" role="button">
                <div class="panel-overlay"></div>
                
                <!-- Vertical Title for Closed State -->
                <div class="panel-closed-title">
                    <h3 class="fw-bold m-0 text-white letter-spacing-wide">${sub.title}</h3>
                </div>

                <!-- Expanded Content for Open State -->
                <div class="panel-expanded-content">
                    <div class="content-box glass-effect p-4 p-md-5 rounded-4 custom-scrollbar">
                        <span class="badge bg-dark text-light mb-3 py-2 px-3 rounded-pill">Division 0${index + 1}</span>
                        <h3 class="display-6 fw-bold mb-3" style="font-family: 'Playfair Display', serif;">${sub.title}</h3>
                        <p class="text-dark mb-4 fs-6">${sub.description}</p>
                        <div class="row pt-3 border-top border-dark border-opacity-25">
                            ${statsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section id="infrastructure" class="py-5 bg-dark">
            <div class="container-fluid px-3 px-md-4 py-4">
                <div class="text-center mb-5 text-white" data-aos="fade-up">
                    <h2 class="display-4 fw-bold" style="font-family: 'Playfair Display', serif;">${data.title}</h2>
                    <p class="lead text-white-50 max-w-75 mx-auto">${data.description}</p>
                </div>
                
                <div class="flex-accordion-container" data-aos="fade-up" data-aos-delay="100">
                    ${panelsHtml}
                </div>
            </div>
        </section>
    `;

    // Interaction Logic: Accordion Toggle
    const panels = document.querySelectorAll('.flex-panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Remove active class from all panels
            panels.forEach(p => p.classList.remove('active'));
            // Add active class to the clicked panel
            panel.classList.add('active');
        });
    });
});