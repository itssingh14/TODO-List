import { Injectable } from "@angular/core";

@Injectable()
export class todoservices{
    tlist = [];
    getlist(){
        return this.tlist;
    }
    setlist(name){
        this.tlist.push(name);
    }
    dellist(name){
        this.tlist.splice(this.tlist.indexOf(name),1);
    }
}