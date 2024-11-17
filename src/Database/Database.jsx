

import dz_ride_banner from "../assets/projects/dz_ride/logo.png";
import o3_dispatch_banner from "../assets/projects/o3_dispatch/logo.png";

import hookflix_banner from "../assets/projects/Hookflix/logo.PNG";
// import hookflix_img1 from "../assets/projects/Hookflix/landing_page.PNG";
// import hookflix_img2 from "../assets/projects/Hookflix/movie_details.PNG";
// import hookflix_img3 from "../assets/projects/Hookflix/movie_list.PNG";

import loungedb_banner from "../assets/projects/Lounge_db/Home.png";
// import loungedb_img2 from "../assets/projects/Lounge_db/img2.png";

import db_store_banner from "../assets/projects/db_store/logo.png";

import delightsome_website_banner from "../assets/projects/delightsome_website/tr_logo.png";
import delightsome_software_banner from "../assets/projects/delightsome_website/logo_app.jpg";

import heritage_soft_banner from "../assets/projects/Heritage_soft/banner.jpg";
import heritage_soft_img1 from "../assets/projects/Heritage_soft/img1.PNG";
import heritage_soft_img2 from "../assets/projects/Heritage_soft/img2.PNG";
import heritage_soft_img3 from "../assets/projects/Heritage_soft/img3.PNG";
import heritage_soft_img4 from "../assets/projects/Heritage_soft/img4.PNG";
import heritage_soft_img5 from "../assets/projects/Heritage_soft/img5.PNG";
import heritage_soft_img6 from "../assets/projects/Heritage_soft/img6.PNG";

import dz_poker_hub_banner from "../assets/projects/dz_poker_hub/backImage.jpg";

import dz_sports_hub_banner from "../assets/projects/dz_sports_hub/banner.png";

export const projects = [
  {
    id: 1,
    name: "Dz Ride",
    desc: "Dz Ride is a convenient taxi booking app that connects users with local drivers for reliable, on-demand rides. With easy-to-use features, it allows passengers to book, track, and pay for rides seamlessly, providing a fast and efficient transportation solution.",
    image: dz_ride_banner,
    tags: ["Flutter", "Firebase", "Google Maps SDK"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 2,
    name: "O3 Dispatch",
    desc: "O3 Dispatch is a user-friendly food ordering app that connects users to their favorite local restaurants for quick and reliable delivery. It offers an easy way to browse menus, place orders, and enjoy fast service, bringing delicious meals straight to the user's door.",
    image: o3_dispatch_banner,
    tags: ["Flutter", "Firebase", "Google Maps SDK"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 4,
    name: "DB Store",
    desc: "DB Store is a Windows and web-based POS application tailored for small businesses, offering an efficient way to manage sales operations. It provides essential tools for tracking transactions, organizing inventory, and enhancing the overall sales process, making business management smoother and more effective.",
    image: db_store_banner,
    tags: ["Flutter", "Firebase"],
    // demo_link: "https://medium-swart-seven.vercel.app/",
    github_link: "https://github.com/AdelooyeJoshua/DB-Store",
  },
  {
    id: 3,
    name: "Lounge DB",
    desc: "Lounge DB is a versatile, cross-platform software solution designed for hotels, bars, restaurants, and lounges to streamline inventory management, sales, and organization. It simplifies operations, making it easy for establishments to keep track of stock, manage orders, and optimize their workflow.",
    image: loungedb_banner,
    tags: ["Flutter", "Firebase"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 8,
    name: "Hookflix",
    desc: "Hookflix is an online movie streaming app that provides users with a diverse selection of films to watch on demand, similar to Netflix. It includes an admin section for easy video uploading and management, making content organization seamless for administrators.",
    image: hookflix_banner,
    tags: ["Flutter", "Firebase"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 5,
    name: "Delightsome Software [PRIVATE]",
    desc: "Delightsome Software is a custom-built solution designed for a juice and smoothie production company. Featuring a local server and database, it optimizes workflows by managing inventory, recording production and sales, and providing sales analysis, making operations efficient and organized.",
    image: delightsome_software_banner,
    tags: ["Flutter", "Node.js", "JavaScript", "Dart", "MongoDB"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 6,
    name: "Delightsome Website [PRIVATE]",
    desc: "Delightsome Website is the ultimate online platform for juice and smoothie lovers. Designed for convenience and freshness, this user-friendly website enables customers to effortlessly browse a wide range of freshly made juices and smoothies, customize their orders, and have them delivered straight to their doorsteps. Whether you’re looking for a refreshing fruit blend or a nutrient-packed smoothie, Delightsome Website makes it easy to enjoy healthy, delicious beverages with just a few clicks. With a seamless ordering experience, reliable delivery, and top-quality ingredients, Delightsome Website is your go-to solution for satisfying your thirst for fresh, vibrant drinks—anytime, anywhere.",
    image: delightsome_website_banner,
    tags: ["React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
  {
    id: 7,
    name: "Heritage Fitness Software [PRIVATE]",
    desc: "Heritage Fitness Software is an intuitive, all-in-one platform designed to optimize operations for fitness organizations, health clinics, and wellness centers. It provides real-time updates to efficiently manage client and staff data, track attendance, and monitor performance. Key features include a digital attendance system, a clinic management module for secure, paperless patient file handling, and tools for tracking doctor progress. This comprehensive solution streamlines workflows, reduces errors, and enhances productivity, improving service delivery for both clients and healthcare professionals.",
    image: heritage_soft_banner,
    tags: ["Flutter", "Node.js", "JavaScript", "Dart", "MongoDB", "Firebase"],
    // demo_link: "",
    // github_link: "",
    images: [heritage_soft_img1, heritage_soft_img2, heritage_soft_img3, heritage_soft_img4, heritage_soft_img5, heritage_soft_img6],
  },
  {
    id: 10,
    name: "Dz Poker Hub",
    desc: "Dz Poker Hub is an exciting digital poker platform that allows users to deposit funds and play poker in real-time against other players. With a seamless, user-friendly interface, players can manage their balances and engage in live poker games, using their software balance to place bets and participate in various poker games. The platform also features a dedicated Dealer Section, where the dealer can manage and control the flow of the game, ensuring smooth gameplay and fair dealing for all participants. Dz Poker Hub combines the thrill of poker with the convenience of digital play, offering a dynamic and secure environment for poker enthusiasts.",
    image: dz_poker_hub_banner,
    tags: ["Flutter", "Firebase"],
    // demo_link: "",
    // github_link: "",
    images: [],
  }, 
  {
    id: 11,
    name: "Dz Sports Hub",
    desc: "Dz Sports Hub is a comprehensive sports results platform designed specifically for schools. It allows students, faculty, and staff to easily access information about the school’s sports programs, view upcoming events, and track results from various sporting activities. With a user-friendly interface, Dz Sports Hub keeps everyone up-to-date on game schedules, results, and achievements, fostering a stronger sense of community and school spirit. Whether you're looking to follow a particular team, check event dates, or see how your favorite sports are performing, Dz Sports Hub makes it simple to stay informed and engaged with all the athletic activities at your school.",
    image: dz_sports_hub_banner,
    tags: ["Flutter", "Firebase", "Node.js", "JavaScript", "Dart"],
    // demo_link: "",
    // github_link: "",
    images: [],
  },
];
