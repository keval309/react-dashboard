
type InventoryProps = {
  color: string
  value: number
  heading: string
};

const InventoryItem = ({ color, value, heading }: InventoryProps) => {
  return <div className="inventoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}%`,
      }}>
      </div>

    </div>

    <span>{value}%</span>
  </div>;
};

export default InventoryItem;
