using FirstMLAppML.Model;
using System;

namespace FirstMLApp {
    class Program {
        static void Main(string[] args) {
            // Add input data
            var input = new ModelInput();
            input.SentimentText = "This is so good";

            // Load model and predict output of sample data
            ModelOutput result = ConsumeModel.Predict(input);
            Console.WriteLine($"Text: {input.SentimentText}\nIs Toxic: {result.Prediction}");
        }
    }
}
