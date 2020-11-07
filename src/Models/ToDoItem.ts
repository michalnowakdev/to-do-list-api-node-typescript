export default class ToDoItem {

    constructor(public description: string, public completed: boolean = false, public id: string = "") {

    }

    toString = (): string => {
        return `Task name: ${this.description}, status: ${this.completed} and id: ${this.id}`;
    }
}