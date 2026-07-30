    const fontFamilies = [
        "EB Garamond", "Georgia", "Lora", "Playfair Display", "Prata", 
        "Times New Roman", "Baskerville", "Merriweather", "Libre Baskerville", 
        "Cormorant Garamond", "Cardo", "Crimson Text", "Vollkorn", "Alegreya", 
        "Arvo", "PT Serif", "Noto Serif", "Rokkitt", "Tisa", "Spectral", 
        "Domine", "Lustria"
    ];

    $(document).ready(function() {
        // 1. Create a master container to hold the button and the panel
        const container = $('<div id="font-overlay-container"></div>').css({
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: '9999',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // Aligns the panel to the right
            gap: '8px'
        });

        // 2. Create the small circular toggle button
        const toggleBtn = $('<button id="font-overlay-toggle">Aa</button>').css({
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0'
        });

        // 3. Create the hidden panel that holds the search bar
        const panel = $('<div id="font-overlay-panel"></div>').css({
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'none' // Hidden by default
        });

        // 4. Get current font, clean up the string (e.g., remove quotes and fallbacks)
        let rawFont = $("body").css("font-family") || "Select a font";
        let cleanFont = rawFont.replace(/['"]/g, '').split(',')[0].trim();

        // 5. Create the searchable input
        const fontInput = $('<input type="text" list="font-datalist" id="font-overlay-input">').css({
            width: '180px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '14px',
            outline: 'none'
        }).attr("placeholder", cleanFont);

        // 6. Create the datalist
        const dataList = $('<datalist id="font-datalist"></datalist>');
        fontFamilies.forEach(font => {
            dataList.append(`<option value="${font}">`);
        });

        // 7. Assemble the UI
        panel.append(fontInput).append(dataList);
        container.append(toggleBtn).append(panel);
        $("body").append(container);

        // 8. Toggle functionality: Show/hide panel when the button is clicked
        toggleBtn.on("click", function() {
            panel.fadeToggle(200);
        });

        // 9. Font change functionality
        $("#font-overlay-input").on("input", function() {
            const selectedFont = $(this).val();
            
            if (fontFamilies.includes(selectedFont)) {
                const fontFormatted = selectedFont.replace(/ /g, '+');
                const fontId = 'font-link-' + fontFormatted;
                
                if ($('#' + fontId).length === 0) {
                    $('head').append(
                        `<link id="${fontId}" href="https://fonts.googleapis.com/css2?family=${fontFormatted}&display=swap" rel="stylesheet">`
                    );
                }

                $("body").css("font-family", `"${selectedFont}", serif`);
            }
        });
    });
