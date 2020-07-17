
export interface ExerciseRequest {
    headers : {'Content-Type': 'application/json'};
    daily_exercises: number[];
    target: number;
}