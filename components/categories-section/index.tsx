import styled from "styled-components";
import { SectionHeaderText } from "../SectionHeader";
import { ArrowIOSRightIcon, SearchIcon } from "../icons";
import { ProductCard } from "../product-card";
import { WideLinkTransparentButton } from "../buttons/WideLinkButtons";

const CategoriesSectionContainer = styled.section`
  padding: 89px 0 96px;
  border-bottom: 1px solid #000;
`;

const CategoriesSectionWrapper = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
`;

const CategoriesHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;

  ul {
    padding: 0;
    display: flex;
    list-style: none;
    padding-top: 26px;
  }
`;

const CategoriesNavItem = styled.li<{ isActive?: boolean }>`
  padding-right: 32px;

  &:last-child {
    padding: 0;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    font-family: NexaHeavy, sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${(props) => (props.isActive ? "#1A1A1A" : "#666666")};
    padding-bottom: 4px;
    ${(props) => props.isActive && `border-bottom: 2px solid #1A1A1A;`}
  }
`;

const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 48px;
  grid-row-gap: 20px;
`;

const SearchFilterContainer = styled.div`
  padding: 12px 16px;
  padding-right: 18px;
  border: 1px solid #666666;
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    margin-left: 8px;
    font-size: 12px;
    width: 238px;
    font-family: NexaBook, sans-serif;
    border: none;
    padding: 4px 0;
    border-right: 1px solid #666666;
    margin-right: 16px;
    &::placeholder {
      color: #666666;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #666666;
    }

    &::-ms-input-placeholder {
      color: #666666;
    }
  }

  button {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: inherit;
    line-height: 14.4px;
    color: #1a1a1a;
    cursor: pointer;
    border: none;
    background: transparent;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 12px;
      span {
        height: 2px;
        border-radius: 1px;
        background: #191919;
        width: 16px;
        display: block;
        margin-bottom: 4px;
      }
      span:nth-child(2) {
        width: 12px
      }
      span:last-child {
        width: 6px;
        margin: 0;
      }
    }
  }
`;

const LoadMoreContainer = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

export const CategoriesSection = () => (
    <CategoriesSectionContainer>
        <CategoriesSectionWrapper>
          <SectionHeaderText>Categories</SectionHeaderText>

          <CategoriesHeaderContainer>
            <ul>
              <CategoriesNavItem isActive>
                <button>All</button>
              </CategoriesNavItem>

              <CategoriesNavItem>
                <button>Clothing</button>
              </CategoriesNavItem>

              <CategoriesNavItem>
                <button>Furnitures</button>
              </CategoriesNavItem>

              <CategoriesNavItem>
                <button>Tech</button>
              </CategoriesNavItem>
            </ul>

            <SearchFilterContainer>
              <SearchIcon iconHeight="16px" iconWidth="16px" />

              <input type="text" placeholder="Search" />

              <button>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                Filter
              </button>
            </SearchFilterContainer>
          </CategoriesHeaderContainer>

          <ProductCardsContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard discount={50} />
            <ProductCard />
            <ProductCard />
            <ProductCard discount={40} />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductCardsContainer>

          <LoadMoreContainer>
          <WideLinkTransparentButton>
            Load More
            <ArrowIOSRightIcon />
          </WideLinkTransparentButton>
          </LoadMoreContainer>
        </CategoriesSectionWrapper>
      </CategoriesSectionContainer>
)