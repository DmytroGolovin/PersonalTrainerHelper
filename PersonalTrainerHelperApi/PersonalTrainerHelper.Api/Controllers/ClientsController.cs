using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalTrainerHelper.Api.Controllers;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Clients.Commands;
using PersonalTrainerHelper.Logic.Clients.Dto;
using PersonalTrainerHelper.Logic.Clients.Queries;
using System.Threading.Tasks;

namespace PersonalTrainerHelperApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ClientsController : ApiController
    {
        private readonly ILogger<ClientsController> _logger;

        public ClientsController(ILogger<ClientsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<PaginatedResponse<ClientDto>>> GetWithSearchModel([FromQuery] GetClientsWithFiltersQuery query)
        {
            return await Mediator.Send(query);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientDto>> Get(int id)
        {
            return await Mediator.Send(new GetClientByIdQuery{ Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateClientCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<int>> Update(UpdateClientCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete]
        public async Task<ActionResult<int>> Delete(DeleteClientCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
