import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { ITask } from '@/shared/types/task'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

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
    <div>
      <div className='flex justify-between'>
        <span
          ref={textRef}
          className={task.isCompleted ? 'text-muted-foreground' : undefined}
        >
          {task.text}
        </span>
        <div>
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
    </div>
  )
}

export const StubTodoItem: FC = () => {
  return (
    <div>
      <div className='flex justify-center'>No tasks added yet</div>
    </div>
  )
}
