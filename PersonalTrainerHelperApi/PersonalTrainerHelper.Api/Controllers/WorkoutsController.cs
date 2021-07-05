using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalTrainerHelper.Core.Responses;
using PersonalTrainerHelper.Logic.Workouts.Commands;
using PersonalTrainerHelper.Logic.Workouts.Dto;
using PersonalTrainerHelper.Logic.Workouts.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainerHelper.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ApiController
    {
        private readonly ILogger<WorkoutsController> _logger;

        public WorkoutsController(ILogger<WorkoutsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<PaginatedResponse<WorkoutDto>>> GetWithSearchModel([FromQuery] GetWorkoutsWithFiltersQuery query)
        {
            return await Mediator.Send(query);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkoutDto>> Get(int id)
        {
            return await Mediator.Send(new GetWorkoutByIdQuery { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateWorkoutCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<int>> Update(UpdateWorkoutCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete]
        public async Task<ActionResult<int>> Delete(DeleteWorkoutCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
