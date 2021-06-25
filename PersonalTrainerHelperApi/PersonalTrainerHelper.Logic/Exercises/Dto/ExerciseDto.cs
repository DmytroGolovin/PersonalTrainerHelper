using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalTrainerHelper.Logic.Exercises.Dto
{
    public class ExerciseDto
    {
        public int Id { get; set; }
        public string PersonalTrainerId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string VideoURL { get; set; }
    }

}
