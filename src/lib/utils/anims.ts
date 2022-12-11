import anime from "animejs";
import type { TransitionConfig } from "svelte/transition";

export function typingIndicatorAnimation(_: HTMLDivElement): TransitionConfig {
  return {
    css: () => {
      anime({
        targets: _,
        scale: [0, 1.1, 1],
        duration: 500,
        easing: "easeOutQuad",
      });

      anime({
        targets: _.querySelectorAll(".typing-indicator-dot"),
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
