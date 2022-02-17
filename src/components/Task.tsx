import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { IconButton } from '@fluentui/react/lib/Button';

import { TaskStore } from '../stores/TaskStore';

initializeIcons(undefined, { disableWarnings: true });

export interface ITaskProps {
    task: TaskStore;
}
const gapTokens: IStackTokens = {
	childrenGap: 10
}

const taskStyles = mergeStyles({
    backgroundColor: "#0466c8",
    color: "#fff",
    fontWeight: 700,
    padding: "10px",
    border: "2px solid #0466c8",
    borderRadius: "4px"
});

export const Task = (props: ITaskProps) => {
    const { title, deleteTask } = props.task;

    return <Stack className={taskStyles} tokens={gapTokens} horizontal verticalAlign="center" horizontalAlign="start">
        <Stack.Item>{title}</Stack.Item>
        <IconButton
            styles={{ root: { color: "#fff" } }}
            iconProps={{ iconName: "Delete" }}
            onClick={deleteTask}
        />
    </Stack>;
}
