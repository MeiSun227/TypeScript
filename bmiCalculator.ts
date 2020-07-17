
type Result = String;



const calculateBmi = (weight: number, height: number): Result => {
    const bmiValue = Math.round((weight / (height * height / 100) * 100))
    if (bmiValue < 18.5) {
        return `Light(Underweight)`
    }
    if (bmiValue < 25) {
        return `Normal (healthy weight)`
    } if (bmiValue > 25 && bmiValue < 40) {
        return `Obesity class (Overweight)`
    }
    return `malformatted parameters`
}

const bmiCalculator = (weight: number, height: number): String => {
    try {
        return calculateBmi(weight, height);
    } catch (e) {
        return 'Something went wrong, error message: ' + e.message;
    }

}
export default bmiCalculator;
