import { Request, Response } from "express";
import { Ride } from "../models/rides";
import { calculatePrice } from "../service/rideService";

const rides: Ride[] = [
    {
        id: 1,
        distance: 1,
        startTime: "2023-08-13T13:00:00Z",
        duration: 1200,
        imageUrl: "/images/taxi-2.webp"
    },
    {
        id: 2,
        distance: 8.5,
        startTime: "2023-08-13T13:00:00Z",
        duration: 1600,
        imageUrl: "/images/taxi-2.webp"
    },
    {
        id: 3,
        distance: 10.5,
        startTime: "2023-08-13T13:00:00Z",
        duration: 2000,
        imageUrl: "/images/taxi-3.webp"
    },
    {
        id: 4,  
        distance: 30.5,
        startTime: "2023-08-13T13:00:00Z",
        duration: 3000,
        imageUrl: "/images/taxi-4.webp"
    }
];

export const getRides = (req: Request, res: Response) => {
    const ridesWithPrices = rides.map(ride => ({
        ...ride,
        price: calculatePrice(ride.distance, ride.startTime, ride.duration)
    }));
    res.json(ridesWithPrices);
};
