import { FC } from "react";
import { ProductType } from "../../types/types";
import Card from "../ui/Card";
interface CollectionPageRightItemProps {
  item: ProductType;
}

const CollectionPageRightItem: FC<CollectionPageRightItemProps> = ({
  item,
}) => {
  return (
    <div>
      <Card item={item} />
    </div>
  );
};

export default CollectionPageRightItem;
