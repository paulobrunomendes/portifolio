PORTFÓLIO — PAULO BRUNO MENDES
================================

ARQUIVOS:
  index.html  — página principal (com foto embutida em base64)
  style.css   — todos os estilos, cores e animações
  script.js   — cursor animado, dark/light mode, scroll reveal

COMO EDITAR:
  - Cores e tema    → style.css, seção :root (variáveis --bg, --accent, --gold...)
  - Textos          → index.html, seções hero, projetos, sobre
  - Foto            → index.html, procure por <img src="data:image/jpeg;base64,...">
                      substitua pelo caminho: <img src="foto.jpg" alt="Paulo Bruno Mendes">
  - Projetos        → index.html, seção id="projetos"
  - Habilidades     → index.html, seção id="habilidades"

COMO HOSPEDAR NO NGINX (Ubuntu):
  1. Copie a pasta para o servidor:
     scp -r portfolio_paulo_bruno/ usuario@servidor:/var/www/html/

  2. Configure o Nginx (/etc/nginx/sites-available/default):
     root /var/www/html/portfolio_paulo_bruno;
     index index.html;

  3. Recarregue:
     sudo systemctl reload nginx

DARK / LIGHT MODE:
  Botão no canto superior direito da página.
  Para mudar o tema padrão, edite no index.html:
    <html data-theme="dark">  ← troque por "light" se quiser

