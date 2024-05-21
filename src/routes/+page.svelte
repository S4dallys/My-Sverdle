<script>
    import { onMount } from "svelte";
    const url = "https://random-word-api.vercel.app/api?words=1&length=5";

    let word = "hello";
    let unusedLetters = "abcdefghijklmnopqrstuvwxyz".split("");

    onMount(async () => {
        const response = await fetch(url);
        const data = await response.json();
        word = data[0];
    });

    let finished = false;
    let guesses = ["     ", "     ", "     ", "     ", "     "];
    let guessNumber = 0;
    let currentGuess = "";

    function handleClick() {
        if (currentGuess.length != 5) return;
        if (guessNumber == 4 || currentGuess === word) {
            guesses[guessNumber] = currentGuess;
            finished = true;
            return;
        }

        unusedLetters = unusedLetters.filter((l) => !currentGuess.includes(l));

        guesses[guessNumber] = currentGuess;
        guessNumber++;
        currentGuess = "";
    }

    function restartGame() {
        // im lazy!
        location.reload();
    }
</script>

<h1>Wordle</h1>
{#each guesses as guess}
    <ul class="guess-row">
        {#each guess as guess_letter, ind}
            {#if guess_letter === word[ind]}
                <!-- correct pos and letter -->
                <li class="green">{guess_letter}</li>
            {:else if word.indexOf(guess_letter) != -1}
                <!-- correct letter -->
                <li class="yellow">{guess_letter}</li>
            {:else}
                <!-- incorrect letter -->
                <li class="white">{guess_letter}</li>
            {/if}
        {/each}
    </ul>
{/each}

{#if !finished}
    <form id="input-box" on:submit={handleClick}>
        <!-- svelte-ignore a11y-autofocus -->
        <input type="text" maxlength="5" bind:value={currentGuess} autofocus />
        <input type="submit" value="guess" />
    </form>
    <p id="unused">{unusedLetters}</p>
{:else if currentGuess === word}
    <div class="bottom-div">
        <h1>You win!</h1>
        <!-- svelte-ignore a11y-autofocus -->
        <button on:click={restartGame} autofocus>Retry</button>
    </div>
{:else}
    <div class="bottom-div">
        <h1>You lose!</h1>
        <p>The word was {word}.</p>
        <!-- svelte-ignore a11y-autofocus -->
        <button on:click={restartGame} autofocus>Retry</button>
    </div>
{/if}

<style>
    h1,
    p {
        margin: 5px;
        padding: 0;
    }

    .bottom-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1,
    p {
        text-align: center;
    }

    #unused {
        width: 200px;
        word-break: break-all;
        letter-spacing: 2px;
        margin: 0 auto;
        margin-top: 20px;
    }

    #input-box {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    button {
        width: 40px;
        font-size: 0.5rem;
    }

    .guess-row {
        box-sizing: border-box;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 5px;
        align-items: center;
    }

    li {
        list-style-type: none;
        width: 20px;
        border: 2px solid black;
        text-align: center;
        min-width: 25px;
        min-height: 22px;
    }

    .green {
        background-color: rgb(0, 220, 0);
    }
    .yellow {
        background-color: yellow;
    }
    .white {
        background-color: white;
    }
</style>
