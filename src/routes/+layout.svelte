<script>
    import Header from "../components/Header.svelte";
    import '../global.css';
</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    .app{
        background-color:gray;
        min-height: 100vh;
    }
</style>