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
            id: "FC-001",
            title: "Peach Tree Designs",
            description: "A web portfolio of the business Peach Tree Designs.",
            img_url: [PeachTreeDesigns, PeachTreeDesigns1],
            view_url: "https://www.peachtree-designs.com/",
            isOnDevelopment: true,
            tags: ["WEB", "ADMIN-PANEL", "FULLSTACK"],
        },
        {
            id: "FC-002",
            title: "Go Explore Batangas",
            description: "A web information system of places for tourists.",
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
            id: "FC-003",
            title: "CLIEMB: Monitoring System",
            description:
                "A web and app live monitoring system for a clinic in Batangas State University.",
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
            isOnDevelopment: false,
            view_url: "https://cliemb.online/",
            tags: ["WEB", "MOBILE-APP", "FULLSTACK"],
        },
    ]);

    return fromClient;
}

export default useFromClients;