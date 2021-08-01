import App from './App';
import { shallow, mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

it.skip("renders without crashing", () => {
  shallow(<App />);
});

it("renders page header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Accessible Tabs</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

const tab = {
  activeTab: "First Tab",
  label: "First Tab",
};


describe("component test", () => {
  it("tab props", () => {
    const wrapper = mount(<App tab={tab} />);
    expect(wrapper.props().tab).toEqual(tab);
  });
});
