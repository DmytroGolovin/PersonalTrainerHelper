CREATE TABLE [dbo].[Exercises] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [PersonalTrainerId] NVARCHAR (256)  NOT NULL,
    [Title]             NVARCHAR (128)  NOT NULL,
    [Description]       NVARCHAR (1024) NOT NULL,
    [VideoStorageId]    NVARCHAR (256)  NULL,
    [VideoURL]          NVARCHAR (256)  NOT NULL,
    CONSTRAINT [PK_Exercises] PRIMARY KEY CLUSTERED ([Id] ASC)
);