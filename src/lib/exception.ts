
// custom error with authentication
export class AuthRequiredError extends Error{
    constructor(message  = "Auth is required"){
        super(message);
        this.name ='AuthRequiredError'
    }
}