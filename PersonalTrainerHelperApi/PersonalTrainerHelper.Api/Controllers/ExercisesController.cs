using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Exercises.Commands;
using PersonalTrainerHelper.Logic.Exercises.Dto;
using PersonalTrainerHelper.Logic.Exercises.Queries;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExercisesController : ApiController
    {
        private readonly ILogger<ExercisesController> _logger;

        public ExercisesController(ILogger<ExercisesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<PaginatedResponse<ExerciseDto>>> GetWithSearchModel([FromQuery] GetExercisesWithFiltersQuery query)
        {
            return await Mediator.Send(query);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseDto>> Get(int id)
        {
            return await Mediator.Send(new GetExerciseByIdQuery { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateExerciseCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<int>> Update(UpdateExerciseCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete]
        public async Task<ActionResult<int>> Delete(DeleteExerciseCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
