$(document).ready(function() {
    const data = variables.sections.sustainability;
    
    if (data && $('#sustainability-container').length) {
        let cardsHtml = '';
        
        // Loop through the subsections to create the cards
        data.subsections.forEach((item, index) => {
            cardsHtml += `
                <div class="card border-0 shadow-sm rounded-4 mb-5 overflow-hidden hover-lift" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="card-image-wrapper">
                        <img src="${item.image}" class="card-img-top w-100 object-fit-cover" alt="${item.title}">
                    </div>
                    <div class="card-body p-4 p-lg-5 bg-white">
                        <h4 class="card-title fw-bold text-primary mb-3">${item.title}</h4>
                        <p class="card-text text-muted font-secondary mb-0">${item.description}</p>
                    </div>
                </div>
            `;
        });

        // Build the split layout
        const sectionHtml = `
            <div class="container py-5">
                <div class="row sticky-container">
                    <div class="col-lg-5 sticky-left-col">
                        <div class="sticky-content pe-lg-4">
                            <span class="text-uppercase text-secondary fw-bold tracking-wider font-secondary d-block mb-2">Our Commitment</span>
                            <h2 class="display-5 fw-bold text-primary mb-4">${data.title}</h2>
                            <p class="lead text-muted font-secondary">${data.description}</p>
                        </div>
                    </div>

                    <div class="col-lg-7 scrolling-right-col pt-4 pt-lg-0">
                        ${cardsHtml}
                    </div>
                </div>
            </div>
        `;

        $('#sustainability-container').html(sectionHtml);
    }
});