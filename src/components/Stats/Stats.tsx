export default function Stats() {
  return (
    <section id="stats" className="stats section" style={{display: 'none'}}>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile" />
              <span data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext" />
              <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset" />
              <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people" />
              <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
            </div>
          </div>{/* End Stats Item */}
        </div>
      </div>
    </section>
  );
}
