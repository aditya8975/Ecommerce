import { start } from "repl";

export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favoritate:boolean=false;

    tags?:string[];
    imageUrl!:string;

   origins!:string[];
}