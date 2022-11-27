import logo from './logo.svg';
import './App.css';
import{ ResponsiveContainer,BarChart,Bar ,Line,Area ,AreaChart, LineChart, XAxis , YAxis,CartesianGrid,Tooltip ,Legend} from 'recharts'

const data = [
  {
    name:'python',
    student:150,
    fees:10
  },
  {
    name:'javascript',
    student:150,
    fees:12
  },
  {
    name:'wHP',
    student:520,
    fees:13
  },
  {
    name:'PHP',
    student:504,
    fees:104
  },
  {
    name:'PHP',
    student:200,
    fees:105
  },
  {
    name:'PHP',
    student:400,
    fees:108
  },
  {
    name:'PHP',
    student:600,
    fees:104
  },
  {
    name:'PHP',
    student:500,
    fees:104
  },
  {
    name:'PHP',
    student:500,
    fees:103
  },
  {
    name:'PHP',
    student:500,
    fees:10
  },

]

function App() {
  return (
    <>
    <div>
      <h1 className='char-heading'>Line chart</h1>
      <div className="chart">


      <ResponsiveContainer width="100%" height='100%' aspect={3}>
        <AreaChart  width={300} height={200} data={data} margin={{right:40}}>
          <CartesianGrid/>
            <XAxis dataKey='name' interval={'preserveStartEnd'}/>
            <YAxis dataKey='student' />
            <Tooltip/>
            <Legend/>
            <Area dataKey='student' stroke='#8884d8' activeDot={{r:10}}  />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>

    <div>
      <h1 className='char-heading'>Line chart</h1>
      <div className="chart">


      <ResponsiveContainer width="100%" height='100%' aspect={3}>
        <LineChart  width={300} height={200} data={data} margin={{right:40}}>
          <CartesianGrid/>
            <XAxis dataKey='name' tickFormatter={(value)=>value+' programming'} interval={'preserveStartEnd'}/>
            <YAxis dataKey='student' />
            <Tooltip/>
            <Legend/>
            <Line dataKey='student' type='monotone' stroke='#8884d8' activeDot={{r:10}}  />
            <Line dataKey='fees' stroke='red' activeDot={{r:10}}  />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>

    <div>
      <h1 className='char-heading'>Bar chart</h1>
      <div className="chart">


      <ResponsiveContainer width="100%" height='100%' aspect={3}>
        <BarChart  width={300} height={200} data={data} margin={{right:40}}>
          <CartesianGrid/>
            <XAxis dataKey='name' interval={'preserveStartEnd'}/>
            <YAxis dataKey='student' />
            <Tooltip/>
            <Legend/>
            <Bar dataKey='student' fill='#8884d8'   />
            <Bar dataKey='fees' fill='#82ca9d'   />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    </>
  );
}

export default App;
