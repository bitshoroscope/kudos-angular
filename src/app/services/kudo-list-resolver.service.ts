import { DBService } from './db.service';
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class KudoListResolver implements Resolve<any> {
    constructor(private dbService: DBService) {

    }

    resolve(){
        return this.dbService.getKudos().pipe(map(kudosList => kudosList))
    }
}