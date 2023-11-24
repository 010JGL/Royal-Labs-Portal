import React from "react";
import "./../globals.css";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <main className="container-fluid mt-5 bg-black text-white"> {/* Add Bootstrap container-fluid class, top margin, and background color */}
      <div className="title-dashboard mb-4 text-center">Dashboard</div>
      <Table striped bordered hover className="mx-auto">
        <thead>
          <tr>
            <th>Account Hashrate</th>
            <th>Account Hashrate Chart</th>
            <th>Miner Hashrate</th>
            <th>Miner Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}
