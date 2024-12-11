import { start } from "repl";

export class Shoes{
    id!:number;
    price!:number;
    name!:string;
    favoritate:boolean=false;

    tags?:string[];
    imageUrl!:string;

   origins!:string[];
}
