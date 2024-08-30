import { FC } from 'react'
import { ModeToggle } from '@/components/theme/mode-toggle'

export const Header: FC = () => {
  return (
    <header className='flex justify-end p-4 mb-12'>
      <ModeToggle />
    </header>
  )
}
