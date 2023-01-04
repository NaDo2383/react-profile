import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main"

function App() {
  const data = {
    welcome: "Wlcome to component and props corners",
    title: "React",
    subtitle: "Javascript Library",
    user: {
      firstName: "John",
      lastName: "Sedrick"
    },
    techskill: ["HTML", "JS", "CSS", "React"],
    date: new Date(),
  }

  const greetPeople = () => {
    alert("Welcome to my corner");
  }


  const showdate = () => {
    let date = new Date();
    alert(date);
  }

  return (
    <div className='container'>
      <Header
        welcome={data.welcome}
        title={data.title}
        subtitle={data.subtitle}
      />
      <Main
        user={data.user}
        techs={data.techskill}
        greetPeople={greetPeople}
        showdate={showdate}
      />
      <Footer date={data.date}
      />
    </div>
  );
}

export default App;
