import { motion } from "framer-motion";
import styled from "styled-components";
import ShowCategories from "../features/categories/ShowCategories";
import ProductsMain from "../features/product/ProductsMain";
import Intro from "../ui/Intro";

const StyledContainer = styled(motion.div)``;

export default function Home() {
  return (
    <StyledContainer>
      <Intro
        type={"home"}
        header={"Welcome to ReactBazaar"}
        title={"Shop & Enjoy"}
      />
      <ShowCategories title={"Our Popular Categories"} />
      <ProductsMain title="Our Popular Products" />
    </StyledContainer>
  );
}
{
  /* <StyledContainer
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 3 }}
>
Home
</StyledContainer> */
}
