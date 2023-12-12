export class AppError extends Error {

    public status: number;

    constructor(message: string, status: number){
        super(message);
        this.status = status;
    }

    public getMessage(): string {
        return this.message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }

    public getStatus(): number {
        return this.status;
    }   

    public setStatus(status: number): void {
        this.status = status;
    }
}