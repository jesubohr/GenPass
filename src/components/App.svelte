<script lang="ts">
  import { Allowed } from "../utils/generator"
  import Checkbox from "./Checkbox.svelte"
  import Slider from "./Slider.svelte"
  import Generator from "./Generator.svelte"

  const CharactersPools = Object.keys(Allowed)
  const NotCommonPools = ["Non-ASCII", "Brackets", "Space", "Dashes"]

  let passwordLength = 8
  let includedChars = CharactersPools.filter(
    (pool) => !NotCommonPools.includes(pool)
  )

  function handleCheckboxChange(value: string, checked: boolean) {
    if (checked) includedChars = includedChars.concat(value)
    else includedChars = includedChars.filter((pool) => pool !== value)
  }
</script>

<Generator bind:passwordLength {includedChars} />
<div class="flex flex-col items-center gap-10 w-11/12 max-w-lg">
  <Slider min={8} max={64} bind:value={passwordLength} />
  <div class="grid xs:grid-cols-2 gap-2">
    {#each CharactersPools as pool}
      <Checkbox
        value={pool}
        onChange={handleCheckboxChange}
        text="Include {pool.toLocaleLowerCase()}"
        checked={!NotCommonPools.includes(pool)}
      />
    {/each}
  </div>
</div>
