// src/services/rideService.test.ts
import { calculatePrice } from "./src/service/rideService";

test('Calculates correct price for a standard ride', () => {
    const price = calculatePrice(2, "2023-08-13T13:00:00Z", 1200);
    expect(price).toBe(6);
});

test('Applies night surcharge correctly', () => {
    const price = calculatePrice(2, "2023-08-13T21:00:00Z", 1200);
    expect(price).toBe(6.5);
});

test('Applies peak hour surcharge correctly', () => {
    const price = calculatePrice(2, "2023-08-13T17:00:00Z", 1200);
    expect(price).toBe(7);
});
