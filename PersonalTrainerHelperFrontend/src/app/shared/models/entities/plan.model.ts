import { Exercise } from "./exercise.model";
import { Workout } from "./workout.model";

export class Plan{
    id: number;
    personalTrainerId: string;

    title?: string;
    description?: string;

    workouts?: Array<Workout> = [];
}