CREATE TABLE [dbo].[Plans] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [PersonalTrainerId] NVARCHAR (256)  DEFAULT (N'') NOT NULL,
    [Title]             NVARCHAR (128)  DEFAULT (N'') NOT NULL,
    [Description]       NVARCHAR (1024) DEFAULT (N'') NOT NULL,
    CONSTRAINT [PK_Plans] PRIMARY KEY CLUSTERED ([Id] ASC)
);

