<script lang="ts">
  import { generatePassword, getPasswordEntropy } from "../utils/generator"
  import { createNotification } from "../utils/notification"
  import { copyToClipboard } from "../utils/copy"
  import Icon from "./Icon.svelte"

  export let passwordLength = 8
  export let includedChars: string[] = []
  let passwordEntropy = 0
  let password = ""

  function handleGenerator() {
    password = generatePassword(passwordLength, includedChars)
    passwordEntropy = getPasswordEntropy(passwordLength, includedChars)
  }

  function handleCopy() {
    copyToClipboard(password, () =>
      createNotification("Password copied to clipboard!")
    )
  }

  $: {
    password = generatePassword(passwordLength, includedChars)
    passwordEntropy = getPasswordEntropy(passwordLength, includedChars)
  }
</script>

<div class="max-w-3xl w-full">
  <div class="flex gap-2 mx-auto">
    <div class="grow flex items-center p-1.5 border-2 border-gray-400 rounded ">
      <label for="generated-password" class="sr-only"
        >Here is your generated password</label
      >
      <input
        type="text"
        id="generated-password"
        value={password}
        placeholder="Here is your generated password"
        class="pl-2 w-full bg-transparent text-white text-lg"
        disabled
      />
      <button
        class="p-1.5 rounded-sm hover:bg-red-500 focus:outline-none focus-visible:ring-2 ring-red-500/50"
        on:click={handleCopy}
      >
        <Icon icon="copy" type="solid" />
      </button>
    </div>
    <button
      class="px-3.5 py-2.5 bg-red-600 rounded hover:bg-red-500 focus:outline-none focus-within:border-red-500 focus-within:ring-4 ring-red-400 ring-opacity-40"
      on:click={handleGenerator}
    >
      <Icon icon="arrow" />
    </button>
  </div>
  <p>Entropy: {passwordEntropy.toFixed(2)} bits</p>
</div>
