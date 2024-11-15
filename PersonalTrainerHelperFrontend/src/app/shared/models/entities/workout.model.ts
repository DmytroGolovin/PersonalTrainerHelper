import { WorkoutExercise } from "./workout-exercise.model";

export class Workout{
    id: number;
    personalTrainerId: string;

    title?: string;
    description?: string;

    exercises?: Array<WorkoutExercise> = [];
}