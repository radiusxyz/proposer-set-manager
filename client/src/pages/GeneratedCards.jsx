import React from "react";
import * as s from "./GeneratedCardsStyles";

const GeneratedCards = () => {
  return (
    <s.CardsContainer>
      {[0, 1, 2, 3, 4, 5].map((card) => (
        <s.Card>
          <s.NameIdEditWrapper>
            <s.NameIdWrapper>
              <s.Name>Some Name</s.Name>
              <s.Id>some id</s.Id>
            </s.NameIdWrapper>
            <s.EditBtn>Edit</s.EditBtn>
          </s.NameIdEditWrapper>
          <s.PropsWrapper>
            <s.PropWrapper>
              <s.PropTitle>Quota</s.PropTitle>
              <s.PropValue>a/b</s.PropValue>
            </s.PropWrapper>
            <s.PropWrapper>
              <s.PropTitle>Rollup Type</s.PropTitle>
              <s.PropValue>type name</s.PropValue>
            </s.PropWrapper>
          </s.PropsWrapper>
        </s.Card>
      ))}
    </s.CardsContainer>
  );
};

export default GeneratedCards;
