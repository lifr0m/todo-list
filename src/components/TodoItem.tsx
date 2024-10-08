import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { ITask } from '@/shared/types/task'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

type IParams = {
  task: ITask
  isLast: boolean
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const TodoItem: FC<IParams> = ({ task, isLast, setTasks }) => {
  const textRef = useRef<HTMLSpanElement>(null)

  const markDone = (): void => {
    setTasks((prev: ITask[]): ITask[] => {
      return prev.map((task) =>
        task.text === textRef.current!.textContent
          ? { ...task, isCompleted: true }
          : task
      )
    })
  }

  const deleteTask = (): void => {
    setTasks((prev: ITask[]): ITask[] => {
      return prev.filter((task) => task.text != textRef.current!.textContent)
    })
  }

  return (
    <>
      <div className='flex justify-between'>
        <span
          ref={textRef}
          className={clsx(task.isCompleted && 'text-muted-foreground', 'mr-4')}
        >
          {task.text}
        </span>
        <div className='flex items-center'>
          {!task.isCompleted && (
            <Button className='mr-2' onClick={markDone}>
              Done
            </Button>
          )}
          <Button variant='destructive' onClick={deleteTask}>
            Delete
          </Button>
        </div>
      </div>
      {!isLast && <Separator className='my-2' />}
    </>
  )
}

export const StubTodoItem: FC = () => {
  return <div className='flex justify-center'>No tasks added yet</div>
}
