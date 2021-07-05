﻿CREATE TABLE [dbo].[WorkoutExercises]
(
	[Id]                INT     IDENTITY (1, 1) NOT NULL,
    [Order]             INT                     NOT NULL,
    [WorkoutId]         INT                     NOT NULL,
    [ExerciseId]        INT                     NOT NULL,
    CONSTRAINT [PK_WorkoutExercises] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_WorkoutExercises_Workout] FOREIGN KEY ([WorkoutId]) REFERENCES Workouts([Id]),
    CONSTRAINT [FK_WorkoutExercises_Exercise] FOREIGN KEY ([ExerciseId]) REFERENCES Exercises([Id])
)
