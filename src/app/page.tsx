export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/me.jpeg"
              alt="Eric Profile"
              className="shadow-dark"
            />
            <h1>Eric Liu</h1>
            <p>AI/ML • Software • RF/Hardware</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/liu6/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="mailto:liusy1588@gmail.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
              <a href="https://github.com/shiyao3/" target="_blank">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
