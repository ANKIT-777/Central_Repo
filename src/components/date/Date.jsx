
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Date.css'
const teamsData = [
  { team: "Salesforce", lastExecution: "2024-12-08 14:35" },
  { team: "ERP", lastExecution: "2024-12-08 12:10" },
  { team: "Pricing", lastExecution: "2024-12-07 18:20" },
  { team: "Retail", lastExecution: "2024-12-07 20:00" },
];

const Dashboard = () => (
    <div className="Table">
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow >
          <TableCell style={{ fontWeight: 'bold', color:'white', fontSize: '20px' }}>Team</TableCell>
          <TableCell style={{ fontWeight: 'bold',color:'white',fontSize: '16px' }}>Last Execution Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {teamsData.map((team, index) => (
          <TableRow key={index} >
            <TableCell style={{ fontWeight: 'bold', color:'white' }}>{team.team}</TableCell>
            <TableCell style={{ fontWeight: 'bold', color:'white' }}>{team.lastExecution}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);

export default Dashboard;
