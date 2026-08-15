// Variables to use in codebase
const variables = {
    // Company Information
    company_name: "SJLT Group Of Mills",
    company_logo: "assets/images/logo-bg-png.jpg",
    company_since: "1994",
    company_byline: "Since 1994",
    get company_description() {
        return variables.sections.about.description;
    },
    copyright_year_us: "2026",
    copyright_holder_us: "SJLT Textiles LLC",

    // Global Contact
    company_phone: "+91 9500988297",
    company_email: "marketing@sjlt.in",
    
    // Multiple Locations (replaces static showroom variables)
    /*
    Address format:
    {
        type: "Showroom / Office Type",
        address: "Full Address",
        phone[Optional]: "Phone Number",
        hours[Optional]: "Operating Hours",
        google_maps_link[Optional/Default: '#']: "Google Maps Link",
        map_embed_url[Optional/Default: '#']: "Google Maps Embed URL"
    }
    */
    locations: [
        // {
        //     type: "US Corporate Office / Showroom",
        //     address: "230 Fifth Avenue, New York, NY 10036",
        //     phone: "+91 9500988297",
        //     hours: "Mon - Fri: 9 AM - 6 PM EST",
        //     google_maps_link: "#",
        //     map_embed_url: "#"
        // },
        {
            type: "India Head Office",
            address: "2E, Second Floor, Prince Arcade, 22A, Cathedral Road, Chennai, Tamil Nadu, India - 600086",
            phone: "+91 9500988297",
            hours: "Mon - Sat: 9 AM - 6 PM IST",
            google_maps_link: "#",
            map_embed_url: "#"
        },
        {
            type: "Administrative Office",
            address: "NH-7, Namakkal- Karur Main Road, Pillaikalathur, Paramathi (PO) Paramathi Velur (Tk), Namakkal District, Tamil Nadu, India - 637207",
            phone: "+91 9500988297",
            hours: "24/7 Operations",
            google_maps_link: "#",
            map_embed_url: "#"
        },
        // {
        //     type: "Unit II",
        //     address: "Karugudi Village, By Pass - Manthoppu, Thathaiyengarpettai (via), Musiri (Tk), Trichy District Tamil Nadu, India - 621210",
        //     google_maps_link: "#",
        //     map_embed_url: "#"
        // },
        // {
        //     type: "Dindigul Unit",
        //     address: "Dindigul Karur NH-7, Kalvarpatti village, Vedasandur taluk, Dindigul District, Tamil Nadu, India - 624710",
        //     google_maps_link: "#"
        // },

    ],
    
    // Counters
    impact_employees: 3000,
    impact_customers: 150,
    impact_tons: 200000,

    // Social media links
    social_media: {
        Linkedin: "https://www.linkedin.com/company/sjlttextiles",
        Instagram: "https://www.instagram.com/oyvuindia/",
    },
    
    // Navigation Menu
    menu: [
        { label: "Home", link: "#home" },
        { label: "About Us", link: "#about" },
        { label: "Infrastructure", link: "#infrastructure" },
        { label: "Sustainability", link: "#sustainability" },
        { label: "CSR Projects", link: "#csr" },
        { label: "Contact Us", link: "#contact" }
    ],
    sections: {
        about: {
            title: "About SJLT",
            image: "assets/images/about-1.jpg",
            description: "SJLT, a multi unit business established in the year 1994 with an initial capacity of just 7000 spindles. Over the years, under the strong leadership of Mr. Jagadeesan Veerappan ,Chairman and Mr.Selvadurai Veerappan, Managing Director, the mill has now a total capacity of 2,40,000 spindles and vertically integrated to cater to the retail markets. With our core strength in spinning fine yarns, we are now proud to deliver finished products that can stand apart from our competitors and bring unmatched value to our customers.",
        },
        infrastructure: {
            title: "Infrastructure",
            description: "",
            subsections: [
                {
                    title: "Spinning Division",
                    image: "assets/images/spinning.jpg",
                    description: "Constant modernization and technology upgrades make us a leading yarn manufacturer. Placements of machineries and spindles are well planned in strategic locations with economies of scale in mind.",
                    stats: [
                        { label: "Spindles", value: 240000 },
                        { label: "Comber / Draw Frame", value: "LK 64, Reiter D50" },
                        { label: "Roving Machine / Ring Frame", value: "LMW with autodoffers and linkconers" },
                        { label: "Compact Spinning", value: "Suessen Elite" },
                        { label: "Autoconer", value: "Schlafhorst 338, Murata 21 C, Muratec Q-PRO" },
                        { label: "Open End Spinning", value: "Rieter BT923,3500 rotors" },
                        { label: "Yarn Clearers", value: "Uster Quantum Siro 3" },
                        { label: "Product Range", value: "Ne 30s to 120s Combed and Compact Single Yarn; Ne 12s to 30s count Open End Yarns" },
                    ]
                },
                {
                    title: "Weaving Division",
                    image: "assets/images/weaving.jpg",
                    description: "Producing greige fabric tailored for the finest bedlinens available with the latest Picanol Omni Summum looms.",
                    stats: [
                        { label: "Looms", value: "Picanol omni summum" },
                        { label: "Warping", value: "Karl Meyer" },
                        { label: "Sizing", value: "Karl Meyer Prosize" },
                        { label: "Production per year", value: "3 million meters" },
                        { label: "Thread Count", value: "100 TC to 1500 TC" },
                        { label: "Fabric Weaves", value: "Plain, Twill, Drill, Sateen, Satin, Stripes, waffle, Rib stop, Herringbone, Swiss dot, Gabardine, and Oxford and Dobby design weaves" },
                    ]
                },
                {
                    title: "Bedlinen Division",
                    image: "assets/images/bedline.jpg",
                    description: "Catering to retail, institutional, and utility bedding sectors globally with designs in solid and printed products.",
                    stats: [
                        { label: "Thread Count", value: "100 TC to 1500 TC" },
                        { label: "Capacity", value: "1000 Sheet Sets / Day" },
                        { label: "Fabric Stitches", value: "Flat sheet, fitted sheet, Duvet, Quilts, Comforters, Pillow Covers and Cushions" },
                        { label: "Composition", value: "Egyptian Cotton, Supima, Organic, Tencel, Linen" },
                        { label: "Fabric Finishes", value: "Anti-bacterial, Wrinkle free, Water repellant, Stain repellant, Anti-viral" },
                    ]
                }
            ]
        },
        certifications: {
            title: "",
            description: "",
            certifications: [
                { name: "BCI", image: "assets/images/certifications/C-00-00-BCI.jpeg" },
                { name: "Cotton USA", image: "assets/images/certifications/C-00-00-Cotton USA.png" },
                { name: "GOTS", image: "assets/images/certifications/C-00-00-GOTS logo.png" },
                { name: "ISO", image: "assets/images/certifications/C-00-00-ISO-modified.jpg" },
                { name: "OCS", image: "assets/images/certifications/C-00-00-OCS.png" },
                { name: "Oeko-Tex", image: "assets/images/certifications/C-00-00-Oeko_Tex-modified.png" },
                { name: "SA8000", image: "assets/images/certifications/C-00-00-SA8000.png" },
                { name: "Sedex", image: "assets/images/certifications/C-00-00-Sedex Logo.png" },
                { name: "Supima", image: "assets/images/certifications/C-00-00-Supima.png" },
                { name: "Tencel", image: "assets/images/certifications/C-00-00-Tencel.png" },
                { name: "Egyptian Cotton Gold Seal", image: "assets/images/certifications/Egyptian Cotton Gold Seal - SJLT Textiles(1).jpg" },
            ]
        },
        facts: {
            title: "",
            description: "",
            facts: [
                { label: "Employees", value: 3000 },
                { label: "Customers", value: 150 },
                { label: "Tons Manufactured", value: 200000 },
            ]
        },
        sustainability: {
            title: 'Sustainability Efforts',
            description: 'Go Green and Save Nature',
            facts: [
                { label: 'Carbon Footprint Reduction' , value: '20 CO2 Tons / Year' },
                { label: 'Water Conservation' , value: '50,000 Liters / Year' },
                { label: 'Energy Savings' , value: '100,000 kWh / Year' },
                { label: 'Trees Planted' , value: '500 Trees / Year' },
            ],
            subsections: [
                {
                    title: "Solar Power",
                    image: "assets/images/solar.jpg",
                    description: "Solar rooftop panels and solar farms are installed with a capacity of 20 MW generating energy of 90000 kWh per day. This reduces green house gas emissions and also our dependence on coal to achieve climate change targets."
                },
                {
                    title: "Wind Energy",
                    image: "assets/images/windFeild.jpg",
                    description: "Our Wind farms in remote areas are installed with a capacity of 8.3 MW generating energy of 38356 kWh per day. Another green power technology that is carbon emission free, pollution free, toxic waste free and infinitely clean source of renewable energy that is freely available from wind."
                },
                {
                    title: "Rainwater Harvesting",
                    image: "assets/images/rainwater.jpg",
                    description: "We engage in traditional rainwater harvesting by collecting, storing, conserving and repurposing it for our employees, factory needs and for irrigation which would otherwise fall back onto the ground or drain away. Renewable water source also reduces the pressure on processed supply water which enhances the green living and lowers the ecological foot print."
                }
            ]
        },
        csr: {
            title: 'Corporate Social Responsibility',
            description: '\"It is not enough to be compassionate - you must act.\"<br>- The Dalai Lama',
            subsections: [
                {
                    title: 'Safety and Well-Being',
                    image: 'assets/images/women.jpg',
                    description: 'We are committed to caring for our employees and their safety is our priority. We take initiative to support them through constant training, workshops and educational programs that have instilled confidence and independence in their personalities. Fire Safety and First Aid trainings are mandatory for them. Medical checkups and vaccination camps are organized for their health. We provide family housing for out-of-state workers, bus transportation for local employees, hostel facilities for women employees and canteen facilities for all.'
                },
                {
                    title: 'Medical Projects',
                    image: 'assets/images/health.jpg',
                    description: 'Our latest Kidney Dialysis project provides 70% low cost kidney Dialysis services to unprivileged patients suffering from chronic kidney disease. The facility substantially reduces the financial burden for the patients who need the treatment several times a week.'
                },
                {
                    title: 'Education',
                    image: 'assets/images/education.jpg',
                    description: 'We constantly thrive for social transformation and engaging with community by adopting neighbouring schools and providing them with necessary infrastructure like smart classrooms, regular classrooms and toilet facilities. Overall we actively participate in their development and well-being.'
                },
                {
                    title: 'Woman Empowerment',
                    image: 'assets/images/women.jpg',
                    description: 'We are committed to empowering women in our community'
                },
                {
                    title: 'Training Centers',
                    image: 'assets/images/education.jpg',
                    description: 'We have established training centers to provide skill development and vocational training to the local community. These centers offer courses in textile manufacturing, sewing, embroidery, and other relevant skills, enabling individuals to gain employment and improve their livelihoods.'
                }
            ]
        }
    }
};