var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center">Examples</h1><hr />
      <p>Here are a few Example to try out</p>
      <ol>
        <li>
          <Link to='/?location=Abuja'>Abuja, Nigeria</Link>
        </li>
        <li>
          <Link to='/?location=Moscow'>Moscow, Russia</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
