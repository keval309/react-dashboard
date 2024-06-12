import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

type widgetProps = {
    heading: string,
    value: number,
    percent: number,
    color: string,
    amount?: boolean,
}
export const WidgetItem = ({ heading, value, percent, color, amount }: widgetProps) => {
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
                background: `conic-gradient(${color} ${Math.abs(percent) / 100 * 360}deg, rgb(255, 255, 255) 0`
            }}>
                <span style={{
                    color: color
                }}>{Math.abs(percent)}%</span>
            </div>
        </article>
    </>

}