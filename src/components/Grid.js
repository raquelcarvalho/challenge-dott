import React from "react";
import styled from "styled-components";

const renderWidthGrid = (number) => {
  return Math.floor(8.33 * number);
};

const GridColumn = styled.div`
  width: ${(props) => renderWidthGrid(props.columnsTemplate) + "%"};
  margin-right: ${(props) => !props.isLast && "1%"};
  @media ${(props) => props.theme.phone} {
    width: 100%;
    margin: 0;
  }
`;

const GridWraper = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25),
    -5px -5px 20px 0px rgba(0, 0, 0, 0.22);
  width: 100%;
  max-width: ${(props) => props.theme.contentMaxWidth};
  min-width: 340px;
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.phone} {
    margin: 20px;
  }
  @media ${(props) => props.theme.tablet} {
    margin: 20px;
  }
`;

const Grid = ({ children, columnsTemplate = [1] }) => {
  if (!children.length) return <></>;

  const column = (children || []).map((c, index) => {
    let isLast = false;
    const Component = c.component;
    const componentProps = { ...c.props };

    if (columnsTemplate.length === index + 1) isLast = true;

    return (
      <GridColumn
        key={index}
        isLast={isLast}
        columnsTemplate={columnsTemplate[index]}
      >
        <Component {...componentProps} />
      </GridColumn>
    );
  });

  return <GridWraper>{column}</GridWraper>;
};

export default Grid;
