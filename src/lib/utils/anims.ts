import anime from "animejs";
import type { TransitionConfig } from "svelte/transition";

export function typingIndicatorAnimation(node: HTMLDivElement): TransitionConfig {
  return {
    css: () => {
      anime({
        targets: node,
        scale: [0, 1.1, 1],
        duration: 500,
        easing: "easeOutQuad",
      });

      anime({
        targets: node.querySelectorAll(".typing-indicator-dot"),
        translateY: [0, -6, 0],
        duration: 900,
        delay: anime.stagger(100),
        loop: true,
        easing: "easeInQuad",
      });

      return "";
    },
  };
}

export function cardIn(_: Element): TransitionConfig {
  return {
    css: () => {
      anime({
        targets: _,
        scale: [0, 1.05, 1],
        translateY: {
          value: [20, 0],
          easing: "easeOutQuad",
        },
        duration: 500,
        easing: "easeOutQuad",
      });
      return "";
    },
    duration: 500,
  };
}
