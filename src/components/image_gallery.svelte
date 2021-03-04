<script>
    export let list;
</script>


<main>
    {#each list as image}
        <figure class="image">
            <img src={image.img_src} alt="curiosity" on:click={() => {window.open(image.img_src, "_blank")}} style="cursor:pointer">
        </figure>
    {/each}
</main>

<style>
    main{
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .image
    {
        display: inline-flex;
        height: fit-content;
        width: fit-content;
    }
</style>