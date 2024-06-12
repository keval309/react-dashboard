import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import data from '../../../public/assets/data.json';
import { BarChart, DoughnutChart } from "../Charts";
import InventoryItem from "./InventoryItem";
import { WidgetItem } from "./WidgetComponent";
import userPic from '/assets/images/userpic.png';
import TransactionTable from "./TranscationTable";

const Dashboard = () => {

    return <>
        <main className="dashboard">
            <div className="bar">
                <BsSearch />
                <input type="text" placeholder="Search for data , user , docs" />
                <FaRegBell />
                <img src={userPic} alt="userImg" />
            </div>
            <section className="widgetContainer">
                <WidgetItem heading="Total Orders" value={1000} percent={60} color="red" />
                <WidgetItem heading="Total Orders" value={1000} percent={45} color="green" />
                <WidgetItem heading="Total Orders" value={1000} percent={-10} color="grey" />
                {/* <WidgetItem  heading="Total Orders" value={1000} percent={-10} color="aqua"/>
            <WidgetItem  heading="Total Orders" value={1000} percent={-10} color="blue"/> */}

            </section>
            <section className="graphContainer">
                <div className="revenueChart">
                    <div>
                        <h2>Revenue & Transactions</h2>
                        <BarChart
                            data2={[300, 144, 433, 655, 237, 755, 190]}
                            data1={[200, 444, 343, 556, 778, 455, 990]}
                            title1="Revenue"
                            title2="Transaction"
                            bgColor1="rgb(0,115,255)"
                            bgColor2="rgba(53,162,235,0.8)"
                        />
                    </div>
                </div>
                <div className="inventoryPercentage">
                    <h2>Inventory</h2>
                    <div>
                        {
                            data.categories.map((item) => {
                                return <InventoryItem key={item.heading}
                                    heading={item.heading}
                                    value={item.value}
                                    color={`hsl(${item.value * 4},${item.value}%,50%)`}
                                />
                            })
                        }

                    </div>
                </div>
            </section>
            <section className="doughnutTable">
                <div className="genderRatio">
                    <h2>
                        Gender Ratio
                        </h2>
                            <DoughnutChart
                                labels={["Female", "Male"]}
                                data={[12, 19]}
                                backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                                cutout={90}
                            />
                        <p>
                            <BiMaleFemale />
                        </p>
                </div>
                        <div className="transactionTable">
                        <h2>Transaction</h2>
                        <TransactionTable tableData={data.transaction} />
                        </div>

            </section>
        </main>
    </>
};

export default Dashboard;
