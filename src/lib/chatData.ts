import { buttonWithIcon } from "./styles/Button.css";
import type { ChatData } from "./types";

/* 
  :highlight:
  NEVER Use the Self-Closing Tag for Non self-closing HTML Elements in strings

  Example: <br> is a self-closing tag, but <div> is not a self-closing tag
  do not use <div /> instead use <div></div>

  ALSO,
  Never use template literals for concatenating class names
  Unocss will not work and will make the cpu usage high.

*/

export const chatData: ChatData[] = [
  {
    type: "full",
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
    type: "full",
    title: "",
    content: `
      I am passionate about building products that solve real-world problems,
      and I'm always looking for opportunities to learn and grow.`,
  },
  {
    type: "full",
    title: "What am I doing now?",
    content: `Freelance Product Designer and Remote UI Designer at Eleven Kings.`,
  },
  {
    type: "full",
    title: "See a sample of my work",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, modi!`,
  },
  {
    type: "half",
    title: "Get in touch",
    content:
      `
      <a
        href="https://wa.me/message/SUZHRJ4RZC4CO1"
        target="_blank"
        rel="noreferrer"
        class="` +
      buttonWithIcon +
      ` mt-1 w-full"
        
      >
        <div>
          <div class="i-dashicons-whatsapp"></div>
        </div>
        
        Message Me
      </a>
    `,
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
