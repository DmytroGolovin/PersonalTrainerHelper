using System.Collections.Generic;

namespace PersonalTrainerHelper.Core.Responses
{
    public class PaginatedResponse<T> where T : class
    {
        public IEnumerable<T> Items { get; set; }
        public long TotalItems { get; set; }
    }
}
