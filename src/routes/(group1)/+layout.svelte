<script>
    import SideBar from "../../components/SideBar.svelte";
    import '../../global.css';
</script>

<div class="app">
    <SideBar />
    <main>
        <slot />
    </main>
</div>

<style>
    .app{
        height:100vh;
        display:flex;
    }
</style>