using MediatR;

namespace PersonalTrainerHelper.Logic.Plans.Commands
{
    public class DeletePlanCommand : IRequest<int>
    {
        public int Id { get; set; }
    }
}
