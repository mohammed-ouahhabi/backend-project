// src/services/rideService.ts
export function calculatePrice(distance: number, startTime: string, duration: number): number {
    let price = 1; // Charge initiale de 1 EUR

    console.log(`Calculating price for distance: ${distance}, startTime: ${startTime}, duration: ${duration}`);

    // Calcul du prix en fonction de la distance parcourue
    price += (distance / 0.2) * 0.5; 
    console.log(`Price after distance calculation: ${price}`);

    const startHour = new Date(startTime).getHours();
    console.log(`Start hour: ${startHour}`);

    // Ajouter 0.50 EUR si la course commence entre 20h et 6h
    if (startHour >= 20 || startHour < 6) {
        price += 0.5;
        console.log(`Price after night surcharge: ${price}`);
    }

    // Ajouter 1 EUR si la course commence pendant les périodes de pointe (16h - 19h)
    if (startHour >= 16 && startHour <= 19) {
        price += 1;
        console.log(`Price after peak hour surcharge: ${price}`);
    } else {
        console.log("Peak hour surcharge not applied");
    }

    console.log(`Final price: ${price}`);
    return price;
}
