<script>
    import Nested from "../../../components/Train/Nested.svelte";
    import Inner from "../../../components/Train/Inner.svelte";
    import CustomButton from "../../../components/Train/CustomButton.svelte";

    $:someMessage = '';

    const info = {
        name : 'Svelte',
        version : '3.0',
        speed : 'blazing'
    }

    const handleMessage = (event) => {
        someMessage = event.detail.text;
    }

    const handleClick = () => {
        alert("CustomButton is clicked.");
    }
</script>

<svelte:head>
    <title>Props</title>
    <meta name="description" content="Props Page"/>
</svelte:head>

<div class="main">
    <Nested answer = { 42 } {...info}/>
    <Nested />
    <Inner on:message={ handleMessage }/> <br/>
    <h1>Message : { someMessage }</h1>
    <CustomButton on:click = { handleClick }/>
</div>

<style>
    .main{
        padding:90px 10px 10px 10px;
    }
</style>