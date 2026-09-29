import Student from './Student.jsx'
function App() {
    return(
      <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={32} isStudent={false}/>
        <Student name="Squidward" age={42} isStudent={false}/>
        <Student name="Sandy" age={22} isStudent={true}/>
        <Student/>
      </>
    );

}

export default App
