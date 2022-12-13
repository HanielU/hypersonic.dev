<script lang="ts">
  import Card from "./Card.svelte";
  import avatar from "$lib/assets/myavatar.png";
  import type { ChatData, ChatAnimationControl } from "$lib/types";
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  import { chatData } from "$lib/chatData";
  import { flip } from "svelte/animate";
  import { isCollide, typingIndicatorAnimation } from "$lib/utils";
  import { quintOut } from "svelte/easing";
  import { fly, slide } from "svelte/transition";
  import { crossfade } from "svelte/transition";
  import { buttonWithIcon } from "$lib/styles/Button.css";

  let autoscrollChatBubblesWrapper: boolean;
  let autoscrollPageWrapper: boolean;
  let chatBubbleData: ChatData[] = [];
  let chatBubblesWrapper: HTMLDivElement;
  let headerCollides = false;
  let interval: NodeJS.Timer;
  let pageWrapper: HTMLDivElement;

  // Why these two are initally false - https://stackoverflow.com/a/64444463
  let showTypingIndicator = false;
  let showControls = false;

  /**
   * This is used to restart the animation when the typing indicator
   * is destroyed while the animation is still running.
   */
  let animScheduled = false;

  let avatarPos: "initial" | "header" = "initial";

  const controls: ChatAnimationControl[] = [
    {
      action: () => chatBubbleData.length < chatData.length && populateChatBubbles(chatData, true),
      icon: "i-ph-skip-forward-circle-duotone",
    },
    {
      action: scheduleAnimation,
      icon: "i-ph-play-circle-duotone",
    },
  ];

  const toggleAvatarPos = (pos?: typeof avatarPos) =>
    (avatarPos = pos || (avatarPos === "initial" ? "header" : "initial"));

  const [send, receive] = crossfade({
    duration: 600,
    // when you remove an element
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          opacity: ${t}
          transform: ${transform} scale(${t});
        `,
      };
    },
  });

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

  /**
   * This `action` schedules the animation when the typing indicator is destroyed.
   */
  function watchTypingIndicator(_: HTMLDivElement) {
    return {
      destroy() {
        if (animScheduled) {
          showTypingIndicator = true;
          runAnimProcess();
        }
      },
    };
  }

  function runAnimProcess() {
    populateChatBubbles(chatData);
  }

  function scheduleAnimation() {
    clearInterval(interval);
    if (!animScheduled) animScheduled = true;

    // :highlight:
    // showTypingIndicator = false when the typing indicator is destroyed
    // by clicking on the avatar while the typing indicator is animating.
    // showTypingIndicator = true when the animation is scheduled after
    // the typing indicator is done animating or not animating at all (e.g on first Page mount).
    showTypingIndicator = !showTypingIndicator;
    chatBubbleData = [];
    if (showTypingIndicator) runAnimProcess();
  }

  function populateChatBubbles(sourceChatData: ChatData[], skip = false) {
    let index = 0;
    if (skip === false) {
      interval = setInterval(() => {
        chatBubbleData[index] = sourceChatData[index];
        index++;

        // stop the interval when the chatBubbleData array is equal to the sourceChatData array.
        if (chatBubbleData.length === sourceChatData.length) {
          clearInterval(interval);

          // No need to show the typing indicator anymore,
          // since all the chat bubbles have been populated.
          showTypingIndicator = false;

          // There is no animation scheduled anymore,
          // since all the chat bubbles have been populated.
          animScheduled = false;
        }
      }, 2000);
    } else {
      clearInterval(interval); // stop the interval if there is one.
      chatBubbleData = sourceChatData;
      showTypingIndicator = false;
      animScheduled = false;
    }
  }

  onMount(() => {
    showControls = true;
    scheduleAnimation();
    chatBubblesWrapper?.addEventListener("scroll", handleScroll);
  });

  onDestroy(() => {
    clearInterval(interval);
    chatBubblesWrapper?.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (!chatBubblesWrapper) return;
    headerCollides = isCollide(chatBubblesWrapper.children[0], document.querySelector("#header")!);

    // toggle the avatar position when the header collides with the chat bubbles wrapper.
    // if (headerCollides && avatarPos === "initial") {
    //   toggleAvatarPos("header");
    // }
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
    <!-- blurry header -->
    <div
      id="header"
      class="
        absolute top-0 left-0 w-full h-20% max-h-15
        px-3 py-2 flex items-center justify-between
        backdrop-filter backdrop-blur-6px
        bg-dark-8/30 z-9999!
        shadow-([0_4px_30px_rgb(0,0,0,0.1)] dark-8/28)
        {headerCollides ? 'border-b-(1 gray-1/10) rounded-b-lg' : ''}
        "
    >
      <div class="h-full">
        {#if avatarPos == "header"}
          <div
            in:receive={{ key: avatar }}
            out:send={{ key: avatar }}
            class="h-full mt-auto rounded-full overflow-hidden"
          >
            <img
              class="h-full cursor-pointer"
              src={avatar}
              alt="Haniel Ubogu's Avatar"
              on:click={scheduleAnimation}
              on:keydown={scheduleAnimation}
            />
          </div>
        {/if}
      </div>

      <button
        on:click={() => toggleAvatarPos()}
        class="
        py-1 px-2 pr-2.4 ml-auto rounded-full bg-neutral-7 cursor-pointer
        text-white mt-1 flex items-center font-medium"
      >
        Toggle
      </button>
    </div>

    <!-- left box / Avatar Section-->
    <div class="flex flex-col h-full w-fit p-(l-3 y-3)">
      <!-- Controls -->
      <div class="text-3xl mt-auto mb-1.5">
        {#if showControls}
          {#each controls as { action, icon } (icon)}
            <div
              class="
                w-full py-2 flex justify-center cursor-pointer
                click-spring brightness-80 opacity-50
                hover:(brightness-100 opacity-100)"
              on:click={action}
              on:keydown={action}
              in:fly={{ x: 0, y: 20, duration: 500 }}
            >
              <div class={icon} />
            </div>
          {/each}
        {/if}
      </div>

      {#if avatarPos == "initial"}
        <div
          in:receive={{ key: avatar }}
          out:send={{ key: avatar }}
          class="w-13 rounded-full overflow-hidden sm:(w-15)"
        >
          <img
            class="w-full cursor-pointer"
            src={avatar}
            alt="Haniel Ubogu's Avatar"
            on:click={scheduleAnimation}
            on:keydown={scheduleAnimation}
          />
        </div>
      {/if}
    </div>

    <!-- right box / Chats Section -->
    <div class="relative flex-1">
      <div
        class="
          p-3 pt-16 flex overflow-(x-hidden y-auto) h-full
          f-scrollbar-w-thin f-scrollbar-c-neutral-200/40
          scrollbar:w-0.8
          scrollbar-track:(rounded-2.5 bg-neutral-200/2)
          scrollbar-thumb:(rounded-2.5 bg-neutral-200/8)"
        bind:this={chatBubblesWrapper}
      >
        <div class="relative mt-auto flex flex-col gap-2 z-1">
          {#each chatBubbleData as { title, content, type }, i (i)}
            <div animate:flip={{ duration: 450 }}>
              <Card
                class={type == "half"
                  ? "min-w-fit w-40% rounded-(b-32px tr-32px tl-lg)"
                  : "rounded-(bl-lg t-2xl br-3xl)"}
                {title}
              >
                {@html content}
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
              use:watchTypingIndicator
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
