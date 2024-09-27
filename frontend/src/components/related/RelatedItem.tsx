import { FC } from "react";
import { ProductType } from "../../types/types";
import Card from "../ui/Card";
interface RelatedItemProps {
  item: ProductType;
}

const RelatedItem: FC<RelatedItemProps> = ({ item }) => {
  return (
    <div>
      <Card item={item} />
    </div>
  );
};

export default RelatedItem;
