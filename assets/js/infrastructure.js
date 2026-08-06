document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("infrastructure-container");
    const data = variables.sections.infrastructure;

    if (!container || !data) return;

    let panelsHtml = data.subsections.map((sub, index) => {
        const isActive = index === 0 ? 'active' : '';
        
        // Reduced bottom margin on stats to fit content better
        const statsHtml = sub.stats.map(stat => `
            <div class="col-sm-6 mb-2">
                <span class="d-block text-uppercase text-muted fw-bold" style="font-size: 0.7rem; letter-spacing: 1px;">${stat.label}</span>
                <span class="fw-bold text-dark fs-6">${stat.value}</span>
            </div>
        `).join('');

        return `
            <div class="flex-panel ${isActive}" style="background-image: url('${sub.image}');" tabindex="0" role="button">
                <div class="panel-overlay"></div>
                
                <div class="panel-closed-title">
                    <h3 class="fw-bold m-0 text-white letter-spacing-wide">${sub.title}</h3>
                </div>

                <div class="panel-expanded-content">
                    <!-- Badges removed, opacity lowered, width increased -->
                    <div class="content-box glass-effect p-4 p-md-5 rounded-4">
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
                <div class="text-center mb-4 text-white" data-aos="fade-up">
                    <h2 class="display-4 fw-bold" style="font-family: 'Playfair Display', serif;">${data.title}</h2>
                    <p class="lead text-white-50 max-w-75 mx-auto">${data.description}</p>
                </div>
                
                <div class="flex-accordion-container" data-aos="fade-up" data-aos-delay="100">
                    ${panelsHtml}
                </div>
            </div>
        </section>
    `;

    const panels = document.querySelectorAll('.flex-panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
    });
});