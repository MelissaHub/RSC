


class Aside extends React.Component {
    render(){
        return (
            <div class = 'nav box'>
                <a>Dashboard</a>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </div>


        )
    }
}

//used to recyle componets
class Reviews extends React.Component{
    render () {
        return (
            <div class = 'minibox box'> 
            <p>Reviews </p>
            <h1>1,281 </h1>
             </div>
        )
    }
}

class Average extends React.Component{
    render () {
        return (
            <div class = 'minibox box'>
                 <p>Average rating </p>
                 <h1>4.6 </h1> 
            </div>
           
        )
    }
}

class Sentiment extends React.Component {
    render(){
        return (
            <div class = 'minibox box'>
                 <p>Sentiment Analysis </p>

                <div class = 'reviewtype'>

                <h1>960</h1>
                <h1>122</h1>
                <h1>321</h1>

                </div>
                
            </div>

        )
    }
}

class Webvisitors extends React.Component {
    render(){
        return ( 
        <div class = 'bigbox box'>
            <p>Website Visitors </p>
            <h1>821</h1>


            <div class = 'graph'>
            </div>

        </div>
        )
    }
}

class App extends React.Component {
    render () {
        return (

       <div class ='main'>
               
                <Aside />
              

            <div class = 'right'>
                <div class = 'topview'>  
                <Reviews />
                <Average />
                <Sentiment />
                </div>

                 <div class = 'bottomview'>
                 <Webvisitors />
                 </div>
             </div>

       </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )