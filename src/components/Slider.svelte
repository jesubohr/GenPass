<script lang="ts">
  export let min = 0
  export let max = 100
  export let value = min
</script>

<div class="flex items-center gap-4 w-full">
  <input type="range" class="w-full" {min} {max} bind:value />
  <span class="w-8 h-8 text-center text-2xl font-semibold">{value}</span>
</div>
