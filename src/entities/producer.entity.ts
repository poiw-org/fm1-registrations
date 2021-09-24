export default class Producer{
    declare email: string;
    declare phone: string;
    declare fullName: string;
    declare artistsList: string;

    constructor(email: string) {
        this.email = email;
    }

    public async requestLogin(): Promise<void>{

    }
}