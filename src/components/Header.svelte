<script>
    import { page } from '$app/stores';
</script>

<header>
    <div class="justify-between items-center">
        <li aria-current="{$page.url.pathname === '/' ? 'landing' : undefined}">
            <a href = "/">Logo</a>
        </li>
        <ul class="justify-between">
            <li aria-current="{$page.url.pathname === '/reactivity' ? 'reactivity' : undefined}">
                <a href = "/reactivity">Relax</a>
            </li>
        <ul>
    </div>
</header>

<style>
    header{
        position: fixed;
        width:100%;
        padding:10px;
        background-color: black;
        color:white;
    }
    
    li{
        list-style-type: none;
    }
</style>