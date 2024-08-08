<script>
    import { onMount } from "svelte";
    import requestAPI from '../../../requestAPI';

    onMount(async () => {
        try{
            await requestAPI.post('/data', {
                data : "I am data"
            }).then((res) => {
                console.log(res);
            })
        }catch (e) {
            console.log(e);
        }
    })
</script>