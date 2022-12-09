<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  // import Main from "./Main.svelte";
  import Temp from "./Temp.svelte";

  const refresh = writable(false);
  setContext("refresh", refresh);
</script>

{#key $refresh}
  <Temp />
{/key}
