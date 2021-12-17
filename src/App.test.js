import { render, screen, getByTestId } from '@testing-library/react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { Search } from './components/Search';

//pulisco i test cookie
beforeAll(() => {
  document.cookie = '';
});

describe('AppComponent', () => {
  test("dovrebbe renderizzare correttamente in `debug` mode", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
})

// testo il componente Header
describe("Header Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    //console.log(wrapper.debug());
  });

  afterEach(() => {
    wrapper.unmount();
 });

  test('il testo del logo è `Netflipps`', () => {
    expect(wrapper.find("#logo").text()).toContain("Netflipps");
  });

  test('il bottone `Da Vedere` contiene il testo `Da Vedere`', () => {
    expect(wrapper.find(".nav-links").first().text()).toContain('Da Vedere');
  });

  test("il bottone `Visti` contiene il testo `Visti`", () => {
    expect(wrapper.find("#li-seen").text()).toContain("Visti");
  });

  test("il bottone `Aggiungi` contiene il testo `Aggiungi`", () => {
    expect(wrapper.find("#li-add").text()).toContain("Aggiungi");
  });

  test("includes link to `Da Vedere` page", () => {
    expect(wrapper.find("#btn-toWatch").first().props().to).toBe("/");
  });

  test("includes link to `Visti` page", () => {
    expect(wrapper.find("#btn-seen").first().props().to).toBe("/watched");
  });

  test("includes link to `Aggiungi` page", () => {
    expect(wrapper.find("#btn-add").first().props().to).toBe("/add");
  });
});

// testo il componente Searchbar
describe("Searchbar Testing", () => {
  
  test("renderizza correttamente un testo", () => {
    const strings = ["Ciao", "Mondo"];
    const component = shallow(<Search value={strings} />);
    expect(component).toMatchSnapshot();
  });


});



  

