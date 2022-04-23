
function Footer()
{
    const today = new Date(); 
    
    return (

        <footer>
             <p>Copuright &copy; {today.getFullYear()}</p>
        </footer>
    );
}

export default Footer;