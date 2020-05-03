import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalValue } from "../state/globalProvider";

const ForecastWrapper = styled.div`
  margin: 2.5em;
  background: ${(props) => props.theme.seconday};
  display: flex;
  flex-direction: column;
`;

const ForecastContent = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const ForecastText = styled.div`
  display: block;
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;

const ForecastItem = styled.div`
  padding: 0 15px 15px;
  height: calc(100% - 180px - 25px);
  border: 1px solid ${(props) => props.theme.primary};
  text-align: left;
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1.5em;
`;

const Forecast = (props) => {
  const { fetch } = useGlobalValue();
  const { name, id } = props;

  const details = fetch.find((i) => i.name === name);

  const formatDate = (date) => {
    const dtf = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
      date
    );
    return `${da} ${mo} ${ye}`;
  };

  const values = (i, idx) => (
    <ForecastItem key={idx}>
      <ForecastContent>
        <ForecastText>
          <span>Forecast date:</span> {formatDate(new Date(i.forecastDate))}
        </ForecastText>
        <ForecastText>
          <span>Precipitation probability:</span> {Math.round(i.precipitaProb)}%
        </ForecastText>
        <ForecastText>
          <span>Minimum temperature:</span> {i.tMin}
        </ForecastText>
        <ForecastText>
          <span>Maximum temperature:</span> {i.tMax}
        </ForecastText>
      </ForecastContent>
    </ForecastItem>
  );

  return (
    <ForecastWrapper id={id}>
      {details && (details || []).data.map(values)}
    </ForecastWrapper>
  );
};

export default Forecast;
