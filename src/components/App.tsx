import React from 'react';
import './app.css';

import { observer } from 'mobx-react';

import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';

import { RootStore } from '../stores/RootStore';
import { NewTask } from './NewTask';
import { Task } from './Task';

interface IAppProps { }

const gapTokens: IStackTokens = {
	childrenGap: 20
}

@observer
class App extends React.Component<IAppProps, {}> {
	private _store: RootStore;

	constructor(props: IAppProps) {
		super(props);

		this._store = new RootStore();
	}

	render() {
		const store = this._store;
		const { tasks, newTaskTitle, setNewTaskTitle, addTask } = store;

		const taskComponents = tasks?.length ? tasks.map((task, index) => <Task key={index} task={task} />) : null;

		return (
			<Stack className="app" tokens={gapTokens}>
				<NewTask
					title={newTaskTitle}
					setTitle={setNewTaskTitle}
					addTask={addTask}
				/>
				<Stack tokens={gapTokens} horizontal wrap>
					{taskComponents}
				</Stack>
			</Stack>
		);
	}

}

export default App;
