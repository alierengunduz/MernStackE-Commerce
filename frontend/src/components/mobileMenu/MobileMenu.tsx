import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Drawer
      title="Star E-Commerce"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <ul className="flex flex-col gap-3">
        <li>
          <Link onClick={handleLinkClick} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/collection">
            Collection
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="h-40 flex items-center justify-center">
        <img src={assets.logo} alt="" />
      </div>
    </Drawer>
  );
};

export default MobileMenu;
