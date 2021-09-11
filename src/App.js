import './App.css';
import Navbar from './Components/Navbar'
import Animated from './Components/Animated'
import Content from './Components/Content'
import Footer from './Components/Footer'

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
const data =[
  {
    id: Math.random(),
    title: "Box 1",
    text: lorem,
    bgColor: "#fff"
  },
  {
    id: Math.random(),
    title: "Box 2",
    text: lorem,
    bgColor: "#fff"
  },
  {
    id: Math.random(),
    title: "Box 3",
    text: lorem,
    bgColor: "#fff"
  },
  {
    id: Math.random(),
    title: "Box 4",
    text: lorem,
    bgColor: "#fff"
  }
]
function App() {
  return (
    <div>
      <Navbar />
      <Animated />
      <Content boxData={data} />
      <Footer />
    </div>
  );
}

export default App;
