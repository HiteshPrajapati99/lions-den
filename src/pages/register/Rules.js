import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Rules = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box sx={{ p: { xs: "4rem 3rem", md: 8 }, overflow: "hidden" }}>
      <Box py={5} color="#fff">
        <Typography
          sx={{
            fontSize: { xs: "42px", md: "64px" },
            fontWeight: "bold",
            textAlign: "center",
            color: "#F5BD1E",
            mb: { xs: 2, md: 0 },
          }}
          data-aos="zoom-out"
        >
          RULES OF THE
          <span style={{ color: "#fff", marginLeft: "10px" }}>DEN</span>
        </Typography>

        <h3 data-aos="zoom-out">Rule 1: The Perfect Pitch</h3>
        <p data-aos="fade-left">
          To captivate the lions in the den, entrepreneurs must kick off their
          pitch with a memorable introduction. They should confidently share
          their name, their remarkable business idea, the funding they require,
          and the enticing percentage of equity they're willing to offer.
          Following this, they have up to five minutes to impress the lions with
          their brilliant pitch. However, if they go over the time limit, the
          lions have the power to interrupt, but they must let the initial pitch
          unfold.
        </p>
        <h3 data-aos="zoom-out">Rule 2: Ping Pong</h3>
        <p data-aos="fade-left">
          Entrepreneurs are not obliged to answer every question thrown at them,
          but their responses (or lack thereof) can impact their fate. While
          they have the freedom to choose what they disclose, it's important to
          note that everything discussed in the den has the potential to be
          broadcasted. So, entrepreneurs can strategically address questions
          that help them evaluate whether an investor is the right fit for their
          business, even if they choose not to reveal certain financial details.
        </p>
        <h3 data-aos="zoom-out">Rule 3: The 12th Man</h3>
        <p data-aos="fade-left">
          Once the lions have declared themselves "out," an entrepreneur's time
          in the den comes to an end. Any lion who opts out of the deal cannot
          re-enter the negotiation process, and unless there's a compelling
          reason, they should refrain from interfering and allow others to
          pursue the negotiations.
        </p>
        <h3 data-aos="zoom-out">Rule 4: Investments</h3>
        <p data-aos="fade-left">
          The entrepreneur's goal is to secure the total amount of funding they
          initially asked for during the pitch. If a lion offers less than the
          requested amount, the entrepreneur must explore the possibility of
          securing additional investments from the remaining lions. Leaving the
          den empty-handed is not an option, so entrepreneurs must aim to secure
          at least the initial funding they sought. However, they can negotiate
          for more funds than initially requested to balance the scales when it
          comes to equity distribution.
        </p>
        <h3 data-aos="zoom-out">Rule 5: Multi-Lion Investments</h3>
        <p data-aos="fade-left">
          Each lion acts as an individual investor, having the freedom to invest
          as much or as little of their own money as they desire. It falls on
          the entrepreneur to convince them to match the required investment or
          commit to a portion of it. It's perfectly acceptable for the
          entrepreneur to seek investments from multiple lions to meet their
          total funding requirements. A successful investment may involve one to
          five parties, creating a dynamic and exciting opportunity for
          entrepreneurs.
        </p>
        <h3 data-aos="zoom-out">Rule 6: Saying 'No' Gracefully</h3>
        <p data-aos="fade-left">
          Entrepreneurs have the right to decline investment offers from lions
          if they believe the investor isn't the right fit or if the proposed
          deal doesn't align with their vision. Politely refusing an offer is
          encouraged, allowing entrepreneurs to maintain control and select the
          investors who are best suited for their business.
        </p>
        <h3 data-aos="zoom-out">Rule 7: The Deal</h3>
        <p data-aos="fade-left">
          On the show, the agreed-upon deal is an unwritten agreement that
          relies on thorough due diligence checks and the trust and commitment
          of both the investor and the entrepreneur. However, it's important to
          note that the deal is a private arrangement between the lion and the
          entrepreneur. After additional meetings and discussions, if an
          agreement cannot be reached, both parties are under no legal
          obligation to proceed with the deal. The show organizer remains
          impartial, as they cannot be involved in the contractual aspects
          between the two sides.
        </p>
        <h3 data-aos="zoom-out">Rule 8: The Supporter</h3>
        <p data-aos="fade-left">
          Entrepreneurs are allowed to have an advocate in the den, someone
          directly involved in their business, to assist them in answering the
          lions' questions. This supporter can be called upon at any point after
          the initial three-minute pitch, offering valuable
          insights&nbsp;and&nbsp;support.
        </p>
      </Box>
    </Box>
  );
};

export default Rules;
