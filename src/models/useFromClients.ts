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
            description: "Your guide to the best of Batangas: beaches, resorts, nature trips, and festivals all year round.",
            body: "Batangas is packed with beaches, resorts, and festivals, and Go Explore puts them all in one place: destinations sorted by interest, a month-by-month festival calendar, and favorites for planning the next trip. I built the backend that powers it, from accounts and ratings to the analytics that show admins which destinations travelers love most, then took the entire platform live. The team called the finished site solid, and they passed their capstone with it.",
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
            categories: ["Web App"],
            tech: ["PostgreSQL"],
        },
        {
            id: "cliemb",
            title: "CLIEMB: Monitoring System",
            description:
                "One tap tells the campus clinic who needs help, where, and how urgently, in real time.",
            body: "In an emergency, every minute spent asking who and where is a minute lost. Built for a clinic at Batangas State University, CLIEMB lets students, professors, and staff call for help at the press of a button. The clinic's live dashboard instantly shows the severity, room and floor, equipment needed, and even a photo, so staff know how fast to move, where to go, and what to bring. I delivered all of it, from the mobile app to the clinic dashboard and the real-time backend, and the client said it exceeded their expectations.",
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
            categories: ["Web App", "Mobile App"],
            tech: ["NEXT.js", "React.js", "NestJS", "PostgreSQL", "TypeScript"],
        },
        {
            id: "ptd",
            title: "Peach Tree Designs",
            description: "A self-managed portfolio for a US level-design studio, so new work goes live without waiting on a developer.",
            body: "Peach Tree Designs crafts detailed game worlds, and their portfolio has to keep up with every new build. For this US-based studio, I built the content management system behind their site: a private admin panel where the team adds a project with its image and write-up, plus the backend that publishes it straight to their portfolio. No code, no back-and-forth with a developer, just a showcase that grows as fast as they create.",
            img_url: [PeachTreeDesigns, PeachTreeDesigns1],
            view_url: "https://www.peachtree-designs.com/",
            isOnDevelopment: true,
            categories: ["Web App"],
            tech: ["NEXT.js", "PostgreSQL"],
        }
    ]);

    return fromClient;
}

export default useFromClients;