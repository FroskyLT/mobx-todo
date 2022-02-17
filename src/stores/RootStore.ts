import { observable, computed, action, makeObservable } from "mobx";

import { TaskStore } from "./TaskStore";

export class RootStore {
    @observable private _tasks: TaskStore[];
    @observable private _newTaskTitle: string;

    @computed
    public get tasks() {
        return this._tasks;
    }

    @computed
    public get newTaskTitle() {
        return this._newTaskTitle;
    }

    constructor() {
        this._tasks = [];
        this._newTaskTitle = "";

        makeObservable(this);
    }

    @action.bound
    public setNewTaskTitle(title: string) {
        this._newTaskTitle = title;
    }

    @action.bound
    public addTask() {
        const newTask = new TaskStore(this, this._newTaskTitle);
        this._tasks.push(newTask);

        this._newTaskTitle = "";
    }

    @action.bound
    public deleteTask(task: TaskStore) {
        this._tasks.splice(this._tasks.indexOf(task), 1);
    }
}