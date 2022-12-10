<script lang="ts">
  const id = Math.random().toString(36).substring(2, 9)
  export let checked = false
  export let text = ""
  export let value = ""
  export let onChange: (value: string, checked: boolean) => void

  $: {
    onChange(value, checked)
  }
</script>

<label for={`checkbox-${id}`} class="flex items-center gap-3">
  <input
    id={`checkbox-${id}`}
    type="checkbox"
    {value}
    bind:checked
    class="w-5 h-5"
  />
  <span class="min-w-fit">{text}</span>
</label>
