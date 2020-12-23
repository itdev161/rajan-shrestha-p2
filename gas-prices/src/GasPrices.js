import React, { Component } from "react";
import "./GasPrices.css";

class FuelType extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.Regular}</td>
        <td>{this.props.Midgrade}</td>
        <td>{this.props.Premium}</td>
        <td>{this.props.Diesel}</td>
      </tr>
    );
  }
}

class FuelPrice extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.Regular}</td>
        <td>{this.props.Midgrade}</td>
      </tr>
    );
  }
}

class GasPrices extends Component {
  render() {

      const gasPrices = {
          "fuelType": [
              {
                  "Regular": "$2.299",
                  "Midgrade": "$2.599",
                  "Premium": "$2.999",
                  "Diesel": "$2.499"
              }
          ]
      }
    const FuelTypeComponents = this.props.FuelType.map(FuelTypeObject => {
      return <FuelType {...FuelTypeObject} />;
    });

    const FuelPrice = this.props.FuelPrice.map(FuelPriceObject => {
      return <FuelPrice {...FuelPriceObject} />;
    });
    return (
      <div className="GasPrices">
        <h1>Gas Prices</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Fuel Type</th>
              </tr>
            </thead>
            <tbody>{FuelTypeComponents}</tbody>
          </table>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Fuel Price</th>
              </tr>
            </thead>
            <tbody>{FuelPrice}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GasPrices;
