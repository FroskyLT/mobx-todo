import { observer } from 'mobx-react';

import { PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';

export interface INewTaskProps {
    title: string;
    setTitle: (title: string) => void;
    addTask: () => void;
}

export const NewTask = observer((props: INewTaskProps) => {
    const { title, setTitle, addTask } = props;

    const titleHandler = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setTitle(newValue ?? "");
    };

    return <Stack horizontal>
        <TextField
            placeholder="Your task title..."
            value={title}
            onChange={titleHandler}
        />
        <PrimaryButton
            text="Add"
            disabled={!title}
            onClick={addTask}
        />
    </Stack>;
});
