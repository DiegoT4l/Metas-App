export async function requestGoals() {
    const response = await fetch('/goals.json');
    const goals = await response.json();
    return goals;
}

export async function requestGoal() {
    const response = await fetch('/goal.json');
    const goal = await response.json();
    return goal;
}

export async function createGoal() {
    const response = await fetch('/goal.json');
    const newGoal = await response.json();
    console.log('Meta creada: ',newGoal);
    return newGoal;
}

export async function updateGoal(goal) {
    const response = await fetch('/goal.json');
    const updatedGoal = await response.json();
    console.log('Meta actualizada: ',updatedGoal);
    return updatedGoal;
}

export async function deleteGoal() {
    const response = await fetch('/goal.json');
    const deletedGoal = await response.json();
    console.log('Meta eliminada: ',deletedGoal.id);
    return deletedGoal.id;
}