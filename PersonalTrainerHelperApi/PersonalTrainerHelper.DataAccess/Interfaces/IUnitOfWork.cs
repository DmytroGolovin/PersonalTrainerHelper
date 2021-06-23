using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalTrainerHelper.DataAccess.Interfaces
{
    public interface IUnitOfWork
    {
        IClientRepository Clients { get; }
    }
}
