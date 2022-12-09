<script lang="ts">
  import anime from "animejs";
  import clsx from "clsx";
  import type { TransitionConfig } from "svelte/transition";

  let title: string;
  let classnames = "";
  export { classnames as class, title };

  function cardIn(_: Element): TransitionConfig {
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
</script>

<div
  in:cardIn
  style="transform: scale(0);"
  class={clsx("card transform-origin-bl bg-dark-3/60 p-4", classnames)}
>
  <h3 class="font-semibold">{title}</h3>
  <p class="text-neutral-4">
    <slot />
  </p>
</div>
