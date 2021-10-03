{#if !vertical}
<div class="flex flex-row justify-start items-center gap-4 mb-10">
    <h1 class="text-2xl tracking-widest p-4 text-right flex justify-end items-center font-bold rounded-[5px] text-white bg-green-500 shadow">STUDIO FM1<span class="border text-black bg-white p-2 text-sm rounded-full ml-4 ">105.4</span></h1>
    <span class="">
            <p class="text-xl tracking-wider">Εφαρμογή υποψήφιων παραγωγών</p>
            <span class="text-sm text-blue-500">powered by <a href="https://poiw.org" target="_blank">po/iw</a> </span>
        </span>
</div>
{:else }
    {vertical}
<div class="flex flex-col justify-start items-center gap-4">
    <h1 class="text-2xl tracking-widest p-4 flex items-center font-bold rounded-[5px] text-white bg-green-500 shadow">STUDIO FM1<span class="border text-black bg-white p-2 text-sm rounded-full ml-4 ">105.4</span></h1>
    <span>
        <p>Εφαρμογή υποψήφιων παραγωγών</p>
        <span class="text-sm text-blue-500">powered by po/iw</span>
    </span>
</div>
{/if}
<script>
    export let vertical = false;
</script>