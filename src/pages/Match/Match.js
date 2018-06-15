import React, { Component } from "react";
import matches from "../../matches.json";
import MatchCard from "../../components/Matches";

class Match extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      matches: matches,
      score: 0,
      clickedArray : []
    };

     
  
    shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      this.setState(a);
  }

    clickToMatch = id => {
      console.log('clicked');

      let newArray = this.state.clickedArray

        if(this.state.clickedArray.includes(id)){
          this.setState({score:0});
          this.setState({clickedArray : []})
          this.shuffle(matches)
        } else {
          if(!newArray.includes(id))
          newArray.push(id);
          this.setState({score: this.state.score + 1});
          this.setState({clickedArray: newArray});
          this.shuffle(matches);
        }
       
    
      
    };

    componentDidRun(){
      this.shuffle(matches)
    }
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <div>
          <h1>Score: {this.state.score}</h1>
          {this.state.matches.map(friend => (
            <MatchCard
              clickToMatch={this.clickToMatch}
              id={friend.id}
              image={friend.image}
              key={friend.id}
            />
          ))}
        </div>
        
      );
    }
  }
  
  export default Match;