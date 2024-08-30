import { FC, useState } from 'react'
import { TodoAddItem } from '@/components/TodoAddItem'
import { TodoItemList } from '@/components/TodoItemList'
import { ITask } from '@/shared/types/task'

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div className='m-auto w-[48rem] max-w-[calc(100%-4rem)]'>
      <TodoAddItem tasks={tasks} setTasks={setTasks} />
      <TodoItemList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}
