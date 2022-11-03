import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { makeQueryString } from "../../utils/index";
import { TagItem } from "../index";
import { TagItemContainer } from "../TagItem/index";

const SEGMENT = "SEGMENT";
const FUEL = "FUEL";

const tags = [
  { type: SEGMENT, segment: "E" },
  { type: SEGMENT, segment: "D" },
  { type: SEGMENT, segment: "C" },
  { type: FUEL, fuelType: "ev" },
];

const TagList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fuelType = searchParams.get("fuelType");
  const segment = searchParams.get("segment");

  const handleClickTag = (tag) => {
    const currentQuery = {};
    if (fuelType) currentQuery.fuelType = fuelType;
    if (segment) currentQuery.segment = segment;
    if (tag.type === SEGMENT && segment !== tag.segment) {
      currentQuery.segment = tag.segment;
    }
    if (tag.type === FUEL && fuelType !== tag.fuelType) {
      currentQuery.fuelType = tag.fuelType;
    }

    navigate(`?${makeQueryString(currentQuery)}`);
  };

  return (
    <Container>
      <TagItemContainer isClicked={!fuelType && !segment} onClick={() => navigate("/")}>
        전체
      </TagItemContainer>
      {tags.map((tag) => (
        <TagItem
          key={tag.segment || tag.fuelType}
          isClicked={fuelType === tag.fuelType || segment === tag.segment}
          tag={tag}
          onClick={handleClickTag.bind(this, tag)}
        />
      ))}
    </Container>
  );
};

export default TagList;

const Container = styled.ul`
  padding: 8px;
  display: flex;
  gap: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  width: 100%;
  flex-wrap: nowrap;
`;
