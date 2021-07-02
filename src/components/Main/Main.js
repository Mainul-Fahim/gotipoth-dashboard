import React from 'react';
import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../Charts/Chart";
import Barcht from "../../assets/barcht.png";
import MapChart from "../Charts/MapChart";
import DoughnutChart from "../Main/DoughnutChart";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                {/* <!-- MAIN TITLE STARTS HERE --> */}

                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Ecommerce Dashboard</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                {/* <!-- MAIN TITLE ENDS HERE --> */}

                {/* <!-- MAIN CARDS STARTS HERE --> */}
                <div className="main__cards">
                    <div className="card">
                        <h2>7,461</h2>
                        <p className="text-primary-p">Orders</p>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">since last week</p>
                            <span className="font-bold text-title"><img src={Barcht} alt="" /></span>
                        </div>
                    </div>

                    <div className="card">
                        <h2>$28,947</h2>
                        <p className="text-primary-p">Revenue</p>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">since last week</p>
                            <span className="font-bold text-title"><img src={Barcht} alt="" /></span>
                        </div>
                    </div>

                    <div className="card">
                        <h2>$3241</h2>
                        <p className="text-primary-p">Avg. order value</p>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">8.2%</p>
                            <p className="text-primary-p">since last week</p>
                            <span className="font-bold text-title"><img src={Barcht} alt="" /></span>
                        </div>
                    </div>

                    <div className="card">
                        <h2>$45.2</h2>
                        <p className="text-primary-p">Unique Visitors</p>
                        <br />
                        <div className="card_inner">
                            <p className="text-primary-p">12.3%</p>
                            <p className="text-primary-p">since last week</p>
                            <span className="font-bold text-title"><img src={Barcht} alt="" /></span>
                        </div>
                    </div>
                </div>
                {/* <!-- MAIN CARDS ENDS HERE --> */}

                {/* <!-- CHARTS STARTS HERE --> */}
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <h3>Source of Revenue Generated</h3>
                        <br />
                        <table id="customers">
                            <tr>
                                <th>Name of Source</th>
                                <th>Visitors</th>
                                <th>Page View</th>
                                <th>Revenue</th>
                                <th>Trend</th>
                            </tr>
                            <tr>
                                <td>Google</td>
                                <td>23,397</td>
                                <td>12,201</td>
                                <td>$5,536</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>15,578</td>
                                <td>11,950</td>
                                <td>4,573</td>
                                <td>Sweden</td>
                            </tr>
                            <tr>
                                <td>Email Marketing</td>
                                <td>10398</td>
                                <td>8198</td>
                                <td>$5457</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Direct website</td>
                                <td>7,397</td>
                                <td>5,885</td>
                                <td>$2354</td>
                                <td>Austria</td>
                            </tr>
                            <tr>
                                <td>Referral</td>
                                <td>4247</td>
                                <td>2560</td>
                                <td>$1710</td>
                                <td>UK</td>
                            </tr>
                            
                        </table>

                    </div>
                </div>
                {/* <!-- CHARTS ENDS HERE --> */}
                {/* 3rd chart starts */}
                <div className="second-chart">
                        <div className="charts__left">
                            <h3>Top Selling Products</h3>
                            <br />
                            <table id="customers">
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Sold</th>
                                <th>Revenue</th>
                            </tr>
                            <tr>
                                <td>Samsung Galaxy S8 256 GB</td>
                                <td>$280</td>
                                <td>126</td>
                                <td>$38,536</td>
                                
                            </tr>
                            <tr>
                                <td>Half Sleeve Shirt</td>
                                <td>$25</td>
                                <td>80</td>
                                <td>$20,573</td>
                               
                            </tr>
                            <tr>
                                <td>Email Marketing</td>
                                <td>10398</td>
                                <td>8198</td>
                                <td>$5457</td>
                               
                            </tr>
                            <tr>
                                <td>Direct website</td>
                                <td>7,397</td>
                                <td>5,885</td>
                                <td>$2354</td>
                               
                            </tr>
                            <tr>
                                <td>Referral</td>
                                <td>4247</td>
                                <td>2560</td>
                                <td>$1710</td>
                              
                            </tr>
                            
                        </table>
                        </div>
                        <div className="charts__right">
                            <h3>Sales By Location</h3>
                            <br />
                            <MapChart></MapChart>
                            <table id="customers">
                            <tr>
                                <th>Top Location</th>
                                <th>Order</th>
                                <th>Revenue</th>
                               
                            </tr>
                            <tr>
                                <td>United States</td>
                                <td>397</td>
                                <td>$23,397</td>
                               
                                
                            </tr>
                            <tr>
                                <td>United Kingdom</td>
                                <td>378</td>
                                <td>$21,578</td>
                                
                               
                            </tr>
                            <tr>
                                <td>Canada</td>
                                <td>220</td>
                                <td>$18,398</td>
                              
                               
                            </tr>
                            <tr>
                                <td>China</td>
                                <td>140</td>
                                <td>$13,391</td>
                             
                               
                            </tr>
                           
                            
                        </table>
                        </div>
                        <div className="charts__right">
                            <h3>Revenue By Device</h3>
                            <br />
                            <DoughnutChart></DoughnutChart>
                            <br />
                            <table id="customers">
                        
                            <tr>
                                <td>Desktop</td>
                                <td>$5,870</td>
                                <td>40%</td>
                               
                                
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>$4,483</td>
                                <td>30%</td>
                                
                               
                            </tr>
                            <tr>
                                <td>Tablets</td>
                                <td>$2,420</td>
                                <td>255</td>
                              
                               
                            </tr>
                            
                           
                            
                        </table>
                        </div>
                </div>
            </div>
        </main>
    );
};

export default Main;