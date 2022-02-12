import React,{useState} from 'react';
import Categories from './Component/Categories/categories';
import Menu from './Component/Menu/menu';
import items from './Component/data'

function App() {
  // const allCategories= new Set(items.map(item =>item.category));
  const allCategories = ['all', ...new Set(items.map(item =>item.category))];
    const [item, setItem] = useState(items);
    const [categories, setCategories] = useState(allCategories);

      const filterItems =(category)=>{
        if(category==='all'){
          setItem(items)
          return;
        }
        const newItems = items.filter(item=> item.category === category);
        setItem(newItems);

      }
     
  return (
    <div>
     
      <Categories categories={categories} filterItems={filterItems}/>
      <div className="d-flex">
      <Menu items={item}/>
     
      </div>
    </div>
  );
}

export default App;
