import API from "../lib/api"
import {AuthenticationStates} from "$lib/authenticationStates";
import {ApplicationStates} from "$lib/applicationStates";

export default class Producer{
    declare email: string;
    declare mobile: string;
    declare fullName: string;
    declare school: string;
    declare musicGenre: string;
    declare artistsList: any;
    declare previousApplication: Producer;
    declare token: string;
    declare expires: number;
    declare protected authentication: AuthenticationStates;
    declare applicationStatus: ApplicationStates;

    constructor() {
        this.authentication = AuthenticationStates.PROCESSING;
        this.applicationStatus = ApplicationStates.NOT_SUBMITED;
    }

    public async checkIfAlreadyLoggedIn(){

        let previousLogin = localStorage.getItem("fm1-registrations-login");

        if(previousLogin){
            let {email, token, expires} = JSON.parse(previousLogin);
            if(parseInt(expires) > Date.now()){
                this.email = email;
                this.token = token;
                this.expires = expires;
                this.authentication = AuthenticationStates.LOGGED_IN;

                await this.processPreviousApplication();
                return
            }
        }
        this.authentication = AuthenticationStates.LOGGED_OUT;

    }

    public getAuthentication(): AuthenticationStates{
        return this.authentication;
    }

    private async processPreviousApplication(): Promise<void>{
        this.applicationStatus = ApplicationStates.PROCESSING;
        let response = await API.post("/previousApplication",{
            email: this.email,
            token: this.token
        })

        if(response.data.application) this.previousApplication = response.data.application;

        if(this.previousApplication){
            let {fullName, artistsList, mobile, applicationStatus, school, musicGenre} = this.previousApplication;
           this.fullName = fullName;
           this.mobile = mobile;
           this.school = school;
           this.musicGenre = musicGenre;
           this.artistsList = artistsList;
           this.applicationStatus = applicationStatus;
        }
        else this.applicationStatus = ApplicationStates.NOT_SUBMITED;
    }
    public async requestLogin(email: string): Promise<void | string>{
        this.authentication = AuthenticationStates.PROCESSING
        this.email = email;
        let response = await API.post(`/sendVerificationCode`,{
            email
        })
        if(response.data !== true) return response.data
        this.authentication = AuthenticationStates.AWAITING_CODE;
        return
    }

    public async validateLogin(verificationCode): Promise<void|any>{
        this.authentication = AuthenticationStates.PROCESSING
        let error;
        try{
            let response = await API.post(`/verify`,{
                email: this.email,
                verificationCode
            });
            // if(typeof response.data == 'string') {
            //     console.log(response.data)
            //     return
            // }

            let {token, expires, application} = response.data;
            this.token = token;
            this.expires = expires;
            this.previousApplication = application;
            await this.processPreviousApplication()

            localStorage.setItem("fm1-registrations-login", JSON.stringify({
                token: token,
                email: this.email,
                expires
            }))

            this.authentication = AuthenticationStates.LOGGED_IN;
        }catch (error) {
            this.authentication = AuthenticationStates.LOGGED_OUT
            return{
                error
            }
        }
    }

    public async logout(): Promise<void>{
        if(!confirm("Θέλεις σίγουρα να αποσυνδεθείς;")) return
        await API.post(`/logout`,{
            email: this.email,
            token: this.token
        });
        localStorage.removeItem("fm1-registrations-login");
        window.location.reload();
    }

    public async apply(){
        let self = this;
        this.applicationStatus = ApplicationStates.PROCESSING;
        let file,err;
        try{
           file = await getBase64(this.artistsList)
        }catch (e) {
            alert("Πρέπει να επιλέξεις ένα αρχείο εικόνας/pdf/κειμένου για τη λίστα με τους καλλιτέχνες.")
            self.applicationStatus = ApplicationStates.NOT_SUBMITED;
            return
        }
        await API.post("/apply",{
            token: this.token,
            application:{
                fullName: this.fullName,
                mobile: this.mobile,
                email: this.email,
                school: this.school,
                musicGenre: this.musicGenre,
                artistsList: file
            }
        })
            .catch((e)=>{
                self.applicationStatus = ApplicationStates.NOT_SUBMITED;
                err=e;
                alert(e.response.data);
            })
            .then(()=>{
                if(err) return;
                self.applicationStatus = ApplicationStates.PENDING_REVIEW
                alert("Η αίτηση σου ανέβηκε! Θα εξεταστεί από τη ροή του FM1 και θα λάβεις τηλεφώνημα ή email για την εξέλιξή της. Μπορείς να υποβάλεις εκ νέου τη φόρμα για να τροποποιήσεις την αίτηση.")
            })
    }

}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        //@ts-ignore
        reader.readAsDataURL(document.querySelector('input[type=file]').files[0]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}