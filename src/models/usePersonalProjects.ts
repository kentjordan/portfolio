import { useState } from "react";
import MDASCalculator from "@/assets/mdas_calculator.png";
import Kabhsahi1 from "@/assets/kabsahi1.png";
import Kabhsahi2 from "@/assets/kabsahi2.png";
import Kabhsahi3 from "@/assets/kabsahi3.png";
import Kabhsahi4 from "@/assets/kabsahi4.png";
import Kabhsahi5 from "@/assets/kabsahi5.png";
import Kabhsahi6 from "@/assets/kabsahi6.png";
import BinarySearch from "@/assets/binary_search.png";
import LinearSearch from "@/assets/linear_search.png";
import { WorkItem } from "@/types/works";

import Sent1 from "@/assets/sent/1.png"
import Sent2 from "@/assets/sent/2.png"
import Sent3 from "@/assets/sent/3.png"
import Sent4 from "@/assets/sent/4.png"
import Sent5 from "@/assets/sent/5.png"
import Sent6 from "@/assets/sent/6.png"
import Sent7 from "@/assets/sent/7.png"
import Sent8 from "@/assets/sent/8.png"
import Sent9 from "@/assets/sent/9.png"
import Sent10 from "@/assets/sent/10.png"
import Sent11 from "@/assets/sent/11.png"
import Sent12 from "@/assets/sent/12.png"

import COVIDTracker0 from "@/assets/covidtracker/0.png";
import COVIDTracker1 from "@/assets/covidtracker/1.png";

import DC0 from "@/assets/digits-classification/0.png"
import DC1 from "@/assets/digits-classification/1.png"
import DC2 from "@/assets/digits-classification/2.png"
import DC3 from "@/assets/digits-classification/3.png"
import DC4 from "@/assets/digits-classification/4.png"
import DC5 from "@/assets/digits-classification/5.png"
import DC6 from "@/assets/digits-classification/6.png"
import DC7 from "@/assets/digits-classification/7.png"
import DC8 from "@/assets/digits-classification/8.png"
import DC9 from "@/assets/digits-classification/9.png"

const usePersonalProjects = () => {

    const [personalProjects, setPersonalProjects] = useState<WorkItem[]>([
        // {
        //     id: "ls-visualizer",
        //     title: "Linear Search Visualizer",
        //     tech_stack: ["React.js"],
        //     description: "To visualize the linear search algorithm.",
        //     body: "This simple visualizer of the the Linear Search algorithm is written in React.js.",
        //     img_url: [LinearSearch],
        //     view_url:
        //         "https://kjordan-visualize.vercel.app/algorithms/searching/linear-search/demo",
        //     isOnDevelopment: false,
        //     tags: ["REACT.JS"],
        // },
        {
            id: "sent",
            title: "Sent",
            description: "A social media platform with a real-time messaging system.",
            body: "In building of this personal project, I used NEXT.js and TailwindCSS in the frontend while in the backend I used NestJS and PostgreSQL.",
            tech_stack: ["NEXT.js", "PostgreSQL", "NestJS"],
            img_url: [
                Sent1,
                Sent2,
                Sent3,
                Sent4,
                Sent5,
                Sent6,
                Sent7,
                Sent8,
                Sent9,
                Sent10,
                Sent11,
                Sent12,
            ],
            view_url: "https://sent-beta.vercel.app/",
            isOnDevelopment: false,
            tags: ["NEXT.JS", "POSTGRE-SQL", "NEST.JS"],
        },
        {
            id: "digits-classification",
            title: "Digits Classification",
            description: "0-9 digits classification built on top of CNN and Tensorflow.",
            body: "My first entry for Digits Classification on top of Convolutional Neural Network. Built from scratch with NEXT.js, FastAPI, and Tensorflow. The model was trained on MNIST dataset.",
            tech_stack: ["NEXT.js", "Tensorflow", "FastAPI"],
            img_url: [
                DC5,
                DC0,
                DC1,
                DC2,
                DC3,
                DC4,
                DC6,
                DC7,
                DC8,
                DC9,
            ],
            view_url: "https://digits-classification.vercel.app/",
            isOnDevelopment: false,
            tags: ["NEXT.JS", "TENSORFLOW", "FASTAPI"],
        },
        {
            id: "covid-tracker",
            title: "COVID 19 Data Tracker",
            tech_stack: ["Native Android", "Java"],
            description: "Data tracker for COVID 19 made in Android Studio and Java.",
            body: "A simple COVID 19 Data Tracker made in Android Studio when I was freshmen. I used Java as the main programming language and an API for COVID 19 data.",
            img_url: [
                COVIDTracker0,
                COVIDTracker1
            ],
            view_url: "",
            isOnDevelopment: true,
            tags: ["JAVA", "NATIVE ANDROID"],
        },
        {
            id: "kabsahi-cart",
            title: "Kabsahi Cart",
            description: "A Cart System for an eCommerce supposedly for Kabsahi.",
            body: "In building of this personal project, I used React.js, and Redux Tookit as the state management.",
            tech_stack: ["React.js", "Redux Toolkit"],
            img_url: [
                Kabhsahi1,
                Kabhsahi2,
                Kabhsahi3,
                Kabhsahi4,
                Kabhsahi5,
                Kabhsahi6,
            ],
            view_url: "https://kabsahi-devlopment.vercel.app/",
            isOnDevelopment: false,
            tags: ["REACT.JS"],
        },
        {
            id: "calculator",
            title: "Calculator",
            tech_stack: ["Flutter Web"],
            description: "An MDAS calculator based on flutter web.",
            body: "This simple calculator is written in Flutter which uses Dart programming language.",
            img_url: [MDASCalculator],
            view_url: "https://calc-kjordan.vercel.app/",
            isOnDevelopment: false,
            tags: ["FLUTTER WEB"],
        },
        {
            id: "bs-visualizer",
            title: "Binary Search Visualizer",
            tech_stack: ["React.js"],
            description: "To visualize the binary search algorithm.",
            body: "This simple visualizer of the the Binary Search algorithm is written in React.js.",
            img_url: [BinarySearch],
            view_url:
                "https://kjordan-visualize.vercel.app/algorithms/searching/binary-search/demo",
            isOnDevelopment: false,
            tags: ["REACT.JS"],
        },
    ]);

    return personalProjects;
}

export default usePersonalProjects;