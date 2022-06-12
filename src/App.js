import './scss/app.scss';
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="App">
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
          <PizzaBlock title='Компаньола' price={960}/>
          <PizzaBlock title='карбонара' price={400}/>
          <PizzaBlock title='мексиканская' price={567}/>
          <PizzaBlock title='острая с грибами' price={950}/>
          <PizzaBlock title='4 сезона' price={234}/>
          <PizzaBlock title='вегатерианская' price={568}/>
          <PizzaBlock title='детская' price={843}/>
          <PizzaBlock title='итальянская' price={560}/>
          <PizzaBlock title='Крудо' price={798}/>
          <PizzaBlock title='4 сыра' price={852}/>
          <PizzaBlock title='Маринара' price={234}/>
          <PizzaBlock title='Боскайола' price={906}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
