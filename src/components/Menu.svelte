<script>
    import { selected_camera, query_date } from '../stores.js';
    import { createEventDispatcher } from 'svelte';

    export let rover_cameras;

	let selected;
    let date;

    const dispatch = createEventDispatcher();


    function Query()
    {
        selected_camera.set(selected);
        query_date.set(date);
		dispatch('query','new photos');
    }

</script>


<main>
    <input class="input" type="date" bind:value={date}>
    <select bind:value={selected}>
        {#each rover_cameras as cam}
            <option value={cam}>
                {cam}
            </option>
        {/each}
    </select>
    <button class="button" on:click={()=>{Query()}}>Show</button>
</main>

<style>
    main{
        position: absolute;
        z-index: 99;
        right: 10px;
        top: 10px;
        height: 30%;
        width: 20%;
        background: white;
        padding: 5px;
    }
</style>