export class ApiRes {
    constructor(statusCode=200,data=null,message="Success") {
        this.statusCode =statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}