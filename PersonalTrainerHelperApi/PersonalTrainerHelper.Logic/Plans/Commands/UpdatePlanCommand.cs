using MediatR;

namespace PersonalTrainerHelper.Logic.Plans.Commands
{
    public class UpdatePlanCommand : IRequest<int>
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
