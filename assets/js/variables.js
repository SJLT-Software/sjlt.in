// Variables to use in codebase
const variables = {
    // Company Information
    company_name: "SJLT Group Of Mills",
    company_logo: "assets/images/logo.jpg",
    company_since: "1994",
    company_byline: "Since 1994",
    company_description: "SJLT, a multi unit business established in the year 1994 with an initial capacity of just 7000 spindles. Over the years, under the strong leadership of Mr. Jagadeesan Veerappan ,Chairman and Mr.Selvadurai Veerappan, Managing Director, the mill has now a total capacity of 2,40,000 spindles and vertically integrated to cater to the retail markets. With our core strength in spinning fine yarns, we are now proud to deliver finished products that can stand apart from our competitors and bring unmatched value to our customers.",
    copyright_year: new Date().getFullYear(),
    copyright_holder: "SJLT USA Textiles LLC",

    // Global Contact
    company_email: "marketing@sjlt.in",
    
    // Multiple Locations (replaces static showroom variables)
    locations: [
        {
            type: "US Corporate Office / Showroom",
            address: "Suite 1710, 530 Fifth Avenue, New York, NY 10036",
            phone: "+91 9500988297",
            hours: "Mon - Fri: 9 AM - 6 PM EST",
            map_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1234567890123!2d-73.98542848459375!3d40.75889677932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8e5e5e5%3A0x123456789abcdef0!2s530%205th%20Ave%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sus!4v1610000000000"
        },
        {
            type: "India Head Office",
            address: "2E, Second Floor, Prince Arcade, 22A, Cathedral Road, Chennai, Tamil Nadu, India - 600086",
            phone: "+91 9500988297",
            hours: "Mon - Sat: 9 AM - 6 PM IST",
            map_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2388270041!2d78.04339127355793!3d11.169944751814967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd3c08a99534d%3A0x65fd8edcbc65b996!2sSJLT%20Spinning%20Mills%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1782158352928"
        },
        {
            type: "Manufacturing Unit",
            address: "NH-7, Namakkal-Karur Main Road, Paramathi Velur, Tamil Nadu, India - 637207",
            phone: "+91 9500988297",
            hours: "24/7 Operations",
            map_embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2388270041!2d78.04339127355793!3d11.169944751814967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd3c08a99534d%3A0x65fd8edcbc65b996!2sSJLT%20Spinning%20Mills%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1782158352928"
        }
    ],
    
    // Counters
    impact_employees: 3000,
    impact_customers: 150,
    impact_tons: 200000,

    // Social media links
    social_media: {
        Facebook: "https://www.facebook.com/sjltusa",
        Linkedin: "https://www.linkedin.com/company/sjlt-usa-textiles"
    },
    
    // Navigation Menu
    menu: [
        { label: "Home", link: "#home" },
        { label: "About Us", link: "#about" },
        { label: "Infrastructure", link: "#infrastructure" },
        { label: "Sustainability", link: "#sustainability" },
        { label: "CSR Projects", link: "#csr" },
        { label: "Contact Us", link: "#contact" }
    ]
};