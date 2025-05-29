document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer id="footer">
      <div class="footer-top-line"></div>
      <div class="container footer-main">
        <div class="row gy-5">
          <div class="col-lg-4 col-md-12 text-center text-lg-start">
            <h5 class="footer-title">Vexor</h5>
            <p class="footer-text">
              Nascida da paixão por games e tecnologia, a Vexor se dedica a oferecer a melhor experiência e os periféricos de mais alta performance para gamers de todos os níveis. #GameOn
            </p>
            <div class="social-icons mt-4">
              <a href="#" aria-label="Facebook" data-bs-toggle="tooltip" title="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram" data-bs-toggle="tooltip" title="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="YouTube" data-bs-toggle="tooltip" title="YouTube"><i class="bi bi-youtube"></i></a>
              <a href="#" aria-label="Twitter" data-bs-toggle="tooltip" title="Twitter / X"><i class="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-12 text-center text-lg-start">
            <h5 class="footer-title">Páginas</h5>
            <ul class="footer-links list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">Produtos</a></li>
              <li><a href="index.html#promotion-grid">Promoções</a></li>
              <li><a href="contact.html">Contato</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-4 col-12 text-center text-lg-start">
            <h5 class="footer-title">Institucional</h5>
            <ul class="footer-links list-unstyled">
              <li><a href="policy-privacy.html">Política de Privacidade</a></li>
              <li><a href="delivery-policy.html">Política de Entregas</a></li>
              <li><a href="tracking.html">Rastrear Pedido</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-4 col-12 text-center text-lg-start">
            <h5 class="footer-title">Receba Novidades</h5>
            <div class="newsletter">
              <p>Cadastre-se para ofertas exclusivas!</p>
              <form class="d-flex gap-2" id="newsletter-form">
                <input type="email" class="form-control" placeholder="Seu melhor e-mail" required>
                <button type="submit" class="btn"><i class="bi bi-send-fill"></i></button>
              </form>
            </div>
             <div class="footer-quote mt-4">
                <blockquote>
                  "A tecnologia move o mundo."
                  <cite>— Steve Jobs</cite>
                </blockquote>
            </div>
          </div>
        </div>

        <div class="footer-bottom mt-5 text-center">
            <div class="footer-certificados mb-4">
                <img src="https://static.kabum.com.br/conteudo/temas/001/imagens/rodape/selo_empresabuscape_horizontal.png" alt="Selo Buscapé" data-bs-toggle="tooltip" title="Empresa Verificada">
                <img src="https://static.kabum.com.br/conteudo/temas/001/imagens/rodape/selo-google-site-seguro.png" alt="Selo Google Site Seguro" data-bs-toggle="tooltip" title="Navegação Segura">
                <img src="https://static.kabum.com.br/conteudo/temas/001/imagens/rodape/selo_ebit_kabum_horizontal.png" alt="Selo Ebit Diamante" data-bs-toggle="tooltip" title="Ebit Diamante">
                <div id="armored_website" style="width: 115px; height: 32px;" data-bs-toggle="tooltip" title="Site Blindado">
                    <img src="https://seal.siteblindado.com/www.kabum.com.br/seal.png" alt="site blindado">
                </div>
            </div>
            <p>© ${new Date().getFullYear()} Vexor. Todos os direitos reservados. Projeto fictício para fins de estudo.</p>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;

    // Inicializa tooltips do Bootstrap no rodapé
    const tooltipTriggerList = [].slice.call(footerContainer.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Previne o envio padrão do formulário da newsletter (apenas para demonstração)
    const newsletterForm = document.getElementById('newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e){
            e.preventDefault();
            alert('Obrigado por se inscrever na nossa newsletter! (Simulação)');
            this.reset();
        });
    }
  }
});