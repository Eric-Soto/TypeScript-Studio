import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket{
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = []
    astronauts: Astronaut[] = []
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[] ): number{

        let massKg: number = 0
        for(let i = 0; i < items.length; i++){
            massKg += items[i].massKg
        }
        
        return massKg
        }

    currentMassKg(): number{

        let FullMassKg: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return FullMassKg
    }

    canAdd(item: Payload): boolean{
        
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true
        }
        else{
            return false
        }
    }

    addCargo(cargo:Cargo): boolean{
        
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true
        }
            return false  
    }

    addAstronaut(astronaut:Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true
        }
            return false
    }

    }