export default class ToDoItem {
    private id: string = new Date().getTime().toString();

    constructor(public description: string, public completed: boolean = false) {

    }

    toString = (): string => {
        return `Task name: ${this.description}, status: ${this.completed} and id: ${this.id}`;
    }
}