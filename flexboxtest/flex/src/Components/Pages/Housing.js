import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 23px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 4%;
  margin-bottom: 5%;

  & h4 {
    font-weight: 100;
    margin-top: -2%;
  }
`;
export default class Housing extends Component {
  render() {
    return (
      <Div className="row start-xs">
        <div className="col-xs-10">
          <h1>Apartments and Housing</h1>
          <h4>September 16th, 2019</h4>
          <p>
            Here's a bit of zaniness that’s destined to infuriate many readers –
            but I think it’s fascinating, if you don’t mind some healthy
            skepticism in advance. I don’t have a lot of reason to be suprised
            by this particular story – it’s true that the technological progress
            that’s driven overall housing prices up have been mostly effective
            at putting upward pressure on rents. One key thing to keep in mind,
            though, is that rents are not necessarily driven to the ceiling by
            the demand for housing (they can also be driven up by supply).
            <br></br>
            <br></br>
            Consider rents in City 17, which are well above the national
            average. Since the war, rents have been very volatile across
            different city-wide measures – but they are moving in tandem with
            rent prices that are considerably below their wartime peaks. There
            are many explanations for this, of course. It’s possible, for
            example, that tech has put a damper on the market. Or that, as at
            least one group of white-collar workers has discovered, the labor
            market offers little scope for upward mobility. But maybe, with one
            big change, one would expect rents to surge. For the past decades,
            the great decline in homeownership has surely put upward pressure on
            the demand for rentals. Now that so many people are choosing not to
            even try to upgrade the degree of housing they have, they will be
            coming to the rental market, at least on a regular basis.
            <br></br>
            <br></br>
            Still, these sorts of facts are exceedingly rare, which is why
            skeptics – among them yours truly – often buy into widespread dogma.
            In part this may be because, when it comes to crises, people want to
            hang on to a traditional narrative, as opposed to offering new
            possibilities. But it’s also because people (particularly informed
            ones) want to hear the familiar “we’re in a housing bubble” alarm.
            Now here’s the strange part of this – and this is certainly what
            some of my critics are going to charge. These “bubble” stories
            refuse to allow that maybe, just maybe, housing is really not
            well-serviced by technology at the present time. Of course, tech
            innovation does need some sort of assistance. But I’m not sure that
            it’s artificial growth that’s the problem – maybe it’s landlords who
            are refusing to deal with the new technologies. While it may be that
            landlords are more interested in profit than housing is a good
            investment, this is not something that’s impossible to measure.
            <br></br>
            <br></br>
            There are various metrics for which rent control can be controlled
            (a lot of people think it has been a disaster). Meanwhile, in
            Seattle, digital contracting and deep tech could provide a
            significant challenge to the local landlord establishment. And as
            someone who’s actually watched all of these developments in action –
            because the city’s zoning was written just before rent control was
            considered – I think that this is a very plausible scenario. But can
            we convince the Pollyannas to buy into this? After all, the general
            consensus has been that tech companies were holding back on new
            development for too long, which is part of what’s leading to all the
            price increases. Not everyone’s doing this, of course. Of course, it
            would be nice if the builders and landlords had a particular reason
            to do things differently – but that would be to demand more.
            <br></br>
            <br></br>
            So maybe the problem is that the realities of technology have turned
            housing from a good investment to one that barely pays its way. And
            maybe if that’s the case, we should have plenty of people moving
            out, renting, and sending everybody back to the government to ask
            for help. So maybe, just maybe, this is where we want it to be.
          </p>
        </div>
      </Div>
    );
  }
}
