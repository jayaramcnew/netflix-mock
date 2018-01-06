import React, { Component } from 'react';
import './App.css';
import VideoList from "./Components/VideoList/VideoList";

class App extends Component {

    state = {
        myList: [],
        recommendations: []
    };

    componentDidMount(){
        let data = {

            'mylist' : [

                {

                    'title': 'Futurama',

                    'id': 1,

                    'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'

                },

                {

                    'title': 'The Interview',

                    'id': 2,

                    'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'

                },

                {

                    'title': 'Gilmore Girls',

                    'id': 3,

                    'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'

                }

            ],

            'recommendations' : [

                {

                    'title': 'Family Guy',

                    'id': 4,

                    'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'

                },

                {

                    'title': 'The Croods',

                    'id': 5,

                    'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'

                },

                {

                    'title': 'Friends',

                    'id': 6,

                    'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'

                }

            ]

        };

        this.setState({
            myList: data.mylist,
            recommendations: data.recommendations
        })


    }

    buttonClickHandle = (data,i) => {
        console.log(data,i);
        if(data === 'Remove'){
            let updatedMyList = [...this.state.myList];
            updatedMyList.splice(i,1);
            this.setState({
                myList : updatedMyList
            })

    let updatedRecommendation = [...this.state.recommendations];
    updatedRecommendation.push(this.state.myList[i]);
    this.setState({
                      recommendations : updatedRecommendation
                  })
        }

        if(data === 'Add'){

            let updatedMyList = [...this.state.myList];
            updatedMyList.push(this.state.recommendations[i]);
            this.setState({
                myList : updatedMyList
            });



            let updatedRecommendation = [...this.state.recommendations];
            updatedRecommendation.splice(i,1);
            this.setState({
                recommendations : updatedRecommendation
            })

        }

    };



  render() {
    return (
      <div className="App">
          <p>My List</p>
        <VideoList
            videoList={this.state.myList}
            btnName={'Remove'}
            buttonOnClickHandler={this.buttonClickHandle}/>
          <p>Recommendations</p>
          <VideoList
              videoList={this.state.recommendations}
              btnName={'Add'}
              buttonOnClickHandler={ this.buttonClickHandle } />
      </div>
    );
  }
}

export default App;
