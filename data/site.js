// ALL SITE CONTENT LIVES HERE. Edit this file; no need to touch the components.

export const profile = {
  name: ["Nada", "Ghonemy"],
  role: "Multimedia journalist and video producer",
  intro:
    "Documentaries, reports and digital stories about real people, told with a camera, a notebook and a lot of listening.",
  email: "nada.amr12594@gmail.com",
  phone: "+20 115 118 7551",
  location: "Cairo, Egypt",
  photo: "", // e.g. "/nada.jpg" after you put the file in /public
  bio: [
    "Nada Ghonemy is a multimedia journalist and video producer based in Cairo, with more than ten years of experience creating digital video, written stories, documentaries and features for established media organizations.",
    "She works across the whole production process: story development, reporting, interviewing, filming, photography, editing and publishing. Her focus is human-interest storytelling and field reporting, and she has led visual teams and managed digital projects.",
  ],
  facts: [
    ["Based in", "Cairo, Egypt"],
    ["Languages", "Arabic (native), English (fluent), French (amateur)"],
    ["Tools", "Final Cut Pro, Premiere Pro, Procreate"],
    ["Education", "B.A. Journalism, Cairo University"],
  ],
};

export const stats = [
  ["10+", "years of experience"],
  ["5", "newsrooms and organizations"],
  ["3", "languages"],
];

export const outlets = [
  "National Reading Program", "Al-Hurra", "Masrawy", "Daily News Egypt", "Al-Masry Al-Youm", "ARIJ",
];

// Work grid. Add `video` (YouTube ID) to play inside the site, or `url` for an outside link.
// Categories used by the filter: "Documentary", "Digital stories", "Video".
export const work = [
  { title: "Video 1", category: "Video", video: "4mWAdQxU1GA", text: "Replace with the film's title and a one-line description." },
  { title: "Video 2", category: "Video", video: "9VvE3v1vzQU", text: "Replace with the film's title and a one-line description." },
  { title: "Video 3", category: "Video", video: "cxarmwt5c6M", text: "Replace with the film's title and a one-line description." },
  { title: "Video 4", category: "Video", video: "rD6Vxm3dR1c", text: "Replace with the film's title and a one-line description." },
  { title: "Video 5", category: "Video", video: "d9txS2mOcbE", text: "Replace with the film's title and a one-line description." },
  { title: "Video 6", category: "Video", video: "UTiHuXaEb7U", text: "Replace with the film's title and a one-line description." },
  { title: "To the Moon and Back", category: "Documentary", role: "Director", text: "A short documentary following two young girls competing for Miss Special Needs: their journey, their relationships with their mothers and their inner beauty." },
  { title: "Alexandria, over time", category: "Digital stories", role: "Project lead, Al-Hurra", text: "A storytelling project documenting residents' daily lives and how the city changed." },
  { title: "Children's dreams", category: "Digital stories", role: "Project lead, Masrawy", text: "A Cairo project exploring what children dream of, told with motion graphics." },
];

// Reports and written work. Add `url` to any entry to link it.
export const reports = [
  { outlet: "ARIJ", role: "Executive producer", text: "Television investigation reports, produced and shot, aired on several TV channels and published on newspaper websites.", url: "" },
  { outlet: "Al-Hurra Channel (MBN)", role: "Multimedia reporter", text: "Short video stories aired on Al-Hurra TV and published across its website and social media.", url: "" },
  { outlet: "Daily News Egypt", role: "Video journalist", text: "News, social coverage and feature stories for the newspaper's digital platforms.", url: "" },
  { outlet: "Al-Masry Al-Youm", role: "Video journalist", text: "Video for the website, plus articles and photography for the newspaper.", url: "" },
];

export const services = [
  ["Documentary production", "From story development to final edit: reporting, directing, filming and post-production for short documentaries."],
  ["Video journalism", "News and field reporting for broadcast and digital platforms, including investigative reports."],
  ["Digital storytelling", "Feature stories and multi-format projects that combine video, photography, writing and motion graphics."],
  ["Editing and post-production", "Advanced editing in Final Cut Pro and Adobe Premiere Pro, with sound recording and mixing."],
  ["Podcasts and programs", "Concept, production and publishing of podcasts and recurring programs."],
  ["Visual team leadership", "Leading visual teams and coordinating coverage of major events."],
];

export const experience = [
  ["2020 – now", "Digital Department, National Reading Program"],
  ["2019", "Multimedia Reporter, Al-Hurra Channel (MBN)"],
  ["2017 – 2018", "Videographer, Masrawy"],
  ["2016 – 2017", "Video Journalist, Daily News Egypt"],
  ["2014 – 2016", "Video Journalist, Al-Masry Al-Youm"],
];

// Gallery images. Drop files in /public/gallery and list them like { src: "/gallery/one.jpg", alt: "..." }.
// Until then it shows frames from the films above.
export const gallery = [];
