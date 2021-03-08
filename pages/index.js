export default function Home() {
  return (
    <>
      <section className="main">

        <header>
          <nav>
            <div>
              <h1>Kubata</h1>
            </div>
            <ul>
              <li><a href="#">Seja Anfitrião</a></li>
              <li><a href="#">Conheça Angola</a></li>
              <li><a href="#">Entrar</a></li>
              <li><a href="#">Cadastrar</a></li>
            </ul>
          </nav>
        </header>

        <article>
          <h2>Descubra Angola Sem Receio De Nada</h2>
          <h3>1.246.700Km<sup>2</sup> para serem explorados por si</h3>
          <select name="provicia" id="">
            <option selected={false} >SELECIONE A PROVÍNCIA</option>
          </select>
        </article>

        <p>Fenda da Tundavala Huíla</p>

      </section>

      <div>
        <h2>Reserve uma hospedagem. Hóspede viajantes tudo na Kubata</h2>
      </div>

      <section>
        <article>
          <div>
            <h2>Seguro,Confortavel e Cômodo</h2>
            <h3>Arrende sua casa, ou parte dela, com nativos e estrangeiros e Ganhe Dinheiro</h3>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </article>

        <article>
          <div>
            <h2>Viva Experiências incríveis em Angola</h2>
            <h3>Faça viagens por toda Angola, explore as 18 provincías, mais proxímos dos Nativos</h3>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </article>

        <article>
          <div>
            <h2>Reserva fácil e flexível</h2>
            <h3>Processo fácil de reserva on-line oferece, oferece uma experiência transparente e sem complicações</h3>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </article>
      </section>

      <section>
        <h2>Cidades mais visitadas</h2>
        <article>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </article>

        <article>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </article>

        <article>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
          <figure >
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </article>
      </section>

      <section>
        <article>
          <div>
            <h2>Faça Parte Da Inovação em Angola</h2>
            <h3>Serviço inovador na área do Turismo e alojamento em Angola.Seguro, Fácil e Rentável</h3>
            <div className="btn-group">
                <a href="">Aluge</a>
                <a href="">Arrende</a>
            </div>
          </div>

        </article>
      </section>

      <section>
        <article>
          <h3>Kubata é inovador e Angolano</h3>
          <div><img src="" alt=""/></div>
          <h4>Serviço, muito inovador,e posso ter dinheiro sempre,alugando uma parte vazia da casa</h4>
          <h5>Fábio Komba</h5>
        </article>

        <article>
          <h3>Ganhei o dobro do normal</h3>
          <div><img src="" alt=""/></div>
          <h4>Ganhei o dobro do normal arrendando meu quarto duas vezes em uma semana</h4>
          <h5>Etienne Márcio</h5>
        </article>

        <a href="">Partilhe Connosco Sua Experiência</a>
      </section>

      <footer></footer>
    </>
  )
}
