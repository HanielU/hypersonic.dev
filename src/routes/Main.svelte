<script lang="ts">
  import Card from "./Card.svelte";
  import anime from "animejs";
  import avatar from "$lib/assets/myavatar.png";
  import type { TransitionConfig } from "svelte/transition";
  import type { Writable } from "svelte/store";
  import { afterUpdate, beforeUpdate, getContext, onDestroy, onMount } from "svelte";
  import { chatData } from "$lib/chatData";
  import { flip } from "svelte/animate";

  const refresh = getContext<Writable<boolean>>("refresh");
  let div: HTMLDivElement;
  let autoscroll: boolean;
  let interval: NodeJS.Timer;

  beforeUpdate(() => {
    autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo({ top: div.scrollHeight, behavior: "smooth" });
  });

  let chatBubbleData: Array<{
    title: string;
    content: string;
  }> = [];

  function init() {
    let counter = 0;
    interval = setInterval(() => {
      if (chatBubbleData.length < chatData.length) {
        chatBubbleData[counter] = chatData[counter];
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    anime({
      targets: ".dot",
      translateY: [0, -6, 0],
      duration: 900,
      delay: anime.stagger(100),
      loop: true,
      easing: "easeInQuad",
      // endDelay: 0,
    });

    // scale in the dots-wrapper
    anime({
      targets: ".dots-wrapper",
      scale: [0, 1.1, 1],
      duration: 500,
      easing: "easeOutQuad",
    });
  }

  onMount(init);
  onDestroy(() => clearInterval(interval));

  function removeBubble(_: Element): TransitionConfig {
    return {
      css: () => {
        anime({
          targets: _,
          scale: 0,
          duration: 300,
          easing: "easeOutQuad",
        });
        return "";
      },
      duration: 150,
    };
  }
</script>

<svelte:head>
  <title>Haniel Ubogu / Software Engineer</title>
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="h-full w-full grid place-items-center">
  <div class="w-115 h-500px mx-auto p-5 flex">
    <!-- left -->
    <div class="flex h-full w-fit">
      <div class="w-15 mt-auto rounded-full overflow-hidden">
        <img
          class="w-full cursor-pointer"
          src={avatar}
          alt=""
          on:click={() => ($refresh = !$refresh)}
        />
      </div>
    </div>

    <!-- right -->
    <div
      class="
        relative flex-1 px-3 flex h-full 
        overflow-(x-hidden y-auto)
        f-scrollbar-w-thin
        f-scrollbar-c-neutral-200/40
        scrollbar:w-0.8
        scrollbar-track:(rounded-2.5 bg-neutral-200/4)
        scrollbar-thumb:(rounded-2.5 bg-neutral-200/40)"
      bind:this={div}
    >
      <div class="mt-auto flex flex-col gap-2">
        {#each chatBubbleData as { title, content }, i (i)}
          <div animate:flip={{ duration: 500 }}>
            <Card
              class={title == "Get in touch" // if this is the last element
                ? "min-w-fit w-40% rounded-(b-32px tr-32px tl-lg)"
                : "rounded-(bl-lg t-2xl br-3xl)"}
              {title}
            >
              {#if title == "Get in touch"}
                <a
                  href="https://wa.me/message/SUZHRJ4RZC4CO1"
                  target="_blank"
                  rel="noreferrer"
                  class="py-1 px-2 pr-2.4 rounded-full bg-neutral-7 cursor-pointer
                  text-white inline-block mt-1 w-full flex items-center font-medium"
                >
                  <div class="mr-1">
                    <div class="i-dashicons-whatsapp" />
                  </div>
                  {content}
                </a>
              {:else}
                {content}
              {/if}
            </Card>
          </div>
        {/each}

        {#if chatBubbleData.length !== chatData.length}
          <!-- typing-bubble -->
          <div
            style="transform: scale(0);"
            class="dots-wrapper transform-origin-bl flex gap-1 
            bg-dark-3 w-fit p-3 pt-4 rounded-full sticky bottom-0"
            out:removeBubble
          >
            {#each Array(3) as _}
              <div class="dot square-1.8 bg-neutral-4 rounded-full relative top-2px" />
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
