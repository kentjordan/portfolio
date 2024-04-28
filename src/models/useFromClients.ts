import { useState } from "react";
import PeachTreeDesigns from "@/assets/ptd.png";
import PeachTreeDesigns1 from "@/assets/ptd1.jpg";
import GoExploreBatangas from "@/assets/goexplore.png";
import GoExploreBatangas1 from "@/assets/goexplore1.png";
import GoExploreBatangas2 from "@/assets/goexplore2.png";
import GoExploreBatangas3 from "@/assets/goexplore3.png";
import GoExploreBatangas4 from "@/assets/goexplore4.png";
import GoExploreBatangas5 from "@/assets/goexplore5.png";
import GoExploreBatangas6 from "@/assets/goexplore6.png";
import Cliemb from "@/assets/cliemb.png";
import Cliemb1 from "@/assets/cliemb1.png";
import Cliemb2 from "@/assets/cliemb2.png";
import Cliemb3 from "@/assets/cliemb3.png";
import Cliemb5 from "@/assets/cliemb5.png";
import Cliemb6 from "@/assets/cliemb6.png";
import Cliemb7 from "@/assets/cliemb7.png";
import Cliemb8 from "@/assets/cliemb8.png";

import { WorkItem } from "@/types/works";

const useFromClients = () => {
    const [fromClient, setFromClient] = useState<WorkItem[]>([
        {
            id: "go-explore",
            title: "Go Explore Batangas",
            tech_stack: ["Express.JS (API)", "PostgreSQL", "Hostinger VPS"],
            description: "A web information system of places for tourists in Batangas.",
            body: "In this client project, I was tasked to develop their backend API using Express.js and the deployment of the frontend website and backend API.",
            img_url: [
                GoExploreBatangas,
                GoExploreBatangas5,
                GoExploreBatangas6,
                GoExploreBatangas1,
                GoExploreBatangas2,
                GoExploreBatangas3,
                GoExploreBatangas4,
            ],
            isOnDevelopment: true,
            view_url: "https://www.goexplorebatangas.com/",
            tags: ["WEB", "BACKEND-DEV"],
        },
        {
            id: "cliemb",
            title: "CLIEMB: Monitoring System",
            tech_stack: ["NEXT.js", "React.js", "Nest.JS (API)", "PostgreSQL", "Hostinger VPS"],
            description:
                "A web and app live monitoring system for a clinic in Batangas State University.",
            body: "In this project, I was tasked to develop their website, app, and API in which the two frontends communicates. I used NEXT.js with React for the Website, Expo React Native for the Mobile App, and NestJS for the API. The API has real-time communication through SocketIO which is used in real-time notification in monitoring of this Website. All of the technologies that were used here are written in Typescript.",
            img_url: [
                Cliemb,
                Cliemb1,
                Cliemb8,
                Cliemb7,
                Cliemb2,
                Cliemb3,
                Cliemb5,
                Cliemb6,
            ],
            isOnDevelopment: true,
            view_url: "https://cliemb.online/",
            tags: ["WEB", "MOBILE-APP", "FULLSTACK"],
        },
        {
            id: "ptd",
            title: "Peach Tree Designs",
            tech_stack: ["NEXT.js", "Express.js (API)", "PostgreSQL"],
            description: "A web portfolio of the business Peach Tree Designs.",
            body: "In this project, the client is from the USA, I was tasked to develop the Content Management Website and the backend API of it. I used NEXT.js for the website and Express.js for the API.",
            img_url: [PeachTreeDesigns, PeachTreeDesigns1],
            view_url: "https://www.peachtree-designs.com/",
            isOnDevelopment: true,
            tags: ["WEB", "ADMIN-PANEL", "FULLSTACK"],
        },
        {
            id: "go-explore",
            title: "Go Explore Batangas",
            tech_stack: ["Express.JS (API)", "PostgreSQL", "Hostinger VPS"],
            description: "A web information system of places for tourists in Batangas.",
            body: "In this client project, I was tasked to develop their backend API using Express.js and the deployment of the frontend website and backend API.",
            img_url: [
                GoExploreBatangas,
                GoExploreBatangas5,
                GoExploreBatangas6,
                GoExploreBatangas1,
                GoExploreBatangas2,
                GoExploreBatangas3,
                GoExploreBatangas4,
            ],
            isOnDevelopment: true,
            view_url: "https://www.goexplorebatangas.com/",
            tags: ["WEB", "BACKEND-DEV"],
        },
        {
            id: "cliemb",
            title: "CLIEMB: Monitoring System",
            tech_stack: ["NEXT.js", "React.js", "Nest.JS (API)", "PostgreSQL", "Hostinger VPS"],
            description:
                "A web and app live monitoring system for a clinic in Batangas State University.",
            body: "In this project, I was tasked to develop their website, app, and API in which the two frontends communicates. I used NEXT.js with React for the Website, Expo React Native for the Mobile App, and NestJS for the API. The API has real-time communication through SocketIO which is used in real-time notification in monitoring of this Website. All of the technologies that were used here are written in Typescript.",
            img_url: [
                Cliemb,
                Cliemb1,
                Cliemb8,
                Cliemb7,
                Cliemb2,
                Cliemb3,
                Cliemb5,
                Cliemb6,
            ],
            isOnDevelopment: true,
            view_url: "https://cliemb.online/",
            tags: ["WEB", "MOBILE-APP", "FULLSTACK"],
        },
        {
            id: "ptd",
            title: "Peach Tree Designs",
            tech_stack: ["NEXT.js", "Express.js (API)", "PostgreSQL"],
            description: "A web portfolio of the business Peach Tree Designs.",
            body: "In this project, the client is from the USA, I was tasked to develop the Content Management Website and the backend API of it. I used NEXT.js for the website and Express.js for the API.",
            img_url: [PeachTreeDesigns, PeachTreeDesigns1],
            view_url: "https://www.peachtree-designs.com/",
            isOnDevelopment: true,
            tags: ["WEB", "ADMIN-PANEL", "FULLSTACK"],
        }
    ]);

    return fromClient;
}

export default useFromClients;