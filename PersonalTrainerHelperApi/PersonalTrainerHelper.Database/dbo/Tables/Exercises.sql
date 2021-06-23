CREATE TABLE [dbo].[Exercises] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [PersonalTrainerId] NVARCHAR (256)  DEFAULT (N'') NOT NULL,
    [Title]             NVARCHAR (128)  DEFAULT (N'') NOT NULL,
    [Description]       NVARCHAR (1024) DEFAULT (N'') NOT NULL,
    [VideoUrl]          NVARCHAR (256)  DEFAULT (N'') NOT NULL,
    [PlanId]            INT             NULL,
    CONSTRAINT [PK_Exercises] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Exercises_Plans_PlanId] FOREIGN KEY ([PlanId]) REFERENCES [dbo].[Plans] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_Exercises_PlanId]
    ON [dbo].[Exercises]([PlanId] ASC);

