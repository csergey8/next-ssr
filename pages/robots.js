import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">Home</Link>
      <div>
        {
          props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`robots/${robot.id}`} >
                {robot.name}
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

Robots.getInitialProps = async function(params) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
    return {
      robots: data
    }
}

export default Robots;