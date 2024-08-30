import { FC, Dispatch, SetStateAction } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ITask } from '@/shared/types/task'
import { TodoItem, StubTodoItem } from '@/components/TodoItem'

type IParams = {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const TodoItemList: FC<IParams> = ({ tasks, setTasks }) => {
  return (
    <ScrollArea className='h-96 rounded-md border p-4'>
      {tasks.length ? (
        tasks
          .toSorted((task1, task2) => +task1.isCompleted - +task2.isCompleted)
          .map((task, i, { length }) => (
            <TodoItem
              key={i}
              task={task}
              isLast={i + 1 === length}
              setTasks={setTasks}
            />
          ))
      ) : (
        <StubTodoItem />
      )}
    </ScrollArea>
  )
}
