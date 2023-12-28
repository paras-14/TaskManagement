import React from 'react'

import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'
import Cards from '../../components/Card/Card'
import Checkbox from '../../components/Checkbox/CheckBox'
import Data from '../../components/Forms/Data'
import Pagination from '../../components/Paginations/Pagination'

const TestComponent = () => {
  return (
    <div>
      <h1>Test Components</h1>
      <Table/>
      <Button btnTxt='test' size='md'/>
      <Cards title="Hello" desc="hi i am a developer" />
      <div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>CheckBox Component
      </h1>
      <p>without the value below tile is undefined</p>
      <Checkbox></Checkbox> 
      <p>with the value of Checkbox bolow title</p>
      <Checkbox value = "Checkbox"> w</Checkbox>
      <div style={{ marginTop: '20px' }}>
        <p>
          The checkbox above is a simple React component. When checked, it
          Return  "True," and when unchecked, it Return
          "False."
        </p>
      </div>
    </div>
    </div>
     <Data/>
     <Pagination/>
    </div>
  )
}

export default TestComponent
