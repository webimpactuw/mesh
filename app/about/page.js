'use client'
import localFont from "next/font/local"
import Slider from "react-slick";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

// MEMBERS SANITY FUNCTIONS
async function getMembers() {

  const query = `*[_type == "members"] {
    name,
    title,
    class,
    major,
    image,
    altText,
    date
  }`

  const members = await client.fetch(query)
  return members;
}

function BoardMembersBlock() {
  const [members, setMembers] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  useEffect(() => {
      async function fetchMembers() {
          const fetchedMembers = await getMembers();
          //fetchedMembers.sort((a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime());
          setMembers(fetchedMembers);
      }

      fetchMembers();
  }, []);

  const sortedMembers = [...members].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <Slider {...settings}>
      {sortedMembers.map((d) => (
        <div className = "mt-2 sm:mt-8 flex">

          {/* Headshot */}
          <div className = "mt-1 justify-end flex headshot">
            <div className="w-1 h-20 sm:h-44 sm:w-2 bg-[#43B697]"></div>
            <div className="w-1 h-20 sm:h-44 sm:w-2 bg-[#282828]"></div>
            {/* Image */}
            <img src={urlForImage(d.image)} alt={d.altText} className="h-20 w-20 sm:h-44 sm:w-44 border border-white"/>
          </div>

          {/* Board Member Information */}
          <div className = "flex member-info text-white">
            <div className = "sm:mt-5 flex flex-col items-center">
            <h1 className="sm:text-xl md:text-2xl">{d.name}</h1>
              <div className="w-auto sm:h-3 bg-[#282828]"></div>
              <h1 className="text-base sm:text-xl font-light">{d.title}</h1>
              <h1 className="text-base sm:text-xl font-light">{d.class}</h1>
              <h1 className="text-base sm:text-xl font-light">{d.major}</h1>
              <div className="w-auto h-8 sm:h-20 bg-[#282828]"></div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// QUESTIONS SANITY FUNCTIONS
async function getQuestions() {

  const query = `*[_type == "questions"] {
    question,
    answer,
    date
  }`

  const questions = await client.fetch(query)
  return questions;
}

function QuestionsBlock() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  useEffect(() => {
      async function fetchQuestions() {
          const fetchedQuestions = await getQuestions();
          //fetchedQuestions.sort((a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime());
          setQuestions(fetchedQuestions);
      }

      fetchQuestions();
  }, []);

  const sortedQuestions = [...questions].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      <div className = "wrapper">
          <div className = "accordian">
            
              {sortedQuestions.map((item, i) => (
                <div className="item mt-3">
                  <div className = "title" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>

                  <div className = {selected === i ? 'content-show font-light' : 'content'}>
                      {item.answer}
                  </div>
                </div>
              ))}

          </div>
        </div>
        <div className="h-10"></div>
    </div>
  );
}

export default function about() {

  return (
    <div>
      <div className="h-8"></div>
    {/* ABOUT US */}
      <div className={fabulous.className}>
        <h1 className="text-center text-white text-2xl sm:text-4xl">About Us</h1>
      </div>

      {/* FLEX GRID - IMAGES AND WHO ARE WE*/}
      <div className="flex">
        {/* IMAGES */}
        {/* Left 1/3 image layout */}
        <div className="w-2/5 bg-black-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">

            {/* Full size image */}
            <img className="w-3/4 h-auto sm:w-full ml-2 mt-8" src="/about images/About1.jpeg" alt="Image 1" />

            <div className="flex-col">
            <div className="bg-black-200"></div>
              {/* First half-size image */}
              <div className="bg-black-200 mb-4 sm:h-20"></div>
              <img className="h-auto w-3/4 ml-2 mb-4 sm:mx-5" src="/about images/About2.jpeg" alt="Image 2" />

              {/* Second half-size image */}
              <img className="w-3/4 h-auto ml-2 sm:w-full sm:mx-5" src="/about images/About3.jpeg" alt="Image 3" />
            </div>

          </div>
        </div>

        {/* WHO ARE WE - TEXT CONTENT */}
        <div className="flex justify-center pr-5 sm:pr-8 w-2/3">
          <div className="sm:w-4/5">
          <div className="bg-black-200 p-4 mt-5 sm:mt-20">
          {/* Green line */}
          <div className="w-1/2 h-2 bg-[#43B697]"></div>
          <div className="h-3"></div>
          {/* Who Are We text info */}
          <h1 className="text-left text-white text-xl sm:text-2xl md:text-3xl">Who Are We?</h1>
          <div className="h-1 sm:h-3"></div>
          <h1 className="text-left text-white font-light text-m sm:text-xl lg:text-2xl">MESH is a creative collective based at the University of Washington that centers fashion design education and exploration. </h1>
          <h1 className="text-left text-white font-light text-m sm:text-xl lg:text-2xl">We aim to foster a lively community of fashion enthusiasts through beginner-friendly workshops, highly participatory large events, and networking/experience opportunities.  </h1>
          <h1 className="text-left text-white font-light text-m sm:text-xl lg:text-2xl">Our headline event is an annual, student-run fashion show! </h1>
          </div>
          </div>
        </div>
      </div>
      <div className="h-8 sm:h-16"></div>

      {/* BOARD MEMBERS SLIDER */}
      <div className = "latest-events">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-2xl sm:text-3xl mt-8 sm:mt-10">Board Members</h1>
        </div>

        <div className="w-3/4 m-auto">
          <div>
            <BoardMembersBlock />
          </div>
        </div>

      </div>
      <div className="h-8 sm:h-16"></div>

      {/* FAQS section */}
      <div className={fabulous.className}>
        <h1 className="text-center text-white text-2xl sm:text-3xl">FAQs</h1>
      </div>

      {/* SINGLE COLUMN FAQS */}
      <QuestionsBlock />
      </div>
  );
}

{/* NOT USED - BOARD MEMBERS AND HEADSHOTS */}
const membersmap = [
  {
      name: 'Amy (she/they)',
      title: 'President',
      class: 'Junior',
      major: 'Informatics/Art(IVA)',
      img: "/about images/Board1.png",
  },
  {
      name: '2First (pronouns)',
      title: 'Title',
      class: 'Class',
      major: 'Major',
      img: "/about images/Board2.png",
  },
  {
    name: '3First (pronouns)',
    title: 'Title',
    class: 'Class',
    major: 'Major',
    img: "/about images/Board3.png",
  },
  {
    name: '4First (pronouns)',
    title: 'Title',
    class: 'Class',
    major: 'Major',
    img: "/about images/Board4.png",
  },
  {
    name: '5First (pronouns)',
    title: 'Title',
    class: 'Class',
    major: 'Major',
    img: "/about images/Board5.png",
},
];

{/* CUSTOM ARROWS */}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray-200" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray-200" }}
      onClick={onClick}
    />
  );
}

{/* NOT USED - FAQS AND ANSWERS */}
const questions = [
  {
    question: 'What does MESH do?',
    answer: 'We host workshops (especially for beginners!), general meetings, a Winter quarter expo, and a Spring quarter signature fashion show.',
  },
  {
    question: 'Who can be in MESH? How do I officially join?',
    answer: 'MESH is open to everyone! Anyone can be part of MESH if they identify as such and come to some of our events. However, as we are a UW RSO, our activities are aimed primarily at UW students. General participation is open, but our teams are by application.',
  },
  {
    question: 'Does MESH have office hours?',
    answer: 'Yes. Come to MESH Office Hours every Friday 5-7PM in the MILL!',
  },
  {
    question: 'What are the MESH teams?',
    answer: 'Current yearlong teams: media (photography & videography) and creative. Current event-specific teams: set design, BTS (behind the scenes), modeling, and designing.',
  },
  {
    question: 'Where can I find the application form to join a MESH team?',
    answer: 'Team applications are open throughout the year and are announced on Instagram and Discord.',
  },
  {
    question: 'What is it like being on a MESH team?',
    answer: 'Most of our teams focus on big events, but also lend a hand with day-to-day operations. All of our teams require an application; most are open to all skill levels (seriously, please apply no matter your background!) but some like the media team do require previous experience. All of our team members are volunteers.'
  }
];



