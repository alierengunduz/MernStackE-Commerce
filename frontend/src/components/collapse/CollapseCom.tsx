import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const CollapseCom = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Fabric and Product Quality",
      children: (
        <p>
          Our products are crafted with premium materials, ensuring durability
          and comfort. Each item goes through a rigorous quality control process
          to meet our high standards. Whether it's clothing or accessories, you
          can trust the fabric's texture and longevity.
        </p>
      ),
    },
    {
      key: "2",
      label: "30-Day Return Policy",
      children: (
        <p>
          If you're not satisfied with your purchase, we offer a hassle-free
          return policy. You can return any item within 30 days of delivery for
          a full refund, no questions asked. Our goal is to ensure you feel
          confident and happy with every purchase.
        </p>
      ),
    },
    {
      key: "3",
      label: "Customer Support and Services",
      children: (
        <p>
          Our customer support team is available 24/7 to assist with any
          questions or concerns. Whether you need help with sizing, shipping, or
          product inquiries, we're here to provide the best shopping experience
          possible. Your satisfaction is our priority!
        </p>
      ),
    },
  ];

  return (
    <div className="mt-10">
      <Collapse accordion items={items} />
    </div>
  );
};

export default CollapseCom;
