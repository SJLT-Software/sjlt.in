// Variables to use in codebase
const variables = {
    // Company Information
    company_name: "SJLT Group Of Mills",
    company_logo: "assets/images/logo-bg-png.jpg",
    company_since: "1994",
    company_byline: "Since 1994",
    company_description: "SJLT, a multi unit business established in the year 1994 with an initial capacity of just 7000 spindles. Over the years, under the strong leadership of Mr. Jagadeesan Veerappan ,Chairman and Mr.Selvadurai Veerappan, Managing Director, the mill has now a total capacity of 2,40,000 spindles and vertically integrated to cater to the retail markets. With our core strength in spinning fine yarns, we are now proud to deliver finished products that can stand apart from our competitors and bring unmatched value to our customers.",
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
        sustainability: {
            title: 'Sustainability Efforts',
            description: 'Go Green and Save Nature',
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
                },
                {
                    title: "Better Cotton Initiative",
                    image: "assets/images/bci.jpg",
                    description: "We are a member of the world’s leading sustainability organization that promotes sustainable cotton farming practices like proper crop protection, minimal water usage, ways to improve soil fertility and healthy labor management. There is also economic development in cotton communities while protecting and restoring the environment."
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
                }
            ]
        }
    }
};