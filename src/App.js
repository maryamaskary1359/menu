import React, { useState } from 'react';
import menus from './data'
import Categories from './Components/Categories'
import Menu from './Components/Menu'

function App() {
  const categoriValue=['all',...new Set(menus.map(item=>item.category))]
   console.log(categoriValue);
   const[allMenus,setAllMenu]=useState(menus)
   const [categories]=useState(categoriValue)

   const filterMenus=(category)=>{
    if(category=='all'){
      setAllMenu(menus)
      return
    }
    let filtredMenu=menus.filter(menu=>menu.category==category)
    console.log(filtredMenu);
    setAllMenu(filtredMenu)
   }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus} />
        <Menu  menus={allMenus}/>
      </section>
    </main>
  );
}

export default App;
