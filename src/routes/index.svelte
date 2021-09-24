<script lang="ts">
    import {onMount} from "svelte"
    import Logo from "$lib/logo.svelte";

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

            </span>
        </div>
        <div class="flex gap-9 items-center">
            <a href="/app" class="bg-[#2C4251] p-4 text-white rounded shadow-xl">ΕΙΣΟΔΟΣ ΣΤΗΝ ΕΦΑΡΜΟΓΗ</a>
            <a href="/admin">ΕΙΣΟΔΟΣ ΡΟΗΣ</a>
        </div>
    </div>
    <div class="w-full md:w-1/2" style="background: url(https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=will-francis-ZDNyhmgkZlQ-unsplash.jpg) no-repeat center center fixed;
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