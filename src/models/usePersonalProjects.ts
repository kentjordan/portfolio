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

import SA0 from "@/assets/sentiment-analysis/sent0.png"
import SA1 from "@/assets/sentiment-analysis/sent1.png"
import SA2 from "@/assets/sentiment-analysis/sent2.png"
import SA3 from "@/assets/sentiment-analysis/sent3.png"
import SA4 from "@/assets/sentiment-analysis/sent4.png"

import LRV0 from "@/assets/lr-visualizer/lr-visualizer-0.png"
import LRV1 from "@/assets/lr-visualizer/lr-visualizer-1.png"

const usePersonalProjects = () => {

    const [personalProjects, setPersonalProjects] = useState<WorkItem[]>([
        // {
        //     id: "ls-visualizer",
        //     title: "Linear Search Visualizer",
        //     description: "To visualize the linear search algorithm.",
        //     body: "This simple visualizer of the the Linear Search algorithm is written in React.js.",
        //     img_url: [LinearSearch],
        //     view_url:
        //         "https://kjordan-visualize.vercel.app/algorithms/searching/linear-search/demo",
        //     isOnDevelopment: false,
        //     date: { start: "2022-09", end: "2022-09" },
        //     categories: ["Web App"],
        //     tech: ["React.js", "TypeScript"],
        // },
        {
            id: "sent",
            title: "Sent",
            description: "Follow friends, share what's on your mind, and chat in real time, all in one clean social app.",
            body: "Sent is a social platform built around real conversations. Find people, follow them, share posts, and jump into a real-time chat where messages arrive the moment they're sent. I designed and built every layer myself, from the interface to the server and database, then launched it to real users, who signed up, followed each other, and started posting. It's proof I can take a product with live, interactive features from idea to launch on my own.",
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
            date: { start: "2023-12", end: "2024-06" },
            categories: ["Web App"],
            tech: ["NEXT.js", "TailwindCSS", "NestJS", "PostgreSQL", "TypeScript"],
        },
        {
            id: "digits-classification",
            title: "Digits Classification",
            description: "Sketch any digit from 0 to 9 and watch a neural network read your handwriting.",
            body: "No two people write a 7 the same way, which makes handwriting a classic challenge for computers. This app hands you a canvas: draw a digit, hit Guess, and a convolutional neural network trained on tens of thousands of real handwritten samples tells you what you wrote. I built it from scratch, from training the model to wiring it into a live app you can try in seconds.",
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
            date: { start: "2024-04", end: "2024-04" },
            categories: ["ML/AI"],
            tech: ["NEXT.js", "TailwindCSS", "FastAPI", "Tensorflow", "Numpy", "TypeScript", "Python"],
        },
        {
            id: "sentiment-analysis",
            title: "Sentiment Analysis",
            description: "Type any sentence and an AI model tells you whether it sounds positive or negative.",
            body: "Is that comment happy or annoyed? This app answers in a click. Type any sentence and a model trained on Sentiment140, a large dataset of real tweets, labels it positive or negative. It was my first step into Natural Language Processing, and I took it all the way, from training the model to shipping it as a live app. It's the same core idea behind tools that track customer feedback and brand sentiment at scale.",
            img_url: [
                SA0,
                SA1,
                SA2,
                SA3,
                SA4],
            view_url: "https://sentiment-analysis-kjordan.vercel.app/",
            isOnDevelopment: false,
            date: { start: "2024-07", end: "2024-07" },
            categories: ["ML/AI"],
            tech: ["NEXT.js", "TailwindCSS", "FastAPI", "PyTorch", "Pandas", "Numpy", "Jupyter", "TypeScript", "Python", "Docker"],
        },
        {
            id: "lr-visualizer",
            title: "Linear Regression Visualizer",
            description: "See machine learning in action as gradient descent fits a line to the data, one step at a time.",
            body: "Machine learning can feel like a black box, and this visualizer opens it up. Watch gradient descent nudge a regression line, step by step, until it settles on the best fit for the data, with the line's equation shown right on the chart. I created it when I was first learning ML so I could see how a model actually learns, and now it does the same for anyone who watches.",
            img_url: [
                LRV0,
                LRV1],
            view_url: "https://visualize-linear-regression.vercel.app",
            isOnDevelopment: false,
            date: { start: "2024-01", end: "2024-07" },
            categories: ["ML/AI"],
            tech: ["HTML", "TailwindCSS", "JavaScript"], // p5.js isn't in the Tech Stack section
        },
        {
            id: "covid-tracker",
            title: "COVID 19 Data Tracker",
            description: "Global case counts, vaccine progress, and trusted health answers, all in one Android app.",
            body: "During the pandemic, reliable COVID-19 information was spread across different sources. I built this Android app as a freshman to bring it together in one place: worldwide and Philippine case counts, country rankings, a vaccine tracker that follows candidates through each trial phase, and answers to common questions from the Department of Health. It's where my habit of turning scattered public data into something clear and useful began.",
            img_url: [
                COVIDTracker0,
                COVIDTracker1
            ],
            view_url: "",
            isOnDevelopment: true,
            date: { start: "2020-10", end: "2020-10" },
            categories: ["Mobile App"],
            tech: [], // Java and Android aren't in the Tech Stack section
        },
        {
            id: "kabsahi-cart",
            title: "Kabsahi Cart",
            description: "A concept ordering experience for Kabsahi that takes hungry customers from craving to checkout in a few clicks.",
            body: "Every extra step in an online order is a chance for a hungry customer to give up. This concept for Kabsahi, a restaurant serving Arabian and Filipino favorites, keeps the path short: choose delivery or pickup, browse best sellers and the full menu, save favorites, and fine-tune the cart with a running subtotal. The cart stays in sync across the whole page as you go, the kind of smooth experience that turns first orders into repeat ones.",
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
            date: { start: "2023-01", end: "2023-02" },
            categories: ["Web App"],
            tech: ["NEXT.js", "TailwindCSS", "TypeScript"],
        },
        {
            id: "calculator",
            title: "Calculator",
            description: "A distraction-free calculator that follows the order of operations, so 2 + 3 × 4 gives you 14, not 20.",
            body: "Many basic calculators work strictly left to right, so they can quietly hand you the wrong answer. This one follows MDAS, handling multiplication and division before addition and subtraction, inside a clean interface with nothing to get in your way. It runs right in the browser from a single cross-platform codebase, the same approach that lets one app ship to the web, iOS, and Android.",
            img_url: [MDASCalculator],
            view_url: "https://calc-kjordan.vercel.app/",
            isOnDevelopment: false,
            date: { start: "2021-05", end: "2021-09" },
            categories: ["Web App"],
            tech: [], // Flutter isn't in the Tech Stack section
        },
        {
            id: "bs-visualizer",
            title: "Binary Search Visualizer",
            description: "Watch binary search close in on any number by cutting the list in half at every step.",
            body: "Binary search is why finding one item among a million sorted ones takes about 20 steps instead of up to a million. This visualizer shows it in action: enter a number and follow the left, middle, and right markers as each comparison rules out half of what's left, until the target is found. It turns one of the most important ideas in computer science into something you can understand at a glance.",
            img_url: [BinarySearch],
            view_url:
                "https://kjordan-visualize.vercel.app/algorithms/searching/binary-search/demo",
            isOnDevelopment: false,
            date: { start: "2022-09", end: "2022-09" },
            categories: ["Web App"],
            tech: ["React.js", "TypeScript"],
        },
    ]);

    return personalProjects;
}

export default usePersonalProjects;