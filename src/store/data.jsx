import js from "../photos/js-logo.jpg";
import reactLogo from "../photos/react-logo.jpg";
import reduxLogo from "../photos/redux-logo.jpg";
import nodeLogo from "../photos/node-logo.jpg";
import vsLogo from "../photos/vs-logo.jpg";
import figmaLogo from "../photos/figma-logo.jpg";

import laptop from "../photos/laptop.svg";
import goruntu1 from "../photos/1photo.jpg";
import goruntu2 from "../photos/2photo.jpg";

export const datalar = {
  en: {
    data: {
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      language: "Türkçe",
      toLanguage: "'ye geç",
      greeting: "Hi! 👋",
      mySelf:
        "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products.",
      meet: "Let`s meet!",
      current: "Currently",
      freelance: "Freelancing",
      asA: "for",
      project: "Project .",
      invite: "Invite me to join your team ",
      skills: "Skills",
      profile: "Profile",
      basicInfo: "Basic Information",
      aboutMe: "About me",
      projects: "Projects",
      jokes: "Random Jokes",
      together: "Let’s work together on",
      work: "your next product .",
    },
    skillList: [
      {
        src: js,
        name: "Javascript",
      },
      {
        src: reactLogo,
        name: "React",
      },
      {
        src: reduxLogo,
        name: "Redux",
      },
      {
        src: nodeLogo,
        name: "Node",
      },
      {
        src: vsLogo,
        name: "Vs code",
      },
      {
        src: figmaLogo,
        name: "figma",
      },
    ],
    profilCard: [
      {
        name: "Birth of Date :",
        value: "24.03.1996",
      },
      {
        name: "Residence address :",
        value: "Ankara",
      },
      {
        name: "Education :",
        value: "Hacettepe University Biology, 2016",
      },
      {
        name: "Preffered role :",
        value: "Frontend, UI",
      },
    ],
    projectCard: [
      {
        name: "Jokes",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        skills: ["react", "vercel", "axios", "router"],
        img: laptop,
        insideImg: goruntu1,
      },
      {
        name: "Are you bored ?",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate?",
        skills: ["react", "redux", "axios", "router", "vercel"],
        img: laptop,
        insideImg: goruntu2,
      },
    ],
  },
  tr: {
    data: {
      themeDark: "Karanlık Mod",
      themeLight: "Aydinlik Mod",
      language: "English",
      toLanguage: "",
      greeting: "Selam! 👋",
      mySelf:
        "Ben Almila , full stack yazılım geliştiricisiyim. Ölçeklenebilir ve sağlam frontend projeleri geliştirebilirim.",
      meet: "Haydi tanışalım!",
      current: "Aktif halde",
      freelance: "Freelancer",
      asA: "olarak",
      project: "Projeleri geliştirmekteyim . ",
      invite: "Beni takimina dahil et! ",
      skills: "Yetenekler",
      profile: "Profil",
      basicInfo: "Bilgilerim",
      aboutMe: "Hakkimda",
      projects: "Projeler",
      jokes: "Fikralar",
      together: "Bir sonraki projende benimle ",
      work: "calismak ister misin ?",
    },
    skillList: [
      {
        src: js,
        name: "Javascript",
      },
      {
        src: reactLogo,
        name: "React",
      },
      {
        src: reduxLogo,
        name: "Redux",
      },
      {
        src: nodeLogo,
        name: "Node",
      },
      {
        src: vsLogo,
        name: "Vs code",
      },
      {
        src: figmaLogo,
        name: "figma",
      },
    ],
    profilCard: [
      {
        name: "Dogum Tarihi :",
        value: "24.03.1996",
      },
      {
        name: "Yasadigi address :",
        value: "Ankara",
      },
      {
        name: "Egitim Durumu :",
        value: "Hacettepe Universitesi Biyoloji, 2016",
      },
      {
        name: "Tercih edilen role :",
        value: "Frontend, UI",
      },
    ],
    projectCard: [
      {
        name: "Fikralar",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        skills: ["react", "vercel", "axios", "router"],
        img: laptop,
        insideImg: goruntu1,
      },
      {
        name: " Sıkıldın mı ?",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate?",
        skills: ["react", "redux", "axios", "router", "vercel"],
        img: laptop,
        insideImg: goruntu2,
      },
    ],
  },
};
