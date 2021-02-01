import { PFEStateEnum } from "../enums/pfe-state.enum";

export class Pfe {
    id: number;
    state: PFEStateEnum;
    subject: string;
    private_: boolean;
    rapport: string;
    hosting_enterprise: string;
    valid: boolean;
    constructor(id: number, state: PFEStateEnum,
        subject: string, private_: boolean,
        rapport: string, hosting_enterprise: string, valid: boolean) {
        this.id = id;
        this.state = state;
        this.subject = subject;
        this.private_ = private_;
        this.rapport = rapport;
        this.hosting_enterprise = hosting_enterprise;
        this.valid = valid;

    }
}
