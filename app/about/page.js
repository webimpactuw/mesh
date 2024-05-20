'use client'
import { dataset } from "@/sanity/env";
import localFont from "next/font/local"
import Slider from "react-slick";
import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'


const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

export default function about() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div>
      <div className="h-8"></div>
    {/* ABOUT US */}
      <div className={fabulous.className}>
        <h1 className="text-center text-white text-2xl sm:text-3xl">About Us</h1>
      </div>

      {/* FLEX GRID - IMAGES AND WHO ARE WE*/}
      <div className="flex">
        {/* IMAGES */}
        {/* Left 1/3 image layout */}
        <div className="w-2/5 bg-black-200">
          <div className="flex-col">

            {/* Left half images */}
            <div className="w-1/2">
              {/* Full-size image */}
              <img className="h-auto w-full" src="/about images/About1.jpeg" alt="Image 1" />
            </div>

            {/* Right half images */}
            <div className="w-1/2 flex flex-col">
            <div className="bg-black-200 p-8"></div>
              {/* First half-size image */}
              <img className="h-auto w-3/4 mb-4 mx-5" src="/about images/About2.jpeg" alt="Image 2" />

              {/* Second half-size image */}
              <img className="h-auto w-full mx-5" src="/about images/About3.jpeg" alt="Image 3" />
            </div>

          </div>
        </div>

        {/* WHO ARE WE - TEXT CONTENT */}
        <div className="flex justify-end sm:pr-8 w-2/3">
          <div className="w-5/6 sm:w-4/5">
          <div className="bg-black-200 p-4 mt-5 sm:mt-20">
          {/* Green line */}
          <div className="w-1/2 h-2 bg-[#43B697]"></div>
          <div className="h-3"></div>

          <h1 className="text-left text-white text-xl sm:text-2xl md:text-3xl">Who Are We?</h1>
          <div className="h-1 sm:h-3"></div>
          <h1 className="text-left text-white font-light text-m sm:text-xl">MESH is a creative collective based at the University of Washington that centers fashion design education and exploration. </h1>
          <h1 className="text-left text-white font-light text-m sm:text-xl">We aim to foster a lively community of fashion enthusiasts through beginner-friendly workshops, highly participatory large events, and networking/experience opportunities.  </h1>
          <h1 className="text-left text-white font-light text-m sm:text-xl">Our headline event is an annual, student-run fashion show! </h1>
          </div>
          </div>
        </div>
      </div>
      <div className="h-8 sm: h-16"></div>

      {/* BOARD MEMBERS SLIDER */}
      <div className = "latest-events">
        <div className={fabulous.className}>
          <h1 className="text-center text-white text-2xl sm:text-3xl mt-8 sm:mt-10">Board Members</h1>
        </div>

        <div className="w-3/4 m-auto">
          <div>
            <Slider {...settings}>
            {members.map((d) => (
              <div className = "mt-2 sm:mt-8 flex">

                {/* Headshot */}
                <div className = "mt-1 justify-end flex headshot">
                  <div className="w-1 h-20 sm:h-44 sm:w-2 bg-[#43B697]"></div>
                  <div className="w-1 h-20 sm:h-44 sm:w-2 bg-[#282828]"></div>
                  {/* Image */}
                  <img src={d.img} alt="" className="h-20 w-20 sm:h-44 sm:w-44 border border-white"/>
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
          </div>
        </div>

      </div>
      <div className="h-8 sm: h-16"></div>

      {/* FAQS section */}
      <div className={fabulous.className}>
        <h1 className="text-center text-white text-2xl sm:text-3xl">FAQs</h1>
      </div>

      {/* SINGLE COLUMN FAQS */}
      <div className = "wrapper">
          <div className = "accordian">
            
              {questions.map((item, i) => (
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
      /* 
      <div className="flex">
        <div className = "flex left-wrapper">
          <div className = "accordian">
            
              {left_questions.map((item, i) => (
                <div className="item">
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

        <div className = "flex right-wrapper">
          <div className = "accordian">
            
              {right_questions.map((item, i) => (
                <div className="item">
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
        */
  );
}

{/* BOARD MEMBERS AND HEADSHOTS */}
const members = [
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

{/* FAQS AND ANSWERS */}
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

{/* LEFT COLUMN QUESTIONS - NOT USED */}
const left_questions = [
  {
    question: 'Does Mesh have office hours?',
    answer: 'Yes. Come to MESH Office Hours every Friday 5-7PM in the MILL!',
  },
  {
    question: 'How competitive is it to get into Mesh?',
    answer: 'Answer to Question 3.',
  },
];

{/* RIGHT COLUMN QUESTIONS - NOT USED */}
const right_questions = [
  {
    question: 'When’s the quarterly meeting?',
    answer: 'Answer to Question 2.',
  },
  {
    question: 'Where can I find the application form?',
    answer: 'Answer to Question 4.',
  }
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
