import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from "./components/Card";
import Nav from "./components/Nav";
import { useState } from 'react';
const App = () => {

 

const datas = [
  {
    id : 1,
    img : "https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg",
    topic: "Best Full stack Development project ideas in 2024",
    author : "Isha Sharma",
    date : "25 Mar, 2024",
    Content : "Full Stack Development"
  },
  {
    id:2 ,
    img : "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
    topic : "How long would it take to be a Full Stack Developer",
    author:"Meghana D",
    date : "24 Mar, 2024",
    Content : "Full Stack Development"
  },
  {
    id:3,
    img : "https://intellipaat.com/blog/wp-content/uploads/2023/06/Roadmap-for-a-Career-in-Web-Development.png",
    topic : "Best Web Develoment Roadmap for Beginners 2024",
    author:"Isha Sharma",
    date : "18 dec, 2023",
    Content : "Full Stack Development"

  },
  {
    id :4,
    img :  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201204214338/What-are-the-Roles-and-Responsibilities-of-a-Data-Scientist.png",
    topic : "Roles and Responsibilites of a Data Scientist",
    author:"Jaishree Tomar",
    date : "20 Oct,2023",
    Content : "Data Science"
  },
  {
    id:5,
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
    topic : "12 Real world Data Science Examples: Power of Data Science",
    author : "Lokesh S",
    date : "25 Mar, 2024",
    Content: "Data Science"
  },
  {
    id:6,
    img : "https://media.geeksforgeeks.org/wp-content/uploads/20240112105103/How-to-Switch-from-Mechanical-Engineering-to-Data-Science.webp",
    topic : "How to become a Data Scientist after Mechanical Engineering",
    author: "Niharika  Kumari",
    date : "19 Aug,  2023",
    Content: "Data Science"
  },
  {
    id:7,
    img : "https://i.ytimg.com/vi/UYcn45gxgOU/maxresdefault.jpg",
    topic : "Cyber Security Vs Ethical Hacking:Top 10 Differences",
    author: "Tushar Lockie",
    date :"15 May , 2023 ",
    Content : "CyberSecurity"
  },
  {
    id:8,
    img :"https://www.dailyhostnews.com/wp-content/uploads/2023/12/Top-APAC-cyber-threats.png",
    topic:"Top 7 Cyber Security attacks in real life",
    author:"monish nandhan",
    date:"22 June, 2023",
    Content:"CyberSecurity"
  },
  {
    id : 9,
    img: "https://i.ytimg.com/vi/ID3_gbiXIUc/maxresdefault.jpg",
    topic: "Is Coding Required for cybersecurity? If yes, How crucial is coding for cybersecurity",
    author:  "Rahul Sharma",
    date: "10 July, 2023",
    Content: "CyberSecurity"
  },
  {
    id:10,
    img:"data:image/jpeg;base64,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",
    topic:"Data Science vs Data Analytics Which is the better Career Choice",
    author:"Soumya Bose",
    date:"25 Feb, 2023",
    Content: "Career"
  },
  {
    id:11,
    img:"https://qph.cf2.quoracdn.net/main-qimg-b66fe2f23d6060e1e8beb297a4d6993a-pjlq",
    topic:"As a Software Engineer, How do I shift my Career to DevOps",
    author:"Lahari Chandana",
    date:"16 Jul, 2023",
    Content: "Career"
  },
  {
    id:12,
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Featured-Image-The-Essential-Skills-for-a-Successful-Automation-Tester.webp",
    topic:"Eight Essential Skills Required to have  a successful career as a Automation Tester",
    author:"Jethan Patel",
    date: "04 Aug, 2023",
    Content: "Career"
  }
  
]



const [selectedCategory, setSelectedCategory] = useState(null);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
};

// Filter data based on selected category
const filteredData = selectedCategory ? datas.filter(data => data.Content === selectedCategory) : datas;

return (
  <Router>
    <div>
      <Nav onCategoryClick={handleCategoryClick} />
      
      <Routes>
        {/* Route to display all cards */}
        <Route path="/" element={<Card datas={datas} />} />
        {/* Route to display cards based on selected category */}
        <Route path="/:category" element={<Card datas={filteredData} />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;