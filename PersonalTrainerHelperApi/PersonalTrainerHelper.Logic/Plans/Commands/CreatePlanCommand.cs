using MediatR;

namespace PersonalTrainerHelper.Logic.Plans.Commands
{
    public class CreatePlanCommand : IRequest<int>
    {
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
