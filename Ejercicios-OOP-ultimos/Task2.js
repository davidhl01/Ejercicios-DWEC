class Car{
    constructor(model,milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0; 
        this.odometer = 0; 
    }

    fill(gallons){
        this.tank += gallons; 
    };

    drive(distance){

        if (this.tank<=0){
            return "¡Me quedé sin combustible en"+ this.odometer +"millas!"
        }else{
            this.odometer += distance; 
            this.tank -= distance/this.milesPerGallon;
        }
    };




};

