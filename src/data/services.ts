import { BsGraphUpArrow } from "react-icons/bs";
import { FaDollarSign, FaCashRegister, FaHandshakeAngle } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMegaphone } from "react-icons/io5";
import { FC } from "react";

interface Service {
  id: string | number;
  link: string;
  key: string;
  logo: FC;
  title: string;
  desc: string;
  why_us: { [key: string]: string }; // Explicit type declaration
  type_of_service: { [key: string]: string };
  process: { [key: string]: string };
  image: string;
  faq: { [key: string]: string };
}

const services: Service[] = [
  {
    id: 1,
    link: "/services/fund-raising",
    key: "fund-raising",
    logo: BsGraphUpArrow,
    title: "Fund Raising",
    desc: "Secure the capital you need to grow and scale with EaseMyProcess. Our expert team provides strategic, data-driven solutions and end-to-end support to navigate the complex funding landscape, ensuring your business stands out to investors.",
    why_us: {
      "Top Trending Hashtag":
        "We promise to make your hashtag the most popular one on Twitter across the country.",
      "Wide Audience":
        "Reach millions of Twitter users and get your brand or message seen by a large number of people.",
      "2K-10K Posts in 30 Minutes":
        "See a big increase in posts and discussions about your hashtag, ranging from 2500 to 10,000 in just half an hour",
      "Fast Trending":
        "Get to the number 1 trending position in as little as 30 minutes after starting the campaign.",
      "Long-Term Visibility":
        "Your hashtag will continue to be seen and shared over time, giving it lasting visibility.",
    },
    type_of_service: {
      "Private Seed Funds and Startup India Seed Fund Scheme":
        "To raise equity capital of INR 10 Lacs and above",
      "Venture Capital (to raise INR 50 Lacs to INR 3 Crores)":
        "We help you formulate business fundraising strategy highlighting your business' value and growth potential to investors, inspiring them to inject capital.",

      "Angel Investing (to raise INR 4 Crores and above)":
        "Highlight the potential of your startup to angel investors and secure the funding you need to get your idea off the ground and grow more rapidly.",

      "Debt Capital":
        "Create a powerful business fundraising strategy that will help you secure borrowed funds on a long-term or short-term basis, depending on your needs."

    },
    process: {
      "High Visibility":
        "Secure the top spot on Twitter trends for wide visibility.",
      "Quick Engagement":
        "Get 2500-10,000 posts in just 30 minutes, creating excitement around your brand.",
      "Fast Results":
        "Become a trending topic within 30 minutes, ensuring quick and impactful visibility.",
      "Broad Audience":
        "Connect with millions of Twitter users, expanding your brand's reach and influence.",
      "Lasting Impact":
        "Enjoy long-term visibility as your hashtag continues to be discovered and shared.",
    },
    faq: {
      "What are the typical stages involved in the fundraising process?": `
            This is a multi-line answer describing the typical stages involved in the fundraising process.
            
            
            
            
            You can add as many lines as needed for a clear explanation.
          `,

      "What are the primary sources of funding available at each stage of fundraising?":
        "",

      "How does the investment approach differ between venture capital firms and angel investors?":
        "Angel investors often invest their own money in early-stage startups and provide mentorship. Venture capital firms manage pooled funds from investors and typically invest in later-stage startups, providing larger amounts of capital.",

      "Can you provide guidance on crafting a targeted investor outreach strategy?":
        "Yes, Tailor your outreach strategy to each investor's preferences and interests. Personalize your communication, highlight key metrics and achievements, and articulate your value proposition clearly.",

      "Why should I choose your company for startup fundraising?": "",

      "What factors should I consider when determining the amount of funding to raise at each stage?":
        "Consider your business plan, growth projections, operational expenses, and milestones you aim to achieve with the funding. Factor in potential market fluctuations and unforeseen challenges.",

      "What role do corporate investors or strategic partners play in the fundraising ecosystem?":
        "Corporate investors and strategic partners can provide not only capital but also industry expertise, access to networks, distribution channels, and potential acquisition opportunities.",

      "What are some common mistakes or pitfalls to avoid when pitching to investors?":
        "Some common mistakes include not knowing your audience, being overly optimistic with projections, lack of clarity in your pitch, and failure to address potential risks. It's important to do thorough research on investors and tailor your pitch accordingly.",

      "What are some common mistakes businesses make during fundraising?": "",

      "Can you help me connect with potential investors or venture capitalists?":
        "",
    },
    image: "/Anant_gujrani.png",
  },
  {
    id: 2,
    link: "/services/valuation",
    key: "valuation",
    logo: FaDollarSign,
    title: "Valuation",
    desc: "Unlock the true value of your business with our precise and investor-approved valuation services. Using multi-method approaches and realistic financial modeling, we deliver credible valuations that meet international standards and satisfy investor scrutiny.",
    why_us: {
      "Customized Website Design":
        "We create a website uniquely tailored to match your brand identity and goals.",
      "Responsive and User-Friendly":
        "Your website will be designed to function seamlessly on all devices, providing a positive user experience.",
      "Cutting-Edge Technology":
        "We leverage the latest technologies, including HTML5, CSS3, and JavaScript, to ensure a modern and dynamic website.",
      "Content Management Systems (CMS)":
        "Easy-to-use platforms that empower you to manage and update your website content effortlessly.",
      "Search Engine Optimization (SEO)":
        "Strategies to enhance your website's visibility on search engines, driving organic traffic to your site.",
      "Ongoing Maintenance and Support":
        "Regular updates and 24/7 support to keep your website secure, up-to-date, and functioning optimally.",
    },
    type_of_service: {
      "Professional Online Presence":
        "Present your brand with a polished and professional website.",
      "User-Friendly Experience":
        "Ensure a positive experience for your website visitors with responsive and easy-to-navigate designs.",
      "Modern and Dynamic":
        "Stay ahead with cutting-edge technology, making your website both modern and dynamic.",
      "Search Engine Visibility":
        "Improve your online visibility with SEO strategies, attracting organic traffic to your website.",
      "Empowerment Through CMS":
        "Manage and update your website content effortlessly with user-friendly Content Management Systems.",
      "Ongoing Support":
        "Enjoy peace of mind with regular updates and 24/7 support, ensuring your website remains secure and optimized.",
    },
    process: {
      "Professional Online Presence":
        "Present your brand with a polished and professional website.",
      "User-Friendly Experience":
        "Ensure a positive experience for your website visitors with responsive and easy-to-navigate designs.",
      "Modern and Dynamic":
        "Stay ahead with cutting-edge technology, making your website both modern and dynamic.",
      "Search Engine Visibility":
        "Improve your online visibility with SEO strategies, attracting organic traffic to your website.",
      "Empowerment Through CMS":
        "Manage and update your website content effortlessly with user-friendly Content Management Systems.",
      "Ongoing Support":
        "Enjoy peace of mind with regular updates and 24/7 support, ensuring your website remains secure and optimized.",
    },
    faq: {
      "What types of questions do investors typically ask during due diligence?":
        "",
      "How do I calculate my company's valuation for a funding round?": "",
      "What are the differences between angel investors, venture capitalists, and private equity firms?":
        "",
      "What are red flags that can deter investors from funding my startup?":
        "",
      'What does "investor readiness" mean, and why is it crucial before seeking funding?':
        "",
      "What essential documents should a business have prepared when seeking funding from investors or venture capital firms?":
        "",
      "What's the best way to track my startup's burn rate?": "",
      "When should I consider hiring a CFO or outsourced financial modeling expert?":
        "",
      "Besides TAM/SAM/SOM, what other market sizing metrics are important": "",
      "How can I find reliable data sources to calculate TAM/SAM/SOM?": "",
      "How do unit economics, KPIs, and other metrics play a role in guiding a business towards success?":
        "",
      "In terms of financial focus, should a company prioritize revenue growth or profitability?":
        "",
      "What are the benefits for modern businesses to outsource their accounting and financial operations?":
        "",
      "Why is adherence to regulations like MCA, GST, Income Tax, and other legal requirements essential for a business?":
        "",
    },
    image: "/service/website.svg",
  },
  {
    id: 3,
    link: "/services/pitch-deck",
    key: "pitch-deck",
    logo: MdOutlineMonitor,
    title: "Pitch Deck & Modelling",
    desc: "Captivate investors in just 3 minutes with a compelling pitch deck from EaseMyProcess. Our Wall Street-level presentations, comprehensive business plans, and advanced financial models increase your chances of securing funding by 75%",
    why_us: {
      "Customized Sales Funnel Design":
        "Tailored funnels that align with your product or service, ensuring a personalized and effective customer experience.",
      "Lead Generation Strategies":
        "Implementing techniques to attract and capture potential leads at various stages of the funnel.",
      "Conversion Optimization":
        "Fine-tuning each stage to maximize conversion rates and turn leads into paying customers.",
      "Automated Email Campaigns":
        "Utilizing automated email sequences to nurture leads, provide valuable information, and drive sales.",
      "Analytics and Tracking":
        "Implementing tools to monitor and analyze the performance of the sales funnel, allowing for continuous optimization.",
      "A/B Testing":
        "Conducting split testing to identify the most effective elements within the funnel and refine the customer journey.",
    },
    type_of_service: {
      "Optimized Customer Journey":
        "Guide potential customers seamlessly from awareness to conversion with a strategically designed sales funnel.",
      "Increased Conversions":
        "Fine-tune each stage for maximum impact, turning leads into loyal customers.",
      "Time and Resource Efficiency":
        "Automate processes, saving time and resources while maintaining a personalized customer experience.",
      "Data-Driven Decision Making":
        "Utilize analytics and tracking to make informed decisions and continuously improve the performance of your sales funnel.",
      "Lead Nurturing":
        "Implement automated email campaigns to nurture leads, build relationships, and drive long-term customer loyalty.",
      "Continuous Improvement":
        "A/B testing allows for constant refinement, ensuring your sales funnel remains effective and adaptive.",
    },
    process: {
      "Optimized Customer Journey":
        "Guide potential customers seamlessly from awareness to conversion with a strategically designed sales funnel.",
      "Increased Conversions":
        "Fine-tune each stage for maximum impact, turning leads into loyal customers.",
      "Time and Resource Efficiency":
        "Automate processes, saving time and resources while maintaining a personalized customer experience.",
      "Data-Driven Decision Making":
        "Utilize analytics and tracking to make informed decisions and continuously improve the performance of your sales funnel.",
      "Lead Nurturing":
        "Implement automated email campaigns to nurture leads, build relationships, and drive long-term customer loyalty.",
      "Continuous Improvement":
        "A/B testing allows for constant refinement, ensuring your sales funnel remains effective and adaptive.",
    },
    faq: {
      "My company already has an accounting team. How does FP&A add value to our existing financial management?":
        "",
      "What strategies does FP&A use to optimize accounts payable and receivable processes?":
        "",
      "Can FP&A create custom board materials and KPI dashboards for our unique business needs?":
        "",
      "My startup isn't generating revenue yet. Is FP&A still valuable?": "",
      "What are the differences between 'budgeting' and 'forecasting' in FP&A?":
        "",
      "How does FP&A factor in scenario planning to help me prepare for different eventualities?":
        "",
      "Will I lose control of my financial data/models if I outsource FP&A?":
        "",
      "What qualifications should I look for when considering an outsourced FP&A provider?":
        "",
      "Our business is experiencing rapid growth. How can FP&A help us manage cash flow and working capital during this transition?":
        "",
      "How can your FP&A services be integrated with my existing accounting and financial systems?":
        "",
      "How does FP&A support in dealing with fluctuating market conditions and economic uncertainties?":
        "",
      "Can your FP&A services provide insights into customer and product profitability?":
        "",
    },
    image: "/service/funnel.svg",
  },
  {
    id: 4,
    link: "/services/accounting",
    key: "acounting",
    logo: FaCashRegister,
    title: "Accounting & Compliance",
    desc: "Streamline your financial processes and ensure compliance with EaseMyProcess. Save up to 60% on accounting costs with our professional, technology-driven services, from daily record-keeping to comprehensive audit support and regulatory compliance.",
    why_us: {
      "Custom Mobile App Design":
        "Tailored designs that reflect your brand identity and provide an intuitive user interface.",
      "Cross-Platform Development":
        "Building applications that work seamlessly on both iOS and Android platforms for maximum reach.",
      "Feature-Rich Functionality":
        "Incorporating innovative features to enhance user experience and meet the unique needs of your application.",
      "Scalable Architecture":
        "Designing applications with scalability in mind, ensuring they can grow alongside your business.",
      "Quality Assurance Testing":
        "Rigorous testing procedures to identify and address any issues, ensuring a reliable and bug-free application.",
      "App Store Submission Assistance":
        "Guiding you through the process of submitting your app to the respective app stores for approval.",
    },
    type_of_service: {
      "Branded User Experience":
        "Deliver a mobile app that aligns with your brand and provides a memorable user experience.",
      "Wider Audience Reach":
        "Develop applications that work seamlessly on both major platforms (iOS and Android), reaching a broader audience.",
      "Innovative Features":
        "Enhance user engagement with innovative features that set your app apart from the competition.",
      "Scalable Solutions":
        "Ensure your app can grow with your business, accommodating increased users and functionalities.",
      "Reliability and Quality":
        "Rigorous testing guarantees a reliable and bug-free application for your users.",
      "Expert Guidance":
        "Receive assistance throughout the app submission process, ensuring successful placement on app stores.",
    },
    process: {
      "Branded User Experience":
        "Deliver a mobile app that aligns with your brand and provides a memorable user experience.",
      "Wider Audience Reach":
        "Develop applications that work seamlessly on both major platforms (iOS and Android), reaching a broader audience.",
      "Innovative Features":
        "Enhance user engagement with innovative features that set your app apart from the competition.",
      "Scalable Solutions":
        "Ensure your app can grow with your business, accommodating increased users and functionalities.",
      "Reliability and Quality":
        "Rigorous testing guarantees a reliable and bug-free application for your users.",
      "Expert Guidance":
        "Receive assistance throughout the app submission process, ensuring successful placement on app stores.",
    },
    faq: {
      "I'm not technical and don't know how to code. Can I still automate my Excel tasks?":
        "",
      "How can your solutions save me time I spend on repetitive Excel tasks? Can you give a real-world example?":
        "",
      "How easy are your automation solutions to implement and use? (Addresses the fear of complexity for non-technical users).":
        "",
      "Do I need any specialized software or add-ins to use your solutions?":
        "",
      "How to effectively handle large datasets and calculations?": "",
      "How to automate manual or repetitive tasks? How to ensure that output provided by excel is accurate?":
        "",
      "Are there best practices for managing complex models?": "",
      "Are your solutions more user-friendly and accessible than traditional VBA coding? (Ease-of-use is a core selling point).":
        "",
      "How do your solutions ensure ongoing compatibility and avoid the need for technical maintenance (like updating VBA code)? (Reduces long-term hassle)":
        "",
      "What kind of support do you offer for users who are new to automation? (Demonstrates your commitment to supporting adoption).":
        "",
    },
    image: "/service/app.svg",
  },
  {
    id: 5,
    link: "/services/financial",
    key: "financial",
    logo: FaHandshakeAngle,
    title: "Financial Planning & Analysis",
    desc: "Transform your business with expert financial analysis and Excel automation from EaseMyProcess. Improve accuracy, boost efficiency by up to 80%, and make data-driven decisions with our tailored dashboards, forecasting, and budgeting solutions.",
    why_us: {
      "Custom Chatbot Design":
        "Tailored chatbot designs to align with your brand voice and user expectations.",
      "Multi-Platform Integration":
        "Developing chatbots that seamlessly integrate across various platforms, including websites, messaging apps, and social media.",
      "Natural Language Processing (NLP)":
        "Incorporating advanced NLP technology for chatbots to understand and respond to user queries in a human-like manner.",
      "Task Automation":
        "Enabling chatbots to perform specific tasks, provide information, and assist users, improving operational efficiency.",
      "Continuous Learning and Improvement":
        "Implementing machine learning algorithms for chatbots to continuously learn and improve responses over time.",
      "User Analytics":
        "Providing insights into user interactions with the chatbot, allowing for data-driven improvements and optimizations.",
    },
    type_of_service: {
      "Enhanced Customer Engagement":
        "Provide instant and interactive support, enhancing overall customer satisfaction.",
      "24/7 Availability":
        "Chatbots offer round-the-clock assistance, ensuring users can access information and support at any time.",
      "Operational Efficiency":
        "Automate routine tasks, allowing your team to focus on more complex and strategic aspects of your business.",
      "Personalized User Experience":
        "Tailor responses based on user interactions, creating a personalized and user-friendly experience.",
      "Adaptability and Learning":
        "Chatbots continuously adapt and learn, improving their capabilities and responses over time.",
      "Insights for Improvement":
        "Utilize user analytics to gain insights into user behavior and preferences, allowing for data-driven improvements.",
    },
    process: {
      "Enhanced Customer Engagement":
        "Provide instant and interactive support, enhancing overall customer satisfaction.",
      "24/7 Availability":
        "Chatbots offer round-the-clock assistance, ensuring users can access information and support at any time.",
      "Operational Efficiency":
        "Automate routine tasks, allowing your team to focus on more complex and strategic aspects of your business.",
      "Personalized User Experience":
        "Tailor responses based on user interactions, creating a personalized and user-friendly experience.",
      "Adaptability and Learning":
        "Chatbots continuously adapt and learn, improving their capabilities and responses over time.",
      "Insights for Improvement":
        "Utilize user analytics to gain insights into user behavior and preferences, allowing for data-driven improvements.",
    },
    faq: {
      "How can your firm help me identify the most promising acquisition targets within my industry? (Focus on identifying high-potential opportunities).":
        "",
      "What types of primary and secondary research methods do you use for market analysis? (Demonstrates the variety of tools you use).":
        "",
      "Do you specialize in specific industries or market segments? (Highlights any niche experience you may have).":
        "",
      "How do you go beyond demographics to uncover deep insights about my target market's pain points and motivations? (Emphasizes going beyond the obvious data).":
        "",
      "How does your deal advisory team ensure a smooth and efficient transaction process? (Process management is vital for success)":
        "",
      "What regulatory complexities should I be aware of when structuring deals in India? (Highlights your specialized knowledge).":
        "",
      "How do you optimize deal structures to minimize tax implications for both buyers and sellers in India? (Tax efficiency is a major concern)":
        "",
    },
    image: "/service/chatbot.svg",
  },
  {
    id: 6,
    link: "/services/deal-adivsory",
    key: "deal-advisory",
    logo: IoMegaphone,
    title: "Deal Advisory & Implementation",
    desc: "Maximize your investment opportunities and achieve successful deals with EaseMyProcess. We provide end-to-end deal advisory, strategic M&A structuring, and seamless transaction support, ensuring smart investments and strong exits.",
    why_us: {
      "Custom IVR System Design":
        "Tailored IVR designs to meet the specific needs and branding of your business.",
      "Automated Call Routing":
        "Efficiently direct incoming calls to the appropriate department or agent, reducing wait times.",
      "Voice Recognition Technology":
        "Implementing advanced voice recognition to allow customers to interact naturally with the system.",
      "Multilingual Support":
        "Ensuring your IVR can accommodate customers in various languages for a global reach.",
      "Integration with CRM Systems":
        "Seamless integration with Customer Relationship Management systems to provide agents with relevant customer information.",
      "Customized Prompts and Messages":
        "Crafting personalized and branded audio prompts to guide customers through the IVR process.",
    },
    type_of_service: {
      "Improved Customer Experience":
        "Provide customers with a seamless and efficient way to interact with your business over the phone.",
      "Reduced Wait Times":
        "Automated call routing ensures that customers are directed to the right department quickly, minimizing wait times.",
      "Enhanced Efficiency":
        "Free up human resources by automating routine tasks, allowing your team to focus on more complex customer queries.",
      "Global Accessibility":
        "Multilingual support allows your IVR system to cater to a diverse customer base.",
      "Data-Driven Insights":
        "Integration with CRM systems provides valuable customer information, allowing for personalized interactions.",
      "Branded Communication":
        "Customized prompts and messages create a consistent and branded experience for your callers.",
    },
    process: {
      "Improved Customer Experience":
        "Provide customers with a seamless and efficient way to interact with your business over the phone.",
      "Reduced Wait Times":
        "Automated call routing ensures that customers are directed to the right department quickly, minimizing wait times.",
      "Enhanced Efficiency":
        "Free up human resources by automating routine tasks, allowing your team to focus on more complex customer queries.",
      "Global Accessibility":
        "Multilingual support allows your IVR system to cater to a diverse customer base.",
      "Data-Driven Insights":
        "Integration with CRM systems provides valuable customer information, allowing for personalized interactions.",
      "Branded Communication":
        "Customized prompts and messages create a consistent and branded experience for your callers.",
    },
    faq: {
      'What are some common "red flags" that indicate accounting problems in my business?':
        "",
      "What are the common risks of managing accounting in-house for small businesses and startups?":
        "",
      "I'm good with spreadsheets, why can't I manage my own accounting?": "",
      "How can outdated accounting software expose my business to fraud or compliance risks? (Introduces the importance of cloud-based solutions).":
        "",
      "What are the hidden costs of inaccurate or incomplete accounting?": "",
      "How can your firm help me identify areas where automation can improve accounting accuracy and efficiency?":
        "",
      "Do you provide regular reporting and insights, in addition to core accounting services?":
        "",
      "How does your accounting and compliance expertise go beyond what a typical in-house accountant can provide?":
        "",
      "What support do you offer for businesses facing audits or financial scrutiny from regulatory bodies?":
        "",
      "How do cloud-based accounting solutions provide better tracking and control?":
        "",
      "What kind of financial dashboards and reports do you offer to keep me updated on my business health?":
        "",
      "Why is adherence to regulations like MCA, GST, Income Tax, and other legal requirements essential for a business?":
        "",
    },
    image: "/service/ivr.svg",
  },
];

export default services;
