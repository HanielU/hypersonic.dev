<script lang="ts">
  import Card from "./Card.svelte";
  import avatar from "$lib/assets/myavatar.png";
  import type { ChatData } from "$lib/types";
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  import { chatData } from "$lib/chatData";
  import { flip } from "svelte/animate";
  import { isCollide, typingIndicatorAnimation } from "$lib/utils";
  import { slide } from "svelte/transition";

  let autoscrollChatBubblesWrapper: boolean;
  let autoscrollPageWrapper: boolean;
  let chatBubbleData: ChatData[] = [];
  let chatBubblesWrapper: HTMLDivElement;
  let headerCollides = false;
  let interval: NodeJS.Timer;
  let pageWrapper: HTMLDivElement;

  // Why this is initally false - https://stackoverflow.com/a/64444463
  let showTypingIndicator = false;

  /**
   * This is used to restart the animation when the typing indicator is destroyed.
   */
  let restarted = false;

  beforeUpdate(() => {
    autoscrollChatBubblesWrapper =
      chatBubblesWrapper &&
      chatBubblesWrapper.offsetHeight + chatBubblesWrapper.scrollTop >
        chatBubblesWrapper.scrollHeight - 20;
    autoscrollPageWrapper =
      pageWrapper &&
      pageWrapper.offsetHeight + pageWrapper.scrollTop > pageWrapper.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscrollChatBubblesWrapper) {
      chatBubblesWrapper.scrollTo({ top: chatBubblesWrapper.scrollHeight, behavior: "smooth" });
    }
    if (autoscrollPageWrapper) {
      pageWrapper.scrollTo({ top: pageWrapper.scrollHeight, behavior: "smooth" });
    }
  });

  function monitorTypingIndicatorDestruction(_: HTMLDivElement) {
    return {
      destroy() {
        if (restarted) {
          showTypingIndicator = true;
          restartFunctionality();
        }
      },
    };
  }

  function restartFunctionality() {
    populateChatBubbles(chatData);
    restarted = false;
  }

  async function restartAnimation() {
    clearInterval(interval);
    restarted = true;
    showTypingIndicator = !showTypingIndicator;
    chatBubbleData = [];
    if (showTypingIndicator) restartFunctionality();
  }

  function populateChatBubbles(sourceChatData: ChatData[]) {
    let counter = 0;
    interval = setInterval(() => {
      chatBubbleData[counter] = sourceChatData[counter];
      counter++;

      if (chatBubbleData.length === sourceChatData.length) {
        showTypingIndicator = false;
        clearInterval(interval);
      }
    }, 2000);
  }

  onMount(() => {
    showTypingIndicator = true;
    populateChatBubbles(chatData);
    chatBubblesWrapper?.addEventListener("scroll", handleScroll);
  });

  onDestroy(() => {
    clearInterval(interval);
    chatBubblesWrapper?.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (!chatBubblesWrapper) return;
    headerCollides = isCollide(chatBubblesWrapper.children[0], document.querySelector("#header")!);
  }
</script>

<svelte:head>
  <title>Haniel Ubogu / Software Engineer</title>
</svelte:head>

<div
  class="
    h-full w-full overflow-hidden grid relative
    place-items-center text-white bg-dark-8 font-sans"
  bind:this={pageWrapper}
>
  <div
    class="
      absolute bottom-0 h-full w-full max-w-115 mx-auto flex 
      sm:(
        max-h-500px 
        [@media_screen_and_(min-height:500px)]:(
          relative bottom-initial min-h-500px h-60% max-h-800px
        )
      )"
  >
    <!-- left box -->
    <div class="flex h-full w-fit p-(l-3 y-3)">
      <div class="w-13 mt-auto rounded-full overflow-hidden sm:(w-15)">
        <img
          class="w-full cursor-pointer"
          src={avatar}
          alt="Haniel Ubogu's Avatar"
          on:click={restartAnimation}
          on:keydown={restartAnimation}
        />
      </div>
    </div>

    <!-- right box -->
    <div class="relative flex-1">
      <!-- blurry header -->
      <div
        id="header"
        class="
          absolute top-0 left-0 w-full h-20% max-h-10
          backdrop-filter backdrop-blur-6px
          bg-dark-8/30 z-9999!
          shadow-([0_4px_30px_rgb(0,0,0,0.1)] dark-8/28)
          {headerCollides ? 'border-b-(1 gray-1/10) rounded-b-xl' : ''}
          "
      />

      <div
        class="p-3 pt-11 flex overflow-(x-hidden y-auto) h-full
        f-scrollbar-w-thin f-scrollbar-c-neutral-200/40
        scrollbar:w-0.8
        scrollbar-track:(rounded-2.5 bg-neutral-200/2)
        scrollbar-thumb:(rounded-2.5 bg-neutral-200/8)"
        bind:this={chatBubblesWrapper}
      >
        <div class="relative mt-auto flex flex-col gap-2 z-1">
          {#each chatBubbleData as { title, content }, i (i)}
            <div animate:flip={{ duration: 500 }} class="contents;">
              <Card
                class={title == "Get in touch"
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
                  {@html content}
                {/if}
              </Card>
            </div>
          {/each}

          <!-- typing-indicator -->
          {#if showTypingIndicator}
            {@const dotStyle =
              "typing-indicator-dot square-1.8 bg-neutral-4 rounded-full relative top-2px"}
            <div
              style="transform: scale(0);"
              class="
                typing-indicator-wrapper transform-origin-bl flex gap-1 
              bg-dark-3 w-fit p-3 pt-4 rounded-full sticky bottom-0"
              use:monitorTypingIndicatorDestruction
              in:typingIndicatorAnimation
              out:slide={{ duration: 100 }}
            >
              <div class={dotStyle} />
              <div class={dotStyle} />
              <div class={dotStyle} />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
