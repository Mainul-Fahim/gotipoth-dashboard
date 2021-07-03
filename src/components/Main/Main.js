import React from 'react';
import "./Main.css";
import hello from "../../assets/hello.gif";
import Chart from "../Charts/Chart";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import Line1 from "../../assets/line1.png";
import Line2 from "../../assets/line2.png";
import Line3 from "../../assets/line3.png";
import Line4 from "../../assets/line4.png";
import Line from "../../assets/line.png";
import MapChart from "../Charts/MapChart";
import DoughnutChart from "../Main/DoughnutChart";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                {/* <!-- MAIN TITLE STARTS HERE --> */}

                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Ecommerce Dashboard</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                    <img src={hello} alt="hello" />
                </div>

                {/* <!-- MAIN TITLE ENDS HERE --> */}

                {/* <!-- MAIN CARDS STARTS HERE --> */}
                <div className="main__cards">
                    <div className="card">
                        <strong>$7,461</strong>
                        <p className="text-primary-p">Orders</p>
                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">last week</p>
                            <span><BarChart /></span>
                        </div>
                    </div>

                    <div className="card">
                        <strong>$28,947</strong>
                        <p className="text-primary-p">Revenue</p>

                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">last week</p>
                            <span><BarChart /></span>
                        </div>
                    </div>

                    <div className="card">
                        <strong>$3241</strong>
                        <p className="text-primary-p">Avg. order value</p>

                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">last week</p>
                            <span><BarChart /></span>
                        </div>
                    </div>
                    <div className="card second">
                        <strong>$45.2</strong>
                        <p className="text-primary-p">Unique Visitors</p>

                        <div className="card_inner">
                            <p className="text-primary-p">25%</p>
                            <p className="text-primary-p">last week</p>
                            <span><BarChart /></span>
                        </div>
                    </div>

                </div>
                {/* <!-- MAIN CARDS ENDS HERE --> */}

                {/* <!-- CHARTS STARTS HERE --> */}
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Total Revenue</h1>

                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <LineChart />
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
                                <td><img src={Line} alt="" /></td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>15,578</td>
                                <td>11,950</td>
                                <td>4,573</td>
                                <td><img src={Line1} alt="" /></td>
                            </tr>
                            <tr>
                                <td>Email Marketing</td>
                                <td>10398</td>
                                <td>8198</td>
                                <td>$5457</td>
                                <td><img src={Line2} alt="" /></td>
                            </tr>
                            <tr>
                                <td>Direct website</td>
                                <td>7,397</td>
                                <td>5,885</td>
                                <td>$2354</td>
                                <td><img src={Line3} alt="" /></td>
                            </tr>
                            <tr>
                                <td>Referral</td>
                                <td>4247</td>
                                <td>2560</td>
                                <td>$1710</td>
                                <td><img src={Line4} alt="" /></td>
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
                                <td>25%</td>


                            </tr>



                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;