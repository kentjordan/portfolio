import BestThesisCert from "@/assets/Best_Thesis_Certificate_scan.png";
import TheMatrixCert from "@/assets/certificates/cert-1.jpg";
import CodeFestCert from "@/assets/certificates/cert-2.png";
import MLSpecializationCert from "@/assets/certificates/cert-6.png";
import LinearAlgebraCert from "@/assets/certificates/cert-7.png";
import NLPCert from "@/assets/certificates/cert-8.png";
import PahaposLogo from "@/assets/pahapos.jpg";
import StiLogo from "@/assets/sti.png";
import UslsLogo from "@/assets/usls.png";
import WrkpodLogo from "@/assets/wrkpod.png";
import type { Milestone } from "@/types/timeline";

/**
 * The timeline's entries other than projects, which it takes from the project
 * lists. The certificate dates are the ones printed on the certificates in
 * src/assets/certificates, and each certificate entry shows its certificate.
 * The timeline sorts entries by date, so order here doesn't matter.
 */
export const milestones: Milestone[] = [
    {
        id: "sti-lipa",
        kind: "education",
        title: "STI College Lipa",
        detail: "Started learning computer programming, focusing on Mobile App and Web Development.",
        date: { year: 2017 },
        image: StiLogo,
        logo: "#fff200", // the logo's yellow
    },
    {
        id: "vr-campus",
        kind: "project",
        label: "School project",
        title: "VR Campus Explorer",
        detail: "Grade 12 final project: a VR-based mobile app for exploring the STI College Lipa campus with a Bluetooth controller.",
        date: { year: 2019 },
        categories: ["Mobile App"],
    },
    {
        id: "code-fest",
        kind: "award",
        title: "1st Runner-Up, Code Fest",
        detail: "STI Tagisan ng Talino 2020 (local level), STI Academic Center Lipa",
        date: { start: "2020-02", end: "2020-02" },
        field: "others",
        image: CodeFestCert,
    },
    {
        id: "the-matrix",
        kind: "award",
        title: "3rd Prize, “The Matrix” Coding Game",
        detail: "Programming Philippines",
        date: { start: "2020-04", end: "2020-04" },
        field: "others",
        image: TheMatrixCert,
    },
    {
        id: "la-salle",
        kind: "education",
        title: "University of St. La Salle",
        detail: "Started a degree in Computer Science.",
        date: { year: 2021 },
        image: UslsLogo,
        logo: "white",
    },
    {
        id: "ml-specialization",
        kind: "certificate",
        title: "Machine Learning Specialization",
        detail: "DeepLearning.AI and Stanford University, on Coursera",
        date: { start: "2024-03", end: "2024-06" },
        field: "ml",
        image: MLSpecializationCert,
        courses: [
            { title: "Supervised Machine Learning: Regression and Classification", date: "2024-03" },
            { title: "Advanced Learning Algorithms", date: "2024-04" },
            { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", date: "2024-06" },
        ],
    },
    {
        id: "linear-algebra",
        kind: "certificate",
        title: "Linear Algebra for Machine Learning and Data Science",
        detail: "DeepLearning.AI, on Coursera",
        date: { start: "2024-08", end: "2024-08" },
        field: "math-ml-ds",
        image: LinearAlgebraCert,
    },
    {
        id: "nlp-vector-spaces",
        kind: "certificate",
        title: "Natural Language Processing with Classification and Vector Spaces",
        detail: "DeepLearning.AI, on Coursera",
        date: { start: "2024-09", end: "2024-09" },
        field: "nlp",
        image: NLPCert,
    },
    {
        id: "wrkpod",
        kind: "job",
        title: "Full-Stack Developer at Wrkpod Inc.",
        detail: "Serving US-based client Stoop Studios LLC, managing full-stack web apps with Agentic AI integration. Utilizing Claude Code for everyday tasks.",
        date: { start: "2025-12", end: "present" },
        image: WrkpodLogo,
        logo: "white",
    },
    {
        id: "pahapos",
        kind: "startup",
        title: "Pahapos",
        detail: "Co-founded a local food delivery app. Built a web app first so office mates could order their lunch through it; when it couldn't handle notifications, brought in co-founder Franz Dela Victoria to develop the app in Flutter. Recruited Michael Perry to lead operations and marketing.",
        date: { start: "2026-01", end: "2026-01" },
        links: [
            { label: "Website", href: "https://pahapos.com/" },
            { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.qsp.pahapos" },
            { label: "App Store", href: "https://apps.apple.com/us/app/pahapos/id6813884566" },
        ],
        image: PahaposLogo,
        logo: "white",
        categories: ["Web App", "Mobile App"],
    },
    {
        id: "best-thesis",
        kind: "award",
        title: "Best Thesis: LaSearch AI",
        detail: "College of Computing Studies, University of St. La Salle. Group lead, managing the team and coding the technical side of LaSearch AI: an LLM with a RAG approach that finds relevant thesis papers locally, with one-click go-to-page links to each paper.",
        date: { start: "2026-04", end: "2026-04" },
        image: BestThesisCert,
    },
];
