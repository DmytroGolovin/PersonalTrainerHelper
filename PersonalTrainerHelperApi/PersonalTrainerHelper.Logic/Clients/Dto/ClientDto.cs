using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalTrainerHelper.Logic.Clients.Dto
{
    public class ClientDto
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Goals { get; set; }
    }
}
