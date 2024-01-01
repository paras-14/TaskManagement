import React from 'react';
import Timesheet from '../Timesheet/Timesheet';
import Taskmanager from '../Taskmanager/Taskmanager';
import LeaveManagement from '../LeaveManagement/LeaveManagement';
import Integrations from '../Integrations/Integrations';
import AdminToolbar from '../AdminToolbar/AdminToolbar';
import Payroll from '../Payroll/Payroll';

const Middle = ({ selectedComponent }) => {
  return (
    <div>
    {selectedComponent === 'Timesheet' && <Timesheet/>}
    {selectedComponent === 'TaskManager' && <Taskmanager />}
    {selectedComponent === 'LeaveManagement' && <LeaveManagement />}
    {selectedComponent === 'Integrations' && <Integrations />}
    {selectedComponent === 'AdminToolbar' && <AdminToolbar />}
    {selectedComponent === 'Payroll' && <Payroll />}
    </div>
  );
}

export default Middle;

