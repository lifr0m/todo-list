import { FC, useRef, Dispatch, SetStateAction } from 'react'
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
    const text = inputRef.current!.value.trim()

    if (!text) return

    if (tasks.some((task) => task.text === text)) return

    setTasks((prev: ITask[]): ITask[] => {
      inputRef.current!.value = ''
      return [{ text, isCompleted: false }, ...prev]
    })
  }

  return (
    <div className='flex mb-4'>
      <Input
        ref={inputRef}
        placeholder='Enter a task'
        onKeyDown={(event) => event.key === 'Enter' && addTask()}
        className='mr-2'
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  )
}
