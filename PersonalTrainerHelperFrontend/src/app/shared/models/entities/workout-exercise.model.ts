import { Exercise } from "./exercise.model";

export class WorkoutExercise{
    id: number;
    workoutId: number;

    exerciseId: number;
    exercise: Exercise;

    quantity: number;
    minRep: number;
    maxRep: number;

    observations: string;
}