import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useGlobalValue } from "../state/globalProvider";
import Button from "./Button";
//! dropdown ultima vista de olhos
const RegionWrapper = styled.div`
  width: 100%;
  padding: 30px;
  @media ${(props) => props.theme.phone} {
    width: calc(100% - 5em);
    padding: 0 15px 0 0;
    border: 1px solid ${(props) => props.theme.primary};
    border-bottom-left-radius: ${(props) => props.theme.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius};
    margin: 0 2.5em;
    height: 300px;
    overflow: auto;
    margin-bottom: -300px;
    background: #fff;
    box-shadow: 0 0 10px 0 #5b236b;
    display: none;
    ${(props) =>
      props.isOpen &&
      css`
        display: block;
      `};
  }
`;

const RegionRow = styled.div`
  width: 100%;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  &:last-child {
    border: none;
  }
`;

const RegionText = styled.div`
  font-size: ${(props) => props.theme.fontSizeMedium};
`;

const Actived = styled.div`
  width: calc(100% - 5em);
  padding: 0 15px 0 0;
  padding-left: 10px;
  margin: 40px auto 0;
  height: 40px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.primary};
  position: relative;
  display: none;
  @media ${(props) => props.theme.phone} {
    ${(props) =>
      !props.isOpen &&
      css`
        border-radius: ${(props) => props.theme.borderRadius};
        border-botton: none;
      `}
    ${(props) =>
      props.isOpen &&
      css`
        box-shadow: inset 0px 0px 4px #371740;
        border-top-left-radius: ${(props) => props.theme.borderRadius};
        border-top-right-radius: ${(props) => props.theme.borderRadius};
      `}

    display: flex;
    &:after {
      content: "‹";
      top: 1px;
      right: 15px;
      position: absolute;
      font-size: 30px;
      transform: rotate(-90deg);
      font-weight: bold;
      color: ${(props) => props.theme.primary};
      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(90deg);
        `}
    }
  }
`;

const RegionTitle = styled.h3`
  padding: 20px 30px 0;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  @media ${(props) => props.theme.phone} {
    display: none;
  }
  span {
    color: ${(props) => props.theme.primary};
  }
`;

const Region = (props) => {
  const { fetchAction, fetch } = useGlobalValue();
  const [actived, setActived] = useState("Choose a Distrit");
  const [isOpen, setIsOpen] = useState(false);
  const { list, detail } = props;
  const { name: nameList, url: urlList } = list;
  const { name: nameDetail, url: urlDetail } = detail;

  useEffect(() => {
    fetchAction(nameList, urlList);
  }, [nameList, urlList, fetchAction]);

  const loadDataDetail = (globalIdLocal) => {
    fetchAction(nameDetail, `${urlDetail}${globalIdLocal}`);
  };

  const renderList = () => {
    if (!fetch) return <></>;

    if (fetch) {
      const list = fetch
        .filter((i) => i.name === nameList)
        .map((i) => {
          return i.data;
        })[0];

      if (!list) return <></>;

      if (list) {
        return list.map((i) => {
          return (
            <RegionRow key={i.idDistrito}>
              <RegionText>{i.local}</RegionText>
              <Button
                value="Show"
                onClick={() => {
                  setActived(i.local);
                  setIsOpen(false);
                  loadDataDetail(i.globalIdLocal);
                }}
              />
            </RegionRow>
          );
        });
      }
    }
  };

  return (
    <>
      <Actived
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {actived}
      </Actived>
      <RegionTitle>
        {actived === "Choose a Distrit" ? (
          actived
        ) : (
          <>
            Choose a Distrit <span>{actived}</span>
          </>
        )}
      </RegionTitle>
      <RegionWrapper isOpen={isOpen}>{renderList()}</RegionWrapper>
    </>
  );
};

export default Region;
