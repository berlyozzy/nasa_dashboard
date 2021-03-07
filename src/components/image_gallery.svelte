<script>
    export let image_list;
</script>


<main>
    <span class="image-container">
        {#each image_list as image}
        <span class="image-card">
            <figure class="image">
                <img src={image.img_src} alt="curiosity" on:click={() => {window.open(image.img_src, "_blank")}} style="cursor:pointer">
            </figure>
            <span class="image-card-data has-background-grey-lighter">
                <span>Sol: {image.sol}</span>
                <span>Date: {image.earth_date}</span>
                <span>Cam: {image.camera.full_name}</span>
                <span>Rover: {image.rover.name}</span>
            </span>
        </span>
    {/each}
    </span>
</main>

<style>
    main{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .image-container{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: dense;
        width: 100%;
        height: max-content;
        padding: 10px;
    }

    img{
        filter: sepia(40%) contrast(110%);
    }

    .image-card-data{
        position: absolute;
        display: grid;
        height: auto;
        width: max-content;
        gap: 5px;
        padding: 5px;
        z-index: 5;
        bottom: 0;
        right: 0;
        opacity: 0.9;
    }

    .image-card-data > * {
        display: block;
        width: 100%;
        font-size: 0.8em;
    }

    .image-card{
        position: relative;
        height: max-content;
    }
</style>