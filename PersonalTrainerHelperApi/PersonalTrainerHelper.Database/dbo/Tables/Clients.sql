CREATE TABLE [dbo].[Clients] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [PersonalTrainerId] NVARCHAR (256)  NOT NULL,
    [FirstName]         NVARCHAR (64)   NOT NULL,
    [LastName]          NVARCHAR (128)  NOT NULL,
    [Email]             NVARCHAR (256)  NOT NULL,
    [Goals]             NVARCHAR (1024) NOT NULL,
    [PlanId]            INT             NULL,
    CONSTRAINT [PK_Clients] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Clients_Plans_PlanId] FOREIGN KEY ([PlanId]) REFERENCES [dbo].[Plans] ([Id])
);


GO
CREATE NONCLUSTERED INDEX [IX_Clients_PlanId]
    ON [dbo].[Clients]([PlanId] ASC);

