import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userPic from '../../../public/assets/images/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
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
            <WidgetItem  heading="Total Orders" value={1000} percent={60} color="red"/>
            <WidgetItem  heading="Total Orders" value={1000} percent={45} color="green"/>
            <WidgetItem  heading="Total Orders" value={1000} percent={-10} color="grey"/>
            {/* <WidgetItem  heading="Total Orders" value={1000} percent={-10} color="aqua"/>
            <WidgetItem  heading="Total Orders" value={1000} percent={-10} color="blue"/> */}

            </section>
        </main>
    </>
};
type widgetProps = {
    heading: string,
    value: number,
    percent: number,
    color: string,
    amount?: boolean,
}
const WidgetItem = ({ heading, value, percent, color, amount }: widgetProps) => {
    return <>
        <article className="widget">
            <div className="widgetInfo">
                <p>{heading}</p>
                <h4>{amount ? `$${value}` : value}</h4>
               {
                percent > 0 ? <span className="green"> <HiTrendingUp />+{percent}%</span> : <span className="red"><HiTrendingDown />{percent}%</span>
               }
            </div>
            <div className="widgetCircle" style={{
                background: `conic-gradient(${color} ${Math.abs(percent)/100*360}deg, rgb(255, 255, 255) 0`
            }}>
                <span style={{
                    color: color
                }}>{Math.abs(percent)}%</span>
            </div>
        </article>
    </>

}
export default Dashboard;
