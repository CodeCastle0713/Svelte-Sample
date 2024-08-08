<script>
    // import {useCounter} from '../hooks/useCounter'

    // const {count} = useCounter();
    import { count } from "../store";
</script>

<!-- I think it's just own symbol of svelte -->

<svelte:head>
    <title>Landing Page</title>
    <meta name="description" content="Svelte Train">
</svelte:head>

<section>
    <!-- 
        If you set to {count} , then count will be object. 
        But here you set to {$count} , so $count return count object's subscribe(store.js).
    -->
    <h1>My Global State Value is : {$count}</h1>
    <div>I am Landing Page.</div>
</section>

<style>
    section{
        padding:90px 10px 10px 10px;
    }
</style>