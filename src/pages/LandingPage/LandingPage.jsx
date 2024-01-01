import React, { useState } from 'react'
import './LandingPage.css'
import Timesheet from '../Timesheet/Timesheet';
import Taskmanager from '../Taskmanager/Taskmanager';
import LeaveManagement from '../LeaveManagement/LeaveManagement';
import Payroll from '../Payroll/Payroll';
import Integrations from '../Integrations/Integrations';
import Chatbot from '../Chatbot/Chatbot';
import AdminToolbar from '../AdminToolbar/AdminToolbar';
import Footer from '../Footer/Footer';
import Middle from '../Middle/Middle';

function LandingPage() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentClick = (componentName) => {
      setSelectedComponent(componentName);
    };
  
    return (
      <div>
      <div className="container-fluid">
        {/* Top Section */}
        <div className="row">
          <div className="col">
            {/* Content for the top section */}
            <h1>The Top Component</h1>
          </div>
        </div>
  
        {/* Middle Section */}
        <div className="row">
          {/* Left Div */}
          <div className="col-md-3">
            <div className="mb-3">
        <Timesheet onClick={() => handleComponentClick('Timesheet')} />
            </div>
            <div className="mb-3">
              <Taskmanager onClick={() => handleComponentClick('TaskManager')} />
            </div>
            <div className="mb-3">
              <LeaveManagement onClick={() => handleComponentClick('LeaveManagement')} />
            </div>
            <div className="mb-3">
              <Payroll onClick={() => handleComponentClick('Payroll')} />
            </div>
            <div className="mb-3">
              <Integrations onClick={() => handleComponentClick('Integrations')} />
            </div>
            <div className="mb-3">
              <AdminToolbar onClick={() => handleComponentClick('AdminToolbar')} />
            </div>
          </div>
  
          {/* Middle Div */}
          <div className="col-md-6">
            <div>
              You had clicked on <span className='text-danger'><Middle selectedComponent={selectedComponent} /></span> component
            </div>
          </div>
  
          {/* Right Div */}
          <div className="col-md-3">
            {/* Content for the right div */}
            <Chatbot/>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="row">
          <div className="col">
            {/* Content for the bottom section */}
          </div>
        </div>
  
        {/* Footer Section */}
        <Footer/>
      </div>
  
    </div>
  )
}

export default LandingPage

