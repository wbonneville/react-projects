import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div class="skill-section">
        <div class="skill-img">
          <img src="images/dog.jpg" height="auto" width="450"></img>
        </div>
        <div class="skill-content">
          <h3 class="skill-title">
            <i>Our Crew</i>
          </h3>
          <div class="skills">
            <i>Lamarr</i>
            <span>
              <abbr></abbr>
            </span>
            <div class="skills speaking">
              <i>Dog</i>
              <span>
                <abbr></abbr>
              </span>
            </div>
            <div class="skills efficiency">
              <i>Dr. Breen</i>
              <span>
                <abbr></abbr>
              </span>
            </div>
            <div class="skills computer">
              <i>Alyx Vance</i>
              <span>
                <abbr></abbr>
              </span>
            </div>
          </div>
        </div>
        <div class="about-content">
          <div class="about-desc">
            <p>
              <b>
                <i>
                  A brief yet incomplete overview of Half-Life 2, one of the
                  best selling PC games of all time.
                </i>
              </b>
            </p>
            <p>
              Some years after Gordon Freeman and other scientists accidentally
              opened a portal to a dimension of hostile aliens at the Black Mesa
              Research Facility, Freeman is awoken from stasis by the mysterious
              G-Man. The portal attracted the attention of the Combine, a
              technologically superior multidimensional empire which conquered
              Earth in seven hours. The Combine have implemented a brutal police
              state by biologically assimilating humans and other species, and
              preventing humans from breeding via a "suppression field". The
              G-Man inserts Gordon into a train arriving at City 17, site of the
              Combine Citadel, where Dr. Wallace Breen, the former Black Mesa
              administrator who negotiated Earth's surrender, governs as the
              Combine's puppet ruler. After eluding Combine forces, Gordon joins
              resistance members including Barney Calhoun, a former Black Mesa
              security guard working undercover as a Combine police officer; Dr.
              Eli Vance, former Black Mesa scientist and leader of the
              resistance; Alyx Vance, Eli's daughter; and Dr. Kleiner, an
              eccentric Black Mesa scientist. After a failed attempt to teleport
              to the resistance base, Black Mesa East, from Kleiner's makeshift
              laboratory, Gordon progresses on foot through the city's canal
              system. He obtains an airboat and battles his way to Black Mesa
              East, several miles from the city. Gordon is reintroduced to Eli
              and meets another resistance scientist, Dr. Judith Mossman. Alyx
              introduces Gordon to her pet robot D0g and gives him a "gravity
              gun", an instrument which can manipulate large objects. Black Mesa
              East comes under Combine attack, and Eli and Mossman are taken to
              Nova Prospekt, a Combine prison. Separated from Alyx, Gordon
              detours through the zombie-infested town of Ravenholm, assisted by
              its last survivor, Father Grigori. Escaping the town, Gordon
              discovers a resistance outpost, and uses a customized dune buggy
              to travel a crumbling coastal road to Nova Prospekt, encountering
              Combine patrols and helping the resistance fend off raids.{" "}
            </p>
          </div>
          <div class="about-img">
            <img
              src="images/alyx1.jpg"
              //   style="max-width:100%;height:auto;"
              height="350"
              width="auto"
            ></img>
          </div>
          <div class="team-img">
            <img src="images/lamarr.jpg"></img>
            <img class="breenimg" src="images/breen.jpg"></img>
            <img src="images/alyx.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}
