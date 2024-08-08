<script>
    let count = 1;

    //$: Re-run whenever value changes
    //Track count's value without any event
    $:if(count >= 10) {
        alert("count value is dangerous.");
        count = 9;
    }
    //Declare value and track count's value without any event
    $:doubled = count * 2;

    function handleClick() {
        count += 1;
    }
</script>

<svelte:head>
    <title>Reactivity</title>
    <meta name="description" content="Reactivity Page"/>
</svelte:head>

<div class="main">
    <button on:click = {handleClick} class="bg-black text-white p-3 rounded-md">Count : {count}</button>
    <h1>{doubled}</h1>
</div>

<style>
    .main{
        padding:90px 10px 10px 10px;
    }
</style>