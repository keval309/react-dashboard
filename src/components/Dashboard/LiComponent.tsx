import { IconType } from "react-icons";
import { Link, Location } from "react-router-dom";

export type LiProps = {
    url: string;
    text: string;
    Icon: IconType;
    location: Location;
}
export const Li = ({ url, text, location, Icon }: LiProps) => (
    <li
        style={{
            backgroundColor: location.pathname.includes(url)
                ? "rgba(0,115,255,0.1)"
                : "white",
        }}
    >
        <Link
            to={url}
            style={{
                color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
            }}
        >
            <Icon />
            {text}
        </Link>
    </li>
);