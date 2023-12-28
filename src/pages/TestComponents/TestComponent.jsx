import React from 'react'

import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'
import Cards from '../../components/Card/Card'

import tasks from '../../pages/TestComponents/tasks.json'

const TestComponent = () => {
  return (
    <div>
      <h1>Test Components</h1>
      <Table dates={Array.from({ length: 31 }, (_, i) => i + 1)} data={tasks} />
      <Button btnTxt='test' size='md'/>
      <Cards title="Hello" desc="hi i am a developer" />
    </div>
  )
}

export default TestComponent
