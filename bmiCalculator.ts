
type Result = String;

interface MultiplyValues {
    weight: number;
    height: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
    if (Number(args[3]) === 0)
        throw new Error("Height cannot be zero or negative")

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            weight: Number(args[2]),
            height: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const calculateBmi = (weight: number, height: number): Result => {
    const bmiValue = Math.round((weight / (height * height / 100) * 100))
    if (bmiValue < 18.5) {
        return `Light(Underweight)`
    }
    if (bmiValue < 25) {
        return `Normal (healthy weight)`
    } if (bmiValue > 25 && bmiValue < 40) {
        return `Obesity class (Over weight)`
    }
}

try {
    const { weight, height } = parseArguments(process.argv);
    console.log(calculateBmi(weight, height));
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}

