export class Car {
    constructor(pavadinimas, modelis, spalva) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacityLitres = 66;
        this.averageFuelConsumptionLitres = 5.2;
        this.engineIsOn = false; 
        this.speed = 0;
    }


    startEngine() {
        if(this.engineIsOn === true) {
            return 'Įjungto variklio negalima įjungti dar kartą, sugadinsite starterį!';
        } else {
            return 'Variklis yra įjungtas.'
        }
    }

    engineOff () {
        if (this.engineIsOn === false) {
            return 'Variklis yra išjungtas, dar kartą to padaryti negalima.';
        } else {
            return 'Variklis yra išjungtas.'
        }
    }
    
    



}