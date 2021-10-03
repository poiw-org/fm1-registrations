<script lang="ts">
    import {onMount} from "svelte"
    import Logo from "$lib/logo.svelte";
    import {
        ArrowRight
    } from "svelte-bootstrap-icons";

    onMount(async ()=>{

    })

</script>
<div class="flex flex-col xl:flex-row min-h-[100vh]">
    <div class="px-10 md:px-40 py-10 flex flex-col justify-between w-full xl:w-1/2 ">
        <Logo />
        <div class="flex flex-col mt-20 items-start gap-6 py-10">
            <span class="text-xl font-bold">Θέλεις να γίνεις παραγωγός στον STUDIO FM1; Η διαδικασία είναι η εξής:</span>
            <span class="flex flex-col gap-4 list-decimal  tracking">
                <span>🧑‍🎓 Έχεις στη κατοχή σου φοιτητικό πάσο σε ισχύ.</span>
                <span>✍️ Φτιάχνεις μια λίστα με 150 καλλιτέχνες του είδους με το οποίο θες να κάνεις εκπομπή (σε pdf, φωτογραφία κλπ).</span>
                <span>⬆️ Συμπληρώνεις εδώ τα στοιχεία σου και ανεβάζεις τη λίστα σου.</span>
                <span>✅ Η ροή του STUDIO FM1 θα εξετάσει τη αίτησή σου και θα σου στείλει περισσότερες πληροφορίες για το πως θα μπείς στο studio.</span>
                <span class="flex pt-10 ">
                    <a href="/app" class="bg-green-500 p-4 px-10 text-white rounded hovershadow-2xl tracking-wider hover:-mt-2 hover:bg-gray-100 hover:text-black duration-500 transition-all ease-in-out flex items-center gap-4">ΚΑΝΕ ΑΙΤΗΣΗ <ArrowRight/></a>
                </span>
            </span>
        </div>
        <div class="flex gap-9 items-center">
        </div>
    </div>
    <div class="w-full md:w-1/2 min-h-[50vh]" style="background: url(https://assets.poiw.org/richard-horvath-cPccYbPrF-A-unsplash.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;">

    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;1,300;1,400&display=swap');
    html,p,a,span,div{
        font-family: 'Ubuntu', monospace;
    }
</style>