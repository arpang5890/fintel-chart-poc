import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Chart } from "react-google-charts";
import './index.css'
// import BootstrapTable from 'react-bootstrap-table-next';

const OptionFlow = () => {
  const [tableData, setTableData] = useState([]); 
  const [putCallRatio, setPutCallRatio] =  useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = '#212529';
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('/optionflow');
    const dataSet = await data.json();
    const rawData = dataSet.hits.hits;
    const processedDataForTable = [];
    var callCount = 0;
    var putCount = 0;
    // fetching only entitled Trade data
    rawData.map((eachRow, index) => {
      if(eachRow._index === 'non-entitled-trade-alerts') {
         processedDataForTable.push(eachRow._source);
         (eachRow._source.put_call === 'P') ? putCount++ : callCount++;
      }
      return eachRow;
    });
    const putCallChart = [
      ["Option", "Value"],
      ["PUT", putCount], 
      ["CALL" , callCount]
    ];
    setPutCallRatio(putCallChart);
    setTableData(processedDataForTable);
    console.log(dataSet.hits.hits);
  };


  // option applied on first and forth chart on the top
  const options = {
    title: "PUT CALL RATIO",
    pieHole: 0.8,
    is3D: false,
    legend: { position: 'none' },
    backgroundColor: '#323539',
    colors: ['yellow', 'grey'],
    titleTextStyle: { color: '#fff' }
  };

  // option applied on second chart on the top (color and title change)
  const options2 = {
    title: "CALL FLOW",
    pieHole: 0.8,
    is3D: false,
    legend: { position: 'none' },
    backgroundColor: '#323539',
    colors: ['aliceblue', 'grey'],
    titleTextStyle: { color: '#fff' }
  };

  // option applied on third chart on the top (color and title change)
  const options3 = {
    title: "PUT FLOW",
    pieHole: 0.8,
    is3D: false,
    legend: { position: 'none' },
    backgroundColor: '#323539',
    colors: ['purple', 'grey'],
    titleTextStyle: { color: '#fff' }
  };


  // data for chart second (dummy Data)
  const CallFlow = [
    ["Option", "Value"],
    ["Call", 32000],
    ["Put", 12000]
  ];

  // data for chart third (dummy Data)
  const PutFlow = [
    ["Option", "Value"],
    ["Call", 12000],
    ["Put", 32000]
  ];


  // THis code is commented --> because in case we use <BootstrapTable> Module just like fintel web then we need this--> 

  // const columns = [
  //   {
  //     text : 'Time',
  //     dataField: 'time',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'Ticker',
  //     dataField: 'usymbol',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'EXP',
  //     dataField: 'expiry',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'Strike',
  //     dataField: 'strike',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'C/P',
  //     dataField: 'put_call',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'SPOT',
  //     dataField: 'spot',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'Details',
  //     dataField: 'details',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'Type',
  //     dataField: 'type',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   },
  //   {
  //     text : 'PREM',
  //     dataField: 'premium',
  //     sort: true,
  //     headerStyle: {  whiteSpace: 'nowrap' },
  //   }
  // ];

  // const TransactionsGrid = ({ gridDefaults, data, isFetchingData }) => {

  return (<>
    <Container>
      <Row>
        <Col>
          <Chart
            chartType="PieChart"
            width="100%"
            height="100px"
            data={putCallRatio}
            options={options}
          />
        </Col>

        <Col>
          <Chart
            chartType="PieChart"
            width="100%"
            height="100px"
            data={CallFlow}
            options={options2}
          />
        </Col>


        <Col>
          <Chart
            chartType="PieChart"
            width="100%"
            height="100px"
            data={PutFlow}
            options={options3}
          />
        </Col>


        <Col>
          <Chart
            chartType="PieChart"
            width="100%"
            height="100px"
            data={putCallRatio}
            options={options}
          />
        </Col>
      </Row>
    </Container>

    <Table striped hover variant="dark">
      <thead>
        <tr>          
          <th>Ticker</th>
          <th>Expiry</th>
          <th>Strike</th>
          <th>C/P</th>
          <th>Spot</th>
          <th>Details</th>
          <th>Type</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((product, index) => (
          <tr key={index} data-index={index}>            
            <td><span className={ (product.contract_type === 'CALLS') ? "greenTicker":"redTicker"}> {product.symbol}</span></td>
            <td>{product.expiry}</td>
            <td>{product.strike}</td>
            <td>{product.contract_type}</td>
            <td>{product.spot}</td>
            <td>{product.details}</td>
            <td>{product.type}</td>
            <td>{product.premium}</td>


          </tr>
        ))}

      </tbody>
    </Table>
    {/* <BootstrapTable keyField='id' data= {products}  columns={ columns } /> */}
  </>
  );
}
export default OptionFlow;
