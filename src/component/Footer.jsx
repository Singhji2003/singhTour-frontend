import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 50,
    duration:1500,
});
const Footer = ()=>{
    return(
        <>
        
    <footer>
        <p>| Copyright &copy; All Right Reserved @Singh ji | </p>
    </footer>
        </>
    )
}
export default Footer;