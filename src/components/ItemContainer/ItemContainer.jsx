import { useSelector } from 'react-redux';
import ItemCard from '../ItemCard/ItemCard';

const itemList = [
  { id: '1', name: 'Apple', price: 1.0 },
  { id: '2', name: 'Banana', price: 2.0 },
  { id: '3', name: 'Car', price: 3.0 },
  { id: '4', name: 'Cup', price: 4.0 },
  { id: '5', name: 'Ball', price: 5.0 }
];
let filteredItemList;
export default function ItemContainer() {
  const searchedItem = useSelector((state) => state.allSlice.searchedItem);
  if (searchedItem && searchedItem !== '') {
    filteredItemList = itemList.filter((item) => {
      if (item.name.includes(searchedItem)) {
        return item;
      } else return false;
    });
  } else {
    filteredItemList = itemList;
  }
  return (
    <div
      className="itemCard_container"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      {filteredItemList.map((item) => {
        return <ItemCard key={item.id} itemData={item} />;
      })}
    </div>
  );
}
