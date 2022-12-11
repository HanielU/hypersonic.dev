// @unocss-include

import type { ChatData } from "./types";

export const chatData: ChatData[] = [
  {
    title: "Hi, I'm Haniel Ubogu",
    content:
      "I am a Software Engineer, and a " +
      '<a href="https://www.youtube.com/watch?v=rAjd8z-Fx5A&ab_channel=Theo-ping%E2%80%A4gg"' +
      'class="inline-block ' +
      "text-white font-bold " +
      "bg-gradient-to-r from-fuchsia-400 via-pink to-orange " +
      "bg-clip-text [-webkit-text-fill-color:transparent] " +
      "border-b leading-tight " +
      "[border-image-slice:1] " +
      '[border-image-source:linear-gradient(var(--un-gradient))]" ' +
      ">builder</a> " +
      "who is focused on creating user-friendly products and experiences for the web.",

    // content: `I work as a product designer & Front-end Developer. I am ready to support your designs
    //           with 4+ years of experience.`,
  },
  {
    title: "",
    content: `
    I am passionate about building products that solve real-world problems,
    and I'm always looking for opportunities to learn and grow.`,
  },
  {
    title: "What am I doing now?",
    content: `Freelance Product Designer and Remote UI Designer at Eleven Kings.`,
  },
  {
    title: "See a sample of my work",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, modi!`,
  },
  {
    title: "Get in touch",
    content: "Message me",
  },
];

// old content string
/*`
    I am a Software Engineer, and a 
    <a href="https://www.youtube.com/watch?v=rAjd8z-Fx5A&ab_channel=Theo-ping%E2%80%A4gg"
    class="inline-block
    text-white font-bold 
    bg-gradient-to-r from-fuchsia-400 via-pink to-orange
    bg-clip-text [-webkit-text-fill-color:transparent]
    border-b leading-tight
    [border-image-slice:1]
    [border-image-source:linear-gradient(var(--un-gradient))]"
    >
      builder
    </a> 
    who is focused on creating user-friendly products and experiences for the web.`
      .replace(/[\r\n]/gm, "") // removes all newlines
      .replace(/\s\s\s/g, ""), // removes tripple spaces
    */
