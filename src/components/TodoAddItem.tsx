import { FC, useRef, Dispatch, SetStateAction, KeyboardEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ITask } from '@/shared/types/task'

type IParams = {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const TodoAddItem: FC<IParams> = ({ tasks, setTasks }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const addTask = (): void => {
    if (!inputRef.current!.value) return

    if (tasks.some((task) => task.text === inputRef.current!.value)) return

    setTasks((prev: ITask[]): ITask[] => {
      const text = inputRef.current!.value
      inputRef.current!.value = ''
      return [{ text, isCompleted: false }, ...prev]
    })
  }

  const keyAddTask = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key == 'Enter') addTask()
  }

  return (
    <div className='flex mb-4'>
      <Input
        ref={inputRef}
        placeholder='Enter a task'
        onKeyDown={keyAddTask}
        className='mr-2'
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  )
}
