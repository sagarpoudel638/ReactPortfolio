import React from "react";
import Title from "./Title";
import portfolio from "../assets/Portfolio.png"

export default function AboutMeWrapper() {
  return (
    <section className="about" id="about">
      <Title title="About Me" />
      <div className="image-detail">
      <img src={portfolio} alt="portfolio" />
            <div className="details">
              <div className="name">SAGAR POUDEL</div>
              <div className="summary">
                Est voluptas perspiciatis non dicta dolores hic sint accusantium
                in aliquam quaerat eos vitae eligendi aut corporis sint et
                excepturi nihil. Qui dolor fugit qui natus sint ea voluptatem
                laudantium id necessitatibus esse ut impedit quis 33 nisi
                delectus qui omnis culpa? Qui aliquam asperiores ab debitis
                adipisci in voluptatem vitae qui maiores voluptas qui asperiores
                odio rem facilis commodi? Et ipsam harum et recusandae nostrum
                et itaque mollitia aut dignissimos voluptas ut eaque rerum sit
                error architecto.
              </div>
            </div>
          </div>
    </section>
  );
}
