import { action, computed, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class TaskStore {
    public readonly rootStore: RootStore;

    @observable private _title: string;

    @computed
    public get title() {
        return this._title;
    }

    constructor(rootStore: RootStore, title: string) {
        this.rootStore = rootStore;
        this._title = title;

        makeObservable(this);
    }

    @action.bound
    public setTitle(title: string) {
        this._title = title;
    }

    @action.bound
    public deleteTask() {
        this.rootStore.deleteTask(this);
    }
}