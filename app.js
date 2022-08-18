


class Aside extends React.Component {
    render(){
        return (
        <div>
            <nav>
                <a>Dashboard</a>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </nav>

        </div>
        )
    }
}

//used to recyle componets
class Reviews extends React.Component{
    render () {
        return (
            <div> Reviews <br> 1,281</br></div>
        )
    }
}

class Average extends React.Component{
    render () {
        return (
            <div> Average rating <br>4.6</br> </div>
        )
    }
}

class Sentiment extends React.Component {
    render(){
        return <div>Sentiment Analysis</div>
    }
}

class Webvisitors extends React.Component {
    render(){
        return <div>Website Visitors <div>821</div>

        </div>
    }
}

class App extends React.Component{
    render () {
        return(
            <div>
                <Aside />
                <Reviews />
                <Average />
                <Sentiment />
                <Webvisitors />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
  )