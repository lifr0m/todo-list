import { FC } from 'react'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from '@/components/Header'
import { TodoList } from '@/components/TodoList'
import './App.css'

export const App: FC = () => {
  return (
    <ThemeProvider storageKey='theme'>
      <Header />
      <TodoList />
    </ThemeProvider>
  )
}
