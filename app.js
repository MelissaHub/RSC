


class Aside extends React.Component {
    render(){
        return (
        <aside>
            <nav>
                <a>Dashboard</a>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </nav>

        </aside>
        )
    }
}

//used to recyle componets
class Reviews extends React.Component{
    render () {
        return (
            <section> Reviews 1,281</section>
        )
    }
}

class Average extends React.Component{
    render () {
        return (
            <section> Average rating 4.6</section>
        )
    }
}

class Sentiment extends React.Component {
    render(){
        return <section>Sentiment Analysis</section>
    }
}

class Webvisitors extends React.Component {
    render(){
        return <section id = "large">Website Visitors <div>821</div>

        </section>
    }
}

class App extends React.Component{
    render () {
        return(
            <div id = "app">
                <Aside />
                <div id = 'container'>
                <div id = "top">
                <Reviews />
                <Average />
                <Sentiment />
                </div>
                <Webvisitors />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
  )