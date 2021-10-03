<div class="flex flex-col xl:flex-row min-h-[100vh]">
    <div class="px-10 xl:px-20 py-10 flex flex-col justify-between w-full xl:w-1/2 ">
        <Logo />
        <div class="flex flex-col">
            {#if authentication !== AuthenticationStates.PROCESSING && producer.applicationStatus !== ApplicationStates.PROCESSING  }
                {#if authentication === AuthenticationStates.LOGGED_OUT}
                    <span class="flex items-center gap-4 text-sm text-gray-600 tracking-wider"><PersonCircle/> ΚΑΤΑΧΩΡΙΣΗ EMAIL</span>
                    <p class="mt-8 max-w-xl ">Βάλε το email που χρησιμοποιείς περισσότερο (όχι υποχρεωτικά το ακαδημαϊκό). Θα σου στείλουμε ένα κωδικό για να επιβεβαιώσουμε ότι σου ανήκει.</p>
                    <form class="py-10 gap-4 flex flex-col max-w-xl w-full" on:submit={login}>
                        <input type="email" bind:value={typed.email} placeholder="Το email σου" class="p-4 px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full">
                        <div class="h-captcha" data-sitekey="9fcf45e6-2169-4cb0-9749-d9a06148a60b"></div>
                        <span>
                            <button type="submit" class="bg-green-500 p-4 px-10 text-white rounded hovershadow-2xl tracking-wider hover:-mt-2 hover:bg-gray-100 hover:text-black duration-500 transition-all ease-in-out flex items-center gap-4">Επόμενο</button>
                        </span>
                    </form>

                {:else if authentication === AuthenticationStates.AWAITING_CODE}
                    <span class="flex items-center gap-4 text-gray-600 tracking-widest"><PatchCheckFill/> ΕΠΙΒΕΒΑΙΩΣΗ EMAIL</span>
                    <p class="mt-8 max-w-xl ">Σου στείλαμε ένα κωδικό επιβεβαίωσης στο email σου. Πληκτρολόγησέ τον για να αποκτήσεις πρόσβαση στην εφαρμογή.</p>
                    <form class="py-10 flex justify-center items-center max-w-xl w-full" on:submit={validate}>
                        <input type="tel" bind:value={typed.verificationCode} placeholder="Κωδικός επιβεβαίωσης" class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full">
                        <span>
                            <button type="submit" class="bg-green-500 p-4 px-10 text-white rounded hover:-mr-1 hover:shadow-2xl tracking-wider hover:bg-gray-100 hover:text-black duration-500 transition-all ease-in-out flex items-center gap-4">Είσοδος</button>
                        </span>
                    </form>
                {:else if authentication === AuthenticationStates.LOGGED_IN}
                    <span class="flex mb-10">
                    {#if producer.previousApplication}
                        <span class="flex items-center gap-4 text-gray-600 tracking-widest"><BoxArrowUp/>ΕΠΕΞΕΡΓΑΣΙΑ ΑΙΤΗΣΗΣ</span>
                        {:else}
                        <span class="flex items-center gap-4 text-gray-600 tracking-widest"><PencilSquare/>ΥΠΟΒΟΛΗ ΑΙΤΗΣΗΣ </span>
                    {/if}

                    </span>
                    <span class="mb-10 -mt-7 text-gray-700 text-sm">
                        Έχει γίνει ταυτοποίηση με το email: <span class="text-blue-400">{producer.email}</span>
                    </span>

                    <!--                    <span class="-mb-3 px-10 bg-white" style="z-index: 1">-->
<!--                <span>ΚΑΤΑΣΤΑΣΗ:</span>-->
<!--                        {#if producer.applicationStatus === ApplicationStates.NOT_SUBMITED}-->
<!--                    <span class="font-bold text-gray-500">ΔΕΝ ΕΧΕΙ ΥΠΟΒΛΗΘΕΙ</span>-->
<!--                    {:else if producer.applicationStatus === ApplicationStates.PENDING_REVIEW}-->
<!--                    <span class="font-bold text-yellow-500">ΥΠΟ ΕΞΕΤΑΣΗ</span>-->
<!--                    {:else if producer.applicationStatus === ApplicationStates.REJECTED}-->
<!--                    <span class="font-bold text-red-500">ΑΠΟΡΡΙΦΘΗΚΕ</span>-->
<!--                    {:else if producer.applicationStatus === ApplicationStates.APPROVED}-->
<!--                    <span class="font-bold text-green-500">ΕΓΓΡΙΘΗΚΕ</span>-->
<!--                {/if}-->
<!--            </span>-->
                    <form class="max-w-2xl w-full flex flex-col gap-6" on:submit={apply}>
                        <span class="flex flex-col gap-4 justify-center">
                            <input placeholder="Ονοματεπώνυμο" class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full" type="text" bind:value={producer.fullName} required>
                        </span>
                        <span class="flex flex-col gap-4 justify-center">
                            <input placeholder="Κινητό Τηλέφωνο" class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full" type="text" bind:value={producer.mobile} required>
                        </span>
                        <span class="flex flex-col gap-4 justify-center">
                            <input placeholder="Τμήμα & Ίδρυμα Φοίτησης" class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full" type="text" bind:value={producer.school} required>
                        </span>
                        <span class="flex flex-col gap-4 justify-center">
                            <input placeholder="Είδος μουσικής" class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full" type="text" bind:value={producer.musicGenre} required>
                        </span>
                        <span class="flex flex-col gap-4 justify-center">
                            {#if producer.previousApplication}
                                <a href={producer.previousApplication.artistsList} target="_blank" class="text-blue-500 font-bold">Πάτα για να δείς τη λίστα που ανέβασες</a> ή αντικατέστησέ τη:
                                {:else}
                                <label>Η λίστα με τους καλλιτέχνες σου:</label>
                            {/if}
                            <input class="p-4 min-w-[250px] px-6 rounded bg-gray-50 transition-all duration-400 placeholder-black w-full" type="file">
                        </span>
                        <span class="flex items-center gap-1">
                            <button type="submit" class="bg-green-500 p-4 px-10 text-white rounded hover:-mt-1 hover:shadow-2xl tracking-wider hover:bg-gray-100 hover:text-black duration-500 transition-all ease-in-out flex items-center gap-4">ΥΠΟΒΟΛΗ</button>
                            <span class="-mt-3 bg-white px-10 tracking-wider text-gray-600 cursor-pointer" on:click={producer.logout()}>ΑΠΟΣΥΝΔΕΣΗ</span>

                        </span>
                    </form>
                {/if}
            {:else}
                <span class="flex gap-5 items-center tracking-wider text-gray-700">
                    <Jumper size="60" color="#10b981" unit="px" duration="1.5s"></Jumper> Περίμενε ...
                </span>
            {/if}
        </div>
        <span></span>
    </div>
    <div class="w-full md:w-1/2 " style="background: url(https://assets.poiw.org/richard-horvath-cPccYbPrF-A-unsplash.jpg) no-repeat center center fixed;
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
<script lang="ts">
    import Logo from "$lib/logo.svelte"
    import Producer from "../classes/producer";
    import {AuthenticationStates} from "$lib/authenticationStates"
    import {ApplicationStates} from "$lib/applicationStates";
    import { Jumper } from 'svelte-loading-spinners'
    import {onMount} from "svelte";
    import {
        PersonCircle,
        PatchCheckFill,
        BoxArrowUp,
        PencilSquare
    } from "svelte-bootstrap-icons";
    let typed = {
        email: "",
        verificationCode: ""
    }
    let loaded = false;
    let authentication: AuthenticationStates = AuthenticationStates.PROCESSING;
    let producer: Producer;

    let load = new Promise(resolve => {
        window.onload = () => {
            resolve()
        }
    })

    onMount(async function(){
        producer = new Producer();
        await producer.checkIfAlreadyLoggedIn();
        // authentication = producer.getAuthentication();
        setInterval(async function(){
            authentication = producer.getAuthentication();
        }, 100)
    })

    let login = async (event) => {
        event.preventDefault();
        let error = await producer.requestLogin(typed.email);
        if(error) alert(error);
    }

    let validate = async (event) => {
        event.preventDefault();
        let error = await producer.validateLogin(typed.verificationCode);
        if(error) return alert(error);
    }

    let apply = async (event) => {
        event.preventDefault();
        if(producer.previousApplication) if(!confirm("Έχεις ήδη υποβάλει μια αίτηση. Αν την ξανα-υποβάλεις, η παλιά θα διαγραφεί και θα πρέπει να επανεξεταστεί από τη ροή. Θέλεις να συνεχίσεις;")) return;
        await producer.apply();
    }

</script>
<svelte:head>
    <title>Αίτηση υποψήφιων παραγωγών STUDIO FM1</title>
<!--    <script src="https://js.hcaptcha.com/1/api.js" async defer></script>-->
</svelte:head>
