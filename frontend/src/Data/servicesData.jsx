import serviceImage1 from "../Assets/services-image-1.jpg";
import serviceImage2 from "../Assets/services-image-2.jpg";
import serviceImage3 from "../Assets/services-image-3.jpg";

const servicesData = [
  {
    id: 1,
    title: "Express Parcel",
    desc: "Our express parcel delivery network services over 18500 pin codes in India. It can handle consignments of up to 10 kilograms with same-day and next-day capabilities and 48-96 hour deliveries for long-distance orders. We also offer heavy goods service comprising the warehousing and delivery of heavy goods, such as large electrical goods, or white goods, furniture and sports equipment, supported by our extensive pan-India network and PTL services. Additionally, we extend our express parcel services for domestic shipping, through Delhivery Direct to individual consumers from the comfort of their homes.",
    imgSrc: serviceImage1,
    category: "express",
  },
  {
    id: 2,
    title: "Partial-Truckload freight",
    desc: "Delhivery provides PTL freight services focused on the B2B express segment at competitive rates. Our services are designed to meet regular as well as seasonal requirements across the country. Customers’ freight requirements are serviced at competitive costs – with a combination of our own fleet and our network of pan-India professional truckload partners.Our service is designed around shared linehaul operations with the express parcel business. Our shared network allows us to offer e-commerce equivalent turnaround times and direct reach across our entire network to PTL freight customers.",
    imgSrc: serviceImage2,
    category: "partial",
  },
  {
    id: 3,
    title: "Truckload freight",
    desc: "Our TL freight brokerage platform, “Orion”, connects shippers with fleet-owners and suppliers of truckload capacity across the country via a centralized bidding and matching engine. The Orion platform allows shippers and our teams to post their spot and long-term truckload freight requirements. Registered agents and fleet owners can then bid for these jobs via our in-house application, Axle. Subsequently, loads are matched to capacity based on price and service quality. We also acquired Roadpiper Technologies Private Limited, a digital freight broker with fleet owner, load-matching and pricing applications. This has strengthened our capability to engage with suppliers of truckload capacity.",
    imgSrc: serviceImage3,
    category: "truckload",
  },
];

export default servicesData;
