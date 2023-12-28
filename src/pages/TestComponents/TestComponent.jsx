import React from 'react'

import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'
import Cards from '../../components/Card/Card'

const TestComponent = () => {
  return (
    <div>
      <h1>Test Components</h1>
      <Table/>
      <Button btnTxt='test' size='md'/>
      <Cards title="Hello" desc="hi i am a developer" />
    </div>
  )
}

export default TestComponent
