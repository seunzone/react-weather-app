var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) =>{
      return (
        <div>
        <h1 className="text-center">About</h1><hr/>
        <p>
          This is a weather application build on ReactJS. 
        </p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework used.
          </li><br/>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used
              Open Weather Map to search for weather data by city name.
          </li><br/>
          <li>
            You Can Get the Source Code on GitHub, I've published the source code on GitHu,<br/>
            Simply Follow the <a href='https://github.com/seunzone/react-weather-app'>Link</a>
          </li> <br/>
          <li>
            I'm a Freelance Developer, Visit my <a href="http://seunzone.com/about">About Page</a> or my <a href="http://seunzone.com">Tech Blog</a> for more coding articles and Tech Stuffs.
          </li>
        </ul>
      </div>
    )
}

module.exports = About;
