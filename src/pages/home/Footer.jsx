import ScrollToTop from "react-scroll-to-top";



export default function Footer() {
    return (

      <footer class="text-center bg-body-tertiary">

  <div class="container pt-4">
  
    <section class="mb-4">
      <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="https://www.linkedin.com/in/sannidhi333" role="button" target="_blank"><i class="fab fa-linkedin-in"></i></a>

      <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="https://github.com/sannidhi-s" role="button" target="_blank"><i class="fab fa-github"></i></a>


    </section>

  </div>
    

<div>



        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
           2024 Work Term Report: Sannidhi Salibindla
        </div>

        <div className='desc text-center text-muted p-3 fst-italic' >
           This website was built using a combination of React, React-Bootstrap, and MDBootsrap.
        </div>




    
        

  
 
      <ScrollToTop smooth />
      </div>

      </footer>
    );
    
  }

