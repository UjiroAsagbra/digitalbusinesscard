
export default function Buttons (){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div>
           <button onClick={() => openInNewTab('https://mail.google.com/mail/?view=cm&source=mailto&to=[ujiroasagbra@gmail.com]')} 
                className='email'>
                <i className="fa fa-envelope"></i> 
                Email
            </button>
            
            <button  onClick={() => openInNewTab('https://www.linkedin.com/in/asagbra-ujiro/')}
                className='linkedin'>
                <i className="fa fa-linkedin"></i>
                LinkedIn
            </button>
        </div>
    )
}
