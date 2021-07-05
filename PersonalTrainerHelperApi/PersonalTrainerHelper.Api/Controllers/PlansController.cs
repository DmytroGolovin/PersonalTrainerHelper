using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Plans.Commands;
using PersonalTrainerHelper.Logic.Plans.Dto;
using PersonalTrainerHelper.Logic.Plans.Queries;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlansController : ApiController
    {
        private readonly ILogger<PlansController> _logger;

        public PlansController(ILogger<PlansController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<PaginatedResponse<PlanDto>>> GetWithSearchModel([FromQuery] GetPlansWithFiltersQuery query)
        {
            return await Mediator.Send(query);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PlanDto>> Get(int id)
        {
            return await Mediator.Send(new GetPlanByIdQuery { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreatePlanCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<int>> Update(UpdatePlanCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete]
        public async Task<ActionResult<int>> Delete(DeletePlanCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
