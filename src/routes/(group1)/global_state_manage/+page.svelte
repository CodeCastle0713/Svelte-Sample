<script>
    // import {useCounter} from '../../../hooks/useCounter'

    // const {count , increment} = useCounter();
    import { count } from '../../../store';
</script>

<div class="main">
    <h1>{$count}</h1>
    <button on:click = {count.increment} class="bg-black text-white p-3 rounded-md">Plus</button>
</div>

<style>
    .main{
        padding:90px 10px 10px 10px;
    }
</style>