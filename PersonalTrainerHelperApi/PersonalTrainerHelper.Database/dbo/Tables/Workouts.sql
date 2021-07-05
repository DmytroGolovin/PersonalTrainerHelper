CREATE TABLE [dbo].[Workouts]
(
	[Id]                INT             IDENTITY (1, 1) NOT NULL,
    [PersonalTrainerId] NVARCHAR (256)  NOT NULL,
    [Title]             NVARCHAR (128)  NOT NULL,
    [Description]       NVARCHAR (1024) NOT NULL,
    CONSTRAINT [PK_Workouts] PRIMARY KEY CLUSTERED ([Id] ASC)
)
