import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from "./components/Card";
import Nav from "./components/Nav";
import { useState } from 'react';
const App = () => {

 

const datas = [
  {
    id : 1,
    img : "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
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
    img : "https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
    topic : "Best Web Develoment Roadmap for Beginners 2024",
    author:"Isha Sharma",
    date : "18 dec, 2023",
    Content : "Full Stack Development"

  },
  {
    id :4,
    img :  "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png",
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
    img : "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
    topic : "How to become a Data Scientist after Mechanical Engineering",
    author: "Niharika  Kumari",
    date : "19 Aug,  2023",
    Content: "Data Science"
  },
  {
    id:7,
    img : "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
    topic : "Cyber Security Vs Ethical Hacking:Top 10 Differences",
    author: "Tushar Lockie",
    date :"15 May , 2023 ",
    Content : "CyberSecurity"
  },
  {
    id:8,
    img :"https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-1536x480.jpg",
    topic:"Top 7 Cyber Security attacks in real life",
    author:"monish nandhan",
    date:"22 June, 2023",
    Content:"CyberSecurity"
  },
  {
    id : 9,
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    topic: "Is Coding Required for cybersecurity? If yes, How crucial is coding for cybersecurity",
    author:  "Rahul Sharma",
    date: "10 July, 2023",
    Content: "CyberSecurity"
  },
  {
    id:10,
    img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-1536x768.png",
    topic:"Data Science vs Data Analytics Which is the better Career Choice",
    author:"Soumya Bose",
    date:"25 Feb, 2023",
    Content: "Career"
  },
  {
    id:11,
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-1536x1182.jpg",
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