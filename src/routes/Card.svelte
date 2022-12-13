<script lang="ts">
  import { cardIn } from "$lib/utils";

  let title = "";
  let classnames = "";
  export { classnames as class, title };
</script>

<div
  in:cardIn
  style="transform: scale(0);"
  class="card transform-origin-bl bg-dark-3/60 p-4 {classnames || ''}"
>
  {#if title.trim()}
    <h3 class="font-semibold">{title}</h3>
  {/if}
  <p class="text-neutral-4">
    <slot />
  </p>
</div>
