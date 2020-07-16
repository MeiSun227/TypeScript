type result = string | number

interface ExerciseResult {
    periodLength: number;
    trainingDay: number;
    target: number;
    average: number;
    rate: number;
    rateDescription: String;
    success: boolean;
}
// const parseArguments = (args: Array<number>): ExerciseResult => {
//     if (Number(args[3]) === 0)
//         throw new Error("Height cannot be zero or negative")

//     if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//         return {
//             weight: Number(args[2]),
//             height: Number(args[3])
//         }
//     } else {
//         throw new Error('Provided values were not numbers!');
//     }
// }
let hoursList: number[]

const targetSuccessfull = (hoursList: number[], target: number): boolean => {
    const avgHour = avgHours(hoursList)
    if (target > avgHour) {
        return false
    } else {
        return true
    }
}
const findTrainingDay = (hoursList: number[]): number => {
    return hoursList.filter((hour) => hour !== 0).length
}

const avgHours = (hoursList: number[]): number => {
    return hoursList.reduce((p, c) => p + c, 0) / hoursList.length
}

const rateMeasure = (avgs: number, goal: number): number => {
    if (avgs >= goal) {
        return 3
    } else if (avgs >= goal / 2) {
        return 2
    } else {
        return 1
    }
}

const getDesciption = (rating: number): string => {
    if (rating === 3) {
        return 'excellent job'
    } else if (rating === 2) {
        return 'not too bad but could be done better'
    } else {
        return 'poor work'
    }
}


const exerciseCalculate = (arr_hoursList: number[], target: number): ExerciseResult => {
    const success = targetSuccessfull(arr_hoursList, target)
    const trainingDay = findTrainingDay(arr_hoursList)
    const averageHour = avgHours(arr_hoursList)
    const rating = rateMeasure(averageHour, target)
    const ratingDescription = getDesciption(rating)
    return {
        periodLength: arr_hoursList.length,
        trainingDay: trainingDay,
        target: target,
        average: averageHour,
        rate: rating,
        rateDescription: ratingDescription,
        success: success
    }
}


try {
    const targetValue: number = Number(process.argv[2])
    const hoursList = process.argv.slice(3).map(hour => Number(hour))
    const exerciseResult: ExerciseResult = exerciseCalculate(hoursList, targetValue)
    console.log(exerciseResult)
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}
