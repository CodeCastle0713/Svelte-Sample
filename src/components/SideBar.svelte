<script>
    import { page } from '$app/stores';
</script>

<div class="sidebar">
    <div aria-current="{$page.url.pathname === '/reactivity' ? 'page' : undefined}">
        <a href = "/reactivity">Reactivity</a>
    </div>
    <div aria-current="{$page.url.pathname === '/props' ? 'props' : undefined}">
        <a href = "/props">Props</a>
    </div>
    <div aria-current="{$page.url.pathname === '/global_state_manage' ? 'global_state_manage' : undefined}">
        <a href = "/global_state_manage">GlobalStateManage</a>
    </div>
    <div aria-current="{$page.url.pathname === '/api_request' ? 'api_request' : undefined}">
        <a href = "/api_request">API Request</a>
    </div>
    <div aria-current="{$page.url.pathname === '/slot' ? 'slot' : undefined}">
        <a href = "/slot">Using Slot</a>
    </div>
</div>

<style>
    .sidebar{
        padding:70px 0px 0px 0px;
        width:240px;
        background-color: bisque;
    }

    .sidebar div{
        padding:10px
    }

    .sidebar div a{
        text-decoration: none;
    }

    .sidebar div:hover {
        background-color: aqua;
        cursor: pointer;
    }

</style>