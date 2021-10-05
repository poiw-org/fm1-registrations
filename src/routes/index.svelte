<script lang="ts">
    import {onMount} from "svelte"
    import Logo from "$lib/logo.svelte";
    import {
        ArrowRight,
        Clock,
        Heart,
        People,
        Calendar,
        MusicNoteList
    } from "svelte-bootstrap-icons";

    onMount(async ()=>{

    })

</script>
<div class="flex flex-col xl:flex-row min-h-[100vh]">
    <div class="px-10 md:px-40 py-10 flex flex-col justify-between w-full xl:w-1/2 ">
        <Logo />
        <div class="flex gap-9 items-left">
        </div>
        <span class="text-2xl tracking-widest text-left"> <strong> PRODUCER ALERT </strong> </span>
        <hr>
        <p class="text-md tracking-wide my-3 tracking-widest text-left">
            Βοήθησε μας να βρούμε τον επόμενο παραγωγό μας! Ο STUDIO FM1 105.4 Ραδιοφωνικός Σταθμός ΕΛ.ΜΕ.ΠΑ. ίσως να ψάχνει εσένα.
        </p>
        <br>
        <p class="text-xl tracking-wide my-3 tracking-widest text-left">
            Η διαδικασία είναι πιο απλή και από το να φτιάξεις ένα <b>🍞 τοστ.</b>
        </p>
        <p class="text-red-500 font-bold">Διάβασε όσα σου έχουμε γράψει παρακάτω πρώτα! Έχουμε γράψει σημαντικές πληροφορίες και οδηγίες για την ένταξή σου στον σταθμό!</p>

        <span class="flex py-10 ">
                    <a href="/app" class="bg-green-500 p-4 px-10 text-white rounded hovershadow-2xl tracking-wider hover:-mt-2 hover:bg-gray-100 hover:text-black duration-500 transition-all ease-in-out flex items-center gap-4">ΚΑΝΕ ΑΙΤΗΣΗ <ArrowRight/></a>
        </span>
        <span>Η μόνη προϋπόθεση για να γίνεις μέλος, είναι να ανήκεις στην Φοιτητική Κοινότητα του Ηρακλείου (<b>να είσαι ενεργός φοιτητής σε Ελληνικό Μεσογειακό Πανεπιστήμιο ή Πανεπιστήμιο Κρήτης</b>).</span>

        <span class="py-4 font-bold text-xl">Τι πρέπει να γνωρίζεις για τον σταθμό:</span>
        <ul class="list-decimal">
            <hr class="my-3">
            <li>Δεν είσαι μόνος! Στο πρώτο σου εξάμηνο στον σταθμό <b>σε κάθε εκπομπή θα είναι μαζί σου ένας παλαιότερος Εφεμίτης</b> (Μέλος του Σταθμού) για να σε καθοδηγεί και <b>να σε συμβουλεύει στις εκπομπές σου</b>. Αυτός ο Εφεμίτης είναι μέλος της <b>«ΡΟΗΣ»</b>, η οποία είναι υπεύθυνη για ότι βγαίνει στον «αέρα».</li>
            <hr class="my-3">
            <li class="">Διάρκεια εκπομπής! Στο πρώτο σου εξάμηνο η διάρκεια της εκπομπής σου θα είναι <b>1 ώρα την εβδομάδα</b> για να μάθεις το Studio και να πάρεις τον αέρα των μηχανημάτων ώστε <b>να μπορείς να κάνεις τις εκπομπές σου μόνος σου.</b></li>
            <hr class="my-3">
            <li >
                <span>
                    <span class="text-center">Δικαιώματα και Υποχρεώσεις σαν μέλος:</span>

                    <span class="flex gap-6 item-center justify-center p-4">
<!--                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">-->
<!--                            <span class="text-center">Διάρκεια εκπομπής</span>-->
<!--                            <span><Clock/></span>-->
<!--                            <span class="text-center">1 ώρα / εβδομάδα</span>-->
<!--                        </span>-->
                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                            <span class="text-center">Όλα τα μέλη του StudioFm1</span>
                            <span><Heart/></span>
                            <span class="text-center">Είναι <strong>ίσα</strong></span>
                        </span>
                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                            <span class="text-center"> Oι αποφάσεις παίρνονται </span>
                            <span><People/></span>
                            <span class="text-center">από <strong>κοινού</strong></span>
                        </span>
                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                            <span class="text-center">Πρέπει να είσαι συνεπής στις εκπομπές σου </span>
                            <span><Calendar/></span>
                            <span class="text-center">Δικαίωμα <strong>2 απουσιών</strong></span>
                        </span>
                    </span>
<!--                    <ul class="list-disc pl-4">-->
<!--                        <li>Όλα τα μέλη του STUDIO FM1 είναι ισάξια.</li>-->
<!--                        <li>Όλες οι αποφάσεις παίρνονται από κοινού στις «Συνελεύσεις» του Σταθμού (κατά μέσο όρο 3 κάθε εξάμηνο)</li>-->
<!--                        <li>Όλα τα μέλη του σταθμού έχουν την «υποχρέωση» να κάνουν τις εκπομπές που έχουν αναλάβει (παίρνουμε απουσίες.)</li>-->
<!--                        <li>Έχεις δικαίωμα να κάνεις μέχρι 2 απουσίες από την εκπομπή σου, στην 3η η εκπομπή σου διαγράφεται από το εβδομαδιαίο πρόγραμμα (μην ανησυχείς δεν παίρνουμε κεφάλια)</li>-->
<!--                    </ul>-->
                </span>

            </li>
        </ul>
            <hr class="my-3">
        Ο Σταθμός δεν λαμβάνει καμία χρηματοδότηση, όπως επίσης δεν έχει έσοδα από διαφημίσεις. Τα μόνα έσοδα του Σταθμού προέρχονται από τις συνδρομές των μελών του και από τις δράσεις που κάνει.

        <div class="p-4 flex justify-center items-center gap-6">

                <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                            <span class="text-center">Η εγγραφή/επανεγγραφή έχει</span>
                            <span class="text-2xl">5€</span>
                            <span class="text-center">εφάπαξ "κόστος"</span>
                        </span>
                <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                            <span class="text-center">  Η συνδρομή είναι </span>
                            <span class="text-2xl">10€</span>
                            <span class="text-center">ανά <strong>εξάμηνο.</strong></span>
                        </span>
                <ul></ul>
            </div>
            <hr class="my-3">
            <div class=" p-4 justify-center items-center">
                <span class="text-center font-bold justify-center items-center"> <p>Τι χρειαζόμαστε από εσένα:</p> </span>
                <span class="flex  gap-6 item-center justify-center p-4">

                                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                                            <span class="text-center">Μία ενδεικτική λίστα 100+ καλλιτεχνών</span>
                                            <span><MusicNoteList /></span>
                                            <span class="text-center">ανα είδος που θες να κάνεις εκπομπή, σκαναρισμένη (χειρόγραφη) ή δακτυλογραφημένη στον υπολογιστή</span>
                                        </span>
                                        <span class="p-5 shadow-md rounded flex flex-col items-center justify-center gap-2.5">
                                            <span class="text-center">Μια δοκιμαστική ηχογράφηση εκπομπής</span>
                                            <span><Clock /></span>
                                            <span class="text-center">30-40 λεπτών την οποία θα κάνουμε στο studio μαζί σου</span>
                                        </span>
                    </span>
            </div>
            <hr class="my-3">

        <ul class="list-decimal pt-4">
            <span class="font-bold">Η διαδικασία για να κάνεις αίτηση, αναλυτικά:</span>
                <li>Γράψε μια λίστα με 100+ καλλιτέχνες ανα είδος που θες να κάνεις εκπομπή. Για παράδειγμα, γράψε 100+ καλλιτέχνες της Ροκ, αν η εκπομπή που θες να κάνεις, θα έχει κατα κύριο λόγο Ροκ τραγούδια.</li>
                <li>Όταν έχεις έτοιμη την λίστα με τους καλλιτέχνες, επέστρεψε στο site εδώ</li>
                <li>Πάτησε το πράσσινο κουμπί «ΚΑΝΕ ΑΙΤΗΣΗ»</li>
                <li>Συμπλήρωσε το email σου (ΜΗΝ ΚΛΕΙΣΕΙΣ ΤΗΝ ΚΑΡΤΕΛΑ)</li>
                <li>Συμπλήρωσε τον 6ψήφιο κωδικό που έλαβες στο email που δήλωσες</li>
                <li>Συμπλήρωσε τα στοιχεία σου και ανέβασε την λίστα σου (ΠΡΟΣΟΧΗ το αρχείο που θα ανεβάσεις θα πρέπει να είναι .pdf, .docx, .doc, .txt, .odt ή .odf)</li>
                <li>Πάτησε το κουμπί «ΥΠΟΒΟΛΗ»</li>
                <li>Κλείσε ραντεβού για το δοκιμαστικό σου:</li>
                <span>
                    <ul class="list-disc pl-4">
                        <li>Μέσω τηλεφώνου (12:00 με 16:00) στο 2810315445</li>
                        <li>Μέσω  Internet πατώντας το κουμπί «ΡΑΝΤΕΒΟΥ» (θα εμφανιστεί αφού υποβάλεις την αίτησή σου)</li>
                    </ul>

                </span>
                <li>Έρχεσαι στον χώρο του Σταθμού για να ηχογραφήσεις!</li>
        </ul>
        <h4 class="mt-2 text-xl font-bold">Αυτό ήταν!</h4>
        <span>θα ενημερωθείς μετά το πέρας των δοκιμαστικών για την επιτυχία σου!</span>



        <span class="pt-10">Για οποιαδήποτε απορία σου μπορείς να μας καλέσεις στο 2810315445 ή να έρθεις στον χώρο μας να τα πούμε από κοντά καθημερινά 12:00 με 16:00!</span>



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