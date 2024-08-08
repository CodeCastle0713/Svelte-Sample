<script>
    import Slot from "../../../components/Slot.svelte";
</script>

<body>
    <Slot>
        <h1 slot="title">TITLE</h1>
        <p slot="description">Lorem impsm</p>
    </Slot>
    <Slot>
        <h1 slot="title">TITLE</h1>
        <p slot="gmail">Gmail</p>
    </Slot>
    <Slot />
</body>

<style>
    body{
        padding:90px 10px 10px 10px;
    }
    h1{
        font-size:40px;
    }
</style>