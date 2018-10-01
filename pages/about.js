import Link from 'next/link';
import Image from '../components/image';


const About  = () => (
  <div style={{ fontSize: '25px', color: 'purple' }}>
    <h2>About</h2>
    <Link href="/">Back</Link>
    <Image />
  </div>
);

export default About;